import { View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';
import { StreakBadge, XPPill } from '@/components/ui/XPPill';
import { units, unitsBySubject, totalLessonCount } from '@/content';
import type { Subject } from '@/content/types';
import { useProgress } from '@/lib/progress';
import { useTheme } from '@/theme/ThemeProvider';

function findNextLesson(isLessonCompleted: (id: string) => boolean) {
  for (const unit of units) {
    for (const lesson of unit.lessons) {
      if (!isLessonCompleted(lesson.id)) return { unit, lesson };
    }
  }
  return null;
}

const subjectSummary: { subject: Subject; title: string; icon: keyof typeof Ionicons.glyphMap; color: string }[] = [
  { subject: 'microeconomia', title: 'Microeconomía', icon: 'people-outline', color: '#0F566E' },
  { subject: 'macroeconomia', title: 'Macroeconomía', icon: 'earth-outline', color: '#B14E33' },
];

export default function HomeScreen() {
  const theme = useTheme();
  const { state, isLessonCompleted, getUnitProgress } = useProgress();

  const next = findNextLesson(isLessonCompleted);
  const completedLessons = Object.values(state.lessons).filter((l) => l.completed).length;
  const total = totalLessonCount();

  return (
    <Screen contentContainerStyle={{ gap: theme.spacing.xl }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: theme.spacing.md }}>
        <View>
          <Text variant="caption" color="muted">
            Bienvenido de vuelta
          </Text>
          <Text variant="h1">Oikos</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: theme.spacing.sm }}>
          <StreakBadge days={state.streak.current} />
          <XPPill xp={state.xp} />
        </View>
      </View>

      {next ? (
        <LinearGradient
          colors={[next.unit.color, theme.colors.brandStrong]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ borderRadius: theme.radius.xl, padding: theme.spacing.xl, gap: theme.spacing.md }}>
          <Text variant="label" style={{ color: '#ffffffcc' }}>
            CONTINUAR APRENDIENDO
          </Text>
          <Text variant="h2" color="onBrand">
            {next.lesson.title}
          </Text>
          <Text variant="body" style={{ color: '#ffffffdd' }}>
            {next.unit.title} · {next.lesson.estimatedMinutes} min
          </Text>
          <Button
            label="Continuar"
            variant="gold"
            fullWidth={false}
            onPress={() => router.push(`/lesson/${next.unit.id}/${next.lesson.id}`)}
            style={{ marginTop: theme.spacing.sm }}
          />
        </LinearGradient>
      ) : (
        <Card>
          <View style={{ alignItems: 'center', gap: theme.spacing.sm, paddingVertical: theme.spacing.md }}>
            <Ionicons name="ribbon" size={40} color={theme.colors.accentStrong} />
            <Text variant="h3">¡Completaste todo el contenido!</Text>
            <Text variant="body" color="secondary" center>
              Repasa cualquier unidad cuando quieras desde la pestaña Unidades.
            </Text>
          </View>
        </Card>
      )}

      <View style={{ flexDirection: 'row', gap: theme.spacing.md }}>
        <Card style={{ flex: 1, alignItems: 'center', gap: 4 }}>
          <Text variant="h2" color="brand">
            {completedLessons}/{total}
          </Text>
          <Text variant="caption" color="muted" center>
            Lecciones completadas
          </Text>
        </Card>
        <Card style={{ flex: 1, alignItems: 'center', gap: 4 }}>
          <Text variant="h2" color="danger">
            {state.streak.longest}
          </Text>
          <Text variant="caption" color="muted" center>
            Racha más larga
          </Text>
        </Card>
      </View>

      <View style={{ gap: theme.spacing.md }}>
        <Text variant="h3">Tu progreso por materia</Text>
        {subjectSummary.map((s) => {
          const subjectUnits = unitsBySubject(s.subject);
          if (subjectUnits.length === 0) return null;
          const lessonIds = subjectUnits.flatMap((u) => u.lessons.map((l) => l.id));
          const progress = getUnitProgress(lessonIds);
          return (
            <Card key={s.subject} onPress={() => router.push('/units')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md }}>
                <ProgressRing
                  progress={progress}
                  size={48}
                  strokeWidth={5}
                  color={s.color}
                  centerContent={<Ionicons name={s.icon} size={20} color={s.color} />}
                />
                <View style={{ flex: 1, gap: 2 }}>
                  <Text variant="bodyBold">{s.title}</Text>
                  <Text variant="caption" color="muted">
                    {subjectUnits.length} unidades · {Math.round(progress * 100)}%
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={theme.colors.textMuted} />
              </View>
            </Card>
          );
        })}
      </View>
    </Screen>
  );
}
