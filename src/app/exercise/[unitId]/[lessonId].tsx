import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { Text } from '@/components/ui/Text';
import { ChoiceExerciseCard } from '@/components/exercises/ChoiceExerciseCard';
import { ExerciseChart } from '@/components/exercises/ExerciseChart';
import { ExerciseHeader } from '@/components/exercises/ExerciseHeader';
import { NumericKeypadCard } from '@/components/exercises/NumericKeypadCard';
import { OpenEndedAudioCard } from '@/components/exercises/OpenEndedAudioCard';
import { FeedbackBanner } from '@/components/ui/FeedbackBanner';
import { SupportBanner } from '@/components/ui/SupportBanner';
import { getLesson } from '@/content';
import type { ExerciseGrade } from '@/content/types';
import { gradeExercise, type ExerciseResponse } from '@/lib/grading';
import { useProgress } from '@/lib/progress';
import { useTheme } from '@/theme/ThemeProvider';

const difficultyLabel = { facil: 'Fácil', media: 'Media', dificil: 'Difícil' } as const;

export default function ExerciseScreen() {
  const { unitId, lessonId } = useLocalSearchParams<{ unitId: string; lessonId: string }>();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { recordLessonResult } = useProgress();

  const data = useMemo(() => getLesson(unitId, lessonId), [unitId, lessonId]);
  const exercises = data?.lesson.exercises ?? [];

  const [index, setIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [numericValue, setNumericValue] = useState('');
  const [audioText, setAudioText] = useState('');
  const [grade, setGrade] = useState<ExerciseGrade | null>(null);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionXp, setSessionXp] = useState(0);
  const [phase, setPhase] = useState<'active' | 'summary'>('active');

  if (!data || exercises.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background, padding: theme.spacing.lg }}>
        <Text variant="h2">No encontramos esta lección</Text>
        <Button label="Volver" onPress={() => router.back()} style={{ marginTop: theme.spacing.lg }} />
      </SafeAreaView>
    );
  }

  const { unit, lesson } = data;
  const exercise = exercises[index];

  const canSubmit =
    exercise.type === 'numeric'
      ? numericValue.length > 0
      : exercise.type === 'open_ended_audio'
        ? audioText.trim().length > 0
        : selectedOptionId !== null;

  function handleCheck() {
    let response: ExerciseResponse;
    if (exercise.type === 'multiple_choice' || exercise.type === 'case_study') {
      if (!selectedOptionId) return;
      response = { type: exercise.type, optionId: selectedOptionId };
    } else if (exercise.type === 'numeric') {
      response = { type: 'numeric', value: parseFloat(numericValue) };
    } else {
      response = { type: 'open_ended_audio', text: audioText };
    }

    const result = gradeExercise(exercise, response);
    setGrade(result);
    if (result.correct) {
      setSessionCorrect((c) => c + 1);
      setSessionXp((xp) => xp + exercise.xp);
    }
  }

  async function handleContinue() {
    const isLast = index + 1 >= exercises.length;
    if (!isLast) {
      setIndex(index + 1);
      setSelectedOptionId(null);
      setNumericValue('');
      setAudioText('');
      setGrade(null);
      return;
    }

    const scoreFraction = sessionCorrect / exercises.length;
    await recordLessonResult(lesson.id, sessionXp, scoreFraction);
    setPhase('summary');
  }

  if (phase === 'summary') {
    const scorePct = Math.round((sessionCorrect / exercises.length) * 100);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: theme.spacing.xl, gap: theme.spacing.lg }}>
          <View
            style={{
              width: 96,
              height: 96,
              borderRadius: 48,
              backgroundColor: theme.colors.successSoft,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name="trophy" size={48} color={theme.colors.successStrong} />
          </View>
          <Text variant="display" center>
            ¡Lección completada!
          </Text>
          <Text variant="bodyLg" color="secondary" center>
            {lesson.title}
          </Text>

          <View style={{ flexDirection: 'row', gap: theme.spacing.xl, marginTop: theme.spacing.lg }}>
            <View style={{ alignItems: 'center' }}>
              <Text variant="h1" color="accent">
                +{sessionXp}
              </Text>
              <Text variant="caption" color="muted">
                XP ganados
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text variant="h1" color="brand">
                {scorePct}%
              </Text>
              <Text variant="caption" color="muted">
                de precisión
              </Text>
            </View>
          </View>

          <View style={{ width: '100%', gap: theme.spacing.md, marginTop: theme.spacing.xl }}>
            <Button label="Volver a la unidad" onPress={() => router.replace(`/unit/${unitId}`)} />
            <Button label="Ir al inicio" variant="ghost" onPress={() => router.replace('/')} />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const progress = (index + (grade ? 1 : 0)) / exercises.length;
  const feedbackStatus = grade ? (grade.correct ? (grade.score < 1 ? 'partial' : 'correct') : 'incorrect') : null;

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <SafeAreaView edges={['top']} style={{ paddingHorizontal: theme.spacing.lg, paddingTop: theme.spacing.sm }}>
        <ExerciseHeader progress={progress} onClose={() => router.back()} />
      </SafeAreaView>

      <ScrollView contentContainerStyle={{ padding: theme.spacing.lg, paddingBottom: 200, gap: theme.spacing.lg }}>
        <View style={{ flexDirection: 'row', gap: theme.spacing.sm }}>
          <Chip label={unit.title} tone="brand" />
          <Chip label={difficultyLabel[exercise.difficulty]} tone="neutral" />
        </View>

        {exercise.chart && <ExerciseChart spec={exercise.chart} />}

        {(exercise.type === 'multiple_choice' || exercise.type === 'case_study') && (
          <ChoiceExerciseCard
            scenario={exercise.type === 'case_study' ? exercise.scenario : undefined}
            question={exercise.question}
            options={exercise.options}
            selectedId={selectedOptionId}
            correctId={grade ? exercise.correctOptionId : undefined}
            answered={!!grade}
            onSelect={setSelectedOptionId}
          />
        )}

        {exercise.type === 'numeric' && (
          <NumericKeypadCard
            question={exercise.question}
            unitLabel={exercise.unitLabel}
            value={numericValue}
            onChange={setNumericValue}
            allowDecimal={!!exercise.decimals}
            answered={!!grade}
            isCorrect={grade?.correct}
          />
        )}

        {exercise.type === 'open_ended_audio' && (
          <OpenEndedAudioCard prompt={exercise.prompt} value={audioText} onChangeValue={setAudioText} answered={!!grade} />
        )}
      </ScrollView>

      {!grade && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: theme.spacing.lg,
            paddingBottom: insets.bottom + theme.spacing.md,
            backgroundColor: theme.colors.background,
            gap: theme.spacing.md,
          }}>
          <SupportBanner />
          <Button label="Comprobar" onPress={handleCheck} disabled={!canSubmit} />
        </View>
      )}

      {grade && feedbackStatus && (
        <FeedbackBanner
          status={feedbackStatus}
          title={grade.feedbackTitle}
          explanation={grade.feedback}
          onContinue={handleContinue}
          continueLabel={index + 1 < exercises.length ? 'Continuar' : 'Ver resultados'}
        />
      )}
    </View>
  );
}
