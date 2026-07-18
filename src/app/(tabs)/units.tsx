import { View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';
import { SUBJECTS, unitsBySubject } from '@/content';
import { useProgress } from '@/lib/progress';
import { useTheme } from '@/theme/ThemeProvider';

export default function UnitsScreen() {
  const theme = useTheme();
  const { getUnitProgress } = useProgress();

  return (
    <Screen contentContainerStyle={{ gap: theme.spacing.xl }}>
      <View style={{ paddingTop: theme.spacing.md, gap: 4 }}>
        <Text variant="h1">Unidades</Text>
        <Text variant="body" color="secondary">
          Elige una materia para empezar tu recorrido.
        </Text>
      </View>

      <View style={{ gap: theme.spacing.lg }}>
        {SUBJECTS.map((meta) => {
          const subjectUnits = unitsBySubject(meta.subject);
          if (subjectUnits.length === 0) return null;
          const progress = getUnitProgress(subjectUnits.flatMap((u) => u.lessons.map((l) => l.id)));
          const totalLessons = subjectUnits.reduce((sum, u) => sum + u.lessons.length, 0);

          return (
            <Card
              key={meta.subject}
              onPress={() => router.push({ pathname: '/subject/[subject]', params: { subject: meta.subject } })}
              style={{ gap: theme.spacing.md }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md }}>
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
                <View style={{ flex: 1, gap: 2 }}>
                  <Text variant="h3">{meta.title}</Text>
                  <Text variant="caption" color="muted">
                    {meta.description}
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={theme.colors.textMuted} />
              </View>
              <ProgressBar progress={progress} color={meta.color} />
              <Text variant="caption" color="muted">
                {subjectUnits.length} unidades · {totalLessons} lecciones · {Math.round(progress * 100)}% completado
              </Text>
            </Card>
          );
        })}
      </View>
    </Screen>
  );
}
