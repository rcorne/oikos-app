import { View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { IconButton } from '@/components/ui/IconButton';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';
import { getSubjectMeta, isSubject, subjectDisplayNumber, unitsBySubject } from '@/content';
import type { Unit } from '@/content/types';
import { useProgress } from '@/lib/progress';
import { useTheme } from '@/theme/ThemeProvider';

const sourceLabel: Record<Unit['source'], string> = {
  mankiw: 'Mankiw',
  frank: 'Frank',
  ambos: 'Mankiw + Frank',
  'mankiw-macro': 'Mankiw',
  'larrain-sachs': 'Larraín & Sachs',
  'ambos-macro': 'Mankiw + Larraín-Sachs',
};

export default function SubjectScreen() {
  const { subject } = useLocalSearchParams<{ subject: string }>();
  const theme = useTheme();
  const { getUnitProgress } = useProgress();

  if (!subject || !isSubject(subject)) {
    return (
      <Screen>
        <Text variant="h2">Materia no encontrada</Text>
      </Screen>
    );
  }

  const meta = getSubjectMeta(subject)!;
  const subjectUnits = unitsBySubject(subject);
  const overallProgress = getUnitProgress(subjectUnits.flatMap((u) => u.lessons.map((l) => l.id)));

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
            backgroundColor: `${meta.color}22`,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={meta.icon} size={28} color={meta.color} />
        </View>
        <Text variant="display">{meta.title}</Text>
        <Text variant="bodyLg" color="secondary">
          {meta.description}
        </Text>
        <ProgressBar progress={overallProgress} color={meta.color} />
        <Text variant="caption" color="muted">
          {subjectUnits.length} unidades · {Math.round(overallProgress * 100)}% completado
        </Text>
      </View>

      <View style={{ gap: theme.spacing.lg }}>
        {subjectUnits.map((unit) => {
          const progress = getUnitProgress(unit.lessons.map((l) => l.id));
          return (
            <Card key={unit.id} onPress={() => router.push(`/unit/${unit.id}`)} style={{ gap: theme.spacing.md }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: theme.spacing.md }}>
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: theme.radius.md,
                    backgroundColor: `${unit.color}22`,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons name={unit.icon} size={24} color={unit.color} />
                </View>
                <View style={{ flex: 1, gap: 4 }}>
                  <Text variant="bodyBold">
                    {subjectDisplayNumber(unit)}. {unit.title}
                  </Text>
                  <Text variant="caption" color="muted">
                    {unit.subtitle}
                  </Text>
                </View>
              </View>
              <Chip label={sourceLabel[unit.source]} tone="neutral" />
              <ProgressBar progress={progress} color={unit.color} />
              <Text variant="caption" color="muted">
                {unit.lessons.length} lecciones · {Math.round(progress * 100)}% completado
              </Text>
            </Card>
          );
        })}
      </View>
    </Screen>
  );
}
