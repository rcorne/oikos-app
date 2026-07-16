import { View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { IconButton } from '@/components/ui/IconButton';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';
import { getUnit } from '@/content';
import { useProgress } from '@/lib/progress';
import { useTheme } from '@/theme/ThemeProvider';

const sourceLabel = { mankiw: 'Mankiw', frank: 'Frank', ambos: 'Mankiw + Frank' } as const;

export default function UnitScreen() {
  const { unitId } = useLocalSearchParams<{ unitId: string }>();
  const theme = useTheme();
  const { isLessonCompleted, getUnitProgress } = useProgress();

  const unit = getUnit(unitId);

  if (!unit) {
    return (
      <Screen>
        <Text variant="h2">No encontramos esta unidad</Text>
      </Screen>
    );
  }

  const lessonIds = unit.lessons.map((l) => l.id);
  const progress = getUnitProgress(lessonIds);

  return (
    <Screen contentContainerStyle={{ gap: theme.spacing.xl }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.sm }}>
        <IconButton name="chevron-back" onPress={() => router.back()} />
      </View>

      <View style={{ gap: theme.spacing.md }}>
        <View
          style={{
            width: 56,
            height: 56,
            borderRadius: theme.radius.lg,
            backgroundColor: `${unit.color}22`,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={unit.icon} size={28} color={unit.color} />
        </View>
        <Text variant="display">{unit.title}</Text>
        <Text variant="bodyLg" color="secondary">
          {unit.description}
        </Text>
        <Chip label={sourceLabel[unit.source]} tone="neutral" />
        <ProgressBar progress={progress} color={unit.color} />
        <Text variant="caption" color="muted">
          {Math.round(progress * 100)}% completado
        </Text>
      </View>

      <View style={{ gap: theme.spacing.md }}>
        {unit.lessons.map((lesson, i) => {
          const completed = isLessonCompleted(lesson.id);
          return (
            <Card key={lesson.id} onPress={() => router.push(`/lesson/${unit.id}/${lesson.id}`)}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md }}>
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: completed ? theme.colors.successSoft : theme.colors.surfaceMuted,
                  }}>
                  {completed ? (
                    <Ionicons name="checkmark" size={18} color={theme.colors.successStrong} />
                  ) : (
                    <Text variant="bodyBold" color="muted">
                      {i + 1}
                    </Text>
                  )}
                </View>
                <View style={{ flex: 1, gap: 2 }}>
                  <Text variant="bodyBold">{lesson.title}</Text>
                  <Text variant="caption" color="muted">
                    {lesson.estimatedMinutes} min · {lesson.exercises.length} ejercicios
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
