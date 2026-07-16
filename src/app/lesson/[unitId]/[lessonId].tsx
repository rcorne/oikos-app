import { View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { IconButton } from '@/components/ui/IconButton';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';
import { LessonContentRenderer } from '@/components/content/LessonContentRenderer';
import { getLesson } from '@/content';
import { useTheme } from '@/theme/ThemeProvider';

export default function LessonScreen() {
  const { unitId, lessonId } = useLocalSearchParams<{ unitId: string; lessonId: string }>();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const data = getLesson(unitId, lessonId);

  if (!data) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background, padding: theme.spacing.lg }}>
        <Text variant="h2">No encontramos esta lección</Text>
        <Button label="Volver" onPress={() => router.back()} style={{ marginTop: theme.spacing.lg }} />
      </SafeAreaView>
    );
  }

  const { unit, lesson } = data;

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Screen edges={['top', 'left', 'right']} contentContainerStyle={{ gap: theme.spacing.xl, paddingBottom: 140 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.sm }}>
          <IconButton name="chevron-back" onPress={() => router.back()} />
          <Chip label={unit.title} tone="brand" />
        </View>

        <View style={{ gap: theme.spacing.sm }}>
          <Text variant="display">{lesson.title}</Text>
          <Text variant="bodyLg" color="secondary">
            {lesson.summary}
          </Text>
          <Text variant="caption" color="muted">
            {lesson.estimatedMinutes} min · {lesson.exercises.length} ejercicios
          </Text>
        </View>

        <LessonContentRenderer blocks={lesson.content} />
      </Screen>

      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: theme.spacing.lg,
          paddingBottom: insets.bottom + theme.spacing.md,
          backgroundColor: theme.colors.background,
          borderTopWidth: 1,
          borderTopColor: theme.colors.border,
        }}>
        <Button label="Comenzar ejercicios" onPress={() => router.push(`/exercise/${unitId}/${lessonId}`)} />
      </View>
    </View>
  );
}
