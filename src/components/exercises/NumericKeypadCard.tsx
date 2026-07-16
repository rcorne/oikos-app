import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { Text } from '@/components/ui/Text';
import { useTheme } from '@/theme/ThemeProvider';

type NumericKeypadCardProps = {
  question: string;
  unitLabel?: string;
  value: string;
  onChange: (value: string) => void;
  allowDecimal: boolean;
  answered: boolean;
  isCorrect?: boolean;
};

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'del'];

export function NumericKeypadCard({ question, unitLabel, value, onChange, allowDecimal, answered, isCorrect }: NumericKeypadCardProps) {
  const theme = useTheme();

  const handleKey = (key: string) => {
    if (answered) return;
    Haptics.selectionAsync().catch(() => {});
    if (key === 'del') {
      onChange(value.slice(0, -1));
      return;
    }
    if (key === '.') {
      if (!allowDecimal || value.includes('.')) return;
      onChange(value.length === 0 ? '0.' : `${value}.`);
      return;
    }
    if (value.length >= 9) return;
    onChange(value === '0' ? key : `${value}${key}`);
  };

  const displayColor = answered ? (isCorrect ? theme.colors.successStrong : theme.colors.dangerStrong) : theme.colors.textPrimary;

  return (
    <View style={{ gap: theme.spacing.xl }}>
      <Text variant="h3">{question}</Text>

      <View
        style={{
          borderRadius: theme.radius.lg,
          borderWidth: 2,
          borderColor: answered ? displayColor : theme.colors.border,
          backgroundColor: theme.colors.surface,
          paddingVertical: theme.spacing.xl,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: theme.spacing.sm,
        }}>
        <Text variant="display" style={{ color: displayColor }}>
          {value.length > 0 ? value : '0'}
        </Text>
        {unitLabel && (
          <Text variant="h3" color="muted">
            {unitLabel}
          </Text>
        )}
      </View>

      {!answered && (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.sm }}>
          {KEYS.map((key) => {
            if (key === '.' && !allowDecimal) {
              return <View key={key} style={{ width: '30%' }} />;
            }
            return (
              <Pressable
                key={key}
                onPress={() => handleKey(key)}
                style={({ pressed }) => ({
                  width: '30%',
                  aspectRatio: 1.6,
                  borderRadius: theme.radius.md,
                  backgroundColor: pressed ? theme.colors.surfaceMuted : theme.colors.surface,
                  borderWidth: 1,
                  borderColor: theme.colors.border,
                  alignItems: 'center',
                  justifyContent: 'center',
                })}>
                {key === 'del' ? (
                  <Ionicons name="backspace-outline" size={22} color={theme.colors.textSecondary} />
                ) : (
                  <Text variant="h2">{key}</Text>
                )}
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}
