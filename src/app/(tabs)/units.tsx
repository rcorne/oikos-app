import { View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';
import { units } from '@/content';
import { useProgress } from '@/lib/progress';
import { useTheme } from '@/theme/ThemeProvider';

const sourceLabel = { mankiw: 'Mankiw', frank: 'Frank', ambos: 'Mankiw + Frank' } as const;

export default function UnitsScreen() {
  const theme = useTheme();
  const { getUnitProgress } = useProgress();

  return (
    <Screen contentContainerStyle={{ gap: theme.spacing.lg }}>
      <View style={{ paddingTop: theme.spacing.md, gap: 4 }}>
        <Text variant="h1">Unidades</Text>
        <Text variant="body" color="secondary">
          Tu recorrido por la microeconomía, unidad por unidad.
        </Text>
      </View>

      {units.map((unit) => {
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
                  {unit.index}. {unit.title}
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
    </Screen>
  );
}
