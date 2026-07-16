import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { Text } from '@/components/ui/Text';
import { Chip } from '@/components/ui/Chip';
import type { MultipleChoiceOption } from '@/content/types';
import { useTheme } from '@/theme/ThemeProvider';

type ChoiceExerciseCardProps = {
  scenario?: string;
  question: string;
  options: MultipleChoiceOption[];
  selectedId: string | null;
  correctId?: string; // provided once answered, to color options
  answered: boolean;
  onSelect: (optionId: string) => void;
};

export function ChoiceExerciseCard({
  scenario,
  question,
  options,
  selectedId,
  correctId,
  answered,
  onSelect,
}: ChoiceExerciseCardProps) {
  const theme = useTheme();

  return (
    <View style={{ gap: theme.spacing.lg }}>
      {scenario && (
        <View
          style={{
            backgroundColor: theme.colors.surfaceMuted,
            borderRadius: theme.radius.lg,
            padding: theme.spacing.lg,
            gap: theme.spacing.sm,
          }}>
          <Chip label="Caso" tone="neutral" />
          <Text variant="body" color="secondary">
            {scenario}
          </Text>
        </View>
      )}

      <Text variant="h3">{question}</Text>

      <View style={{ gap: theme.spacing.md }}>
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          const isCorrectOption = answered && correctId === option.id;
          const isWrongSelected = answered && isSelected && correctId !== option.id;

          let borderColor: string = theme.colors.border;
          let backgroundColor: string = theme.colors.surface;
          if (isCorrectOption) {
            borderColor = theme.colors.success;
            backgroundColor = theme.colors.successSoft;
          } else if (isWrongSelected) {
            borderColor = theme.colors.danger;
            backgroundColor = theme.colors.dangerSoft;
          } else if (isSelected) {
            borderColor = theme.colors.brand;
            backgroundColor = theme.colors.brandSoft;
          }

          return (
            <Pressable
              key={option.id}
              disabled={answered}
              onPress={() => {
                Haptics.selectionAsync().catch(() => {});
                onSelect(option.id);
              }}
              style={{
                borderWidth: 2,
                borderColor,
                backgroundColor,
                borderRadius: theme.radius.lg,
                padding: theme.spacing.lg,
                flexDirection: 'row',
                alignItems: 'center',
                gap: theme.spacing.md,
              }}>
              <Text variant="bodyMedium" style={{ flex: 1 }}>
                {option.text}
              </Text>
              {isCorrectOption && <Ionicons name="checkmark-circle" size={22} color={theme.colors.success} />}
              {isWrongSelected && <Ionicons name="close-circle" size={22} color={theme.colors.danger} />}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
