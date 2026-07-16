import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

const STORAGE_KEY = 'oikos:progress:v1';

export type LessonProgress = {
  completed: boolean;
  bestScore: number; // 0..1, fraction of exercises answered correctly on the best attempt
  attempts: number;
};

export type StreakState = {
  current: number;
  longest: number;
  lastActiveDate: string | null; // YYYY-MM-DD
};

export type ProgressState = {
  xp: number;
  streak: StreakState;
  lessons: Record<string, LessonProgress>;
};

const initialState: ProgressState = {
  xp: 0,
  streak: { current: 0, longest: 0, lastActiveDate: null },
  lessons: {},
};

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / msPerDay);
}

function advanceStreak(streak: StreakState): StreakState {
  const today = todayKey();
  if (streak.lastActiveDate === today) return streak;

  const isConsecutive = streak.lastActiveDate !== null && daysBetween(streak.lastActiveDate, today) === 1;
  const current = isConsecutive ? streak.current + 1 : 1;

  return {
    current,
    longest: Math.max(streak.longest, current),
    lastActiveDate: today,
  };
}

type ProgressContextValue = {
  state: ProgressState;
  isReady: boolean;
  isLessonCompleted: (lessonId: string) => boolean;
  getUnitProgress: (lessonIds: string[]) => number; // 0..1
  recordLessonResult: (lessonId: string, xpEarned: number, scoreFraction: number) => Promise<void>;
  resetProgress: () => Promise<void>;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(initialState);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw) setState(JSON.parse(raw));
      })
      .finally(() => setIsReady(true));
  }, []);

  const persist = useCallback((next: ProgressState) => {
    setState(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => {});
  }, []);

  const isLessonCompleted = useCallback((lessonId: string) => !!state.lessons[lessonId]?.completed, [state.lessons]);

  const getUnitProgress = useCallback(
    (lessonIds: string[]) => {
      if (lessonIds.length === 0) return 0;
      const completedCount = lessonIds.filter((id) => state.lessons[id]?.completed).length;
      return completedCount / lessonIds.length;
    },
    [state.lessons],
  );

  const recordLessonResult = useCallback(
    async (lessonId: string, xpEarned: number, scoreFraction: number) => {
      const existing = state.lessons[lessonId];
      const nextLesson: LessonProgress = {
        completed: true,
        bestScore: Math.max(existing?.bestScore ?? 0, scoreFraction),
        attempts: (existing?.attempts ?? 0) + 1,
      };

      const next: ProgressState = {
        xp: state.xp + xpEarned,
        streak: advanceStreak(state.streak),
        lessons: { ...state.lessons, [lessonId]: nextLesson },
      };

      persist(next);
    },
    [state, persist],
  );

  const resetProgress = useCallback(async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setState(initialState);
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({ state, isReady, isLessonCompleted, getUnitProgress, recordLessonResult, resetProgress }),
    [state, isReady, isLessonCompleted, getUnitProgress, recordLessonResult, resetProgress],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within a ProgressProvider');
  return ctx;
}
