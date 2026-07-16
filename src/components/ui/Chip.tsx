import { View } from 'react-native';

import { Text } from '@/components/ui/Text';
import { useTheme } from '@/theme/ThemeProvider';

type ChipProps = {
  label: string;
  tone?: 'brand' | 'success' | 'danger' | 'accent' | 'neutral';
};

export function Chip({ label, tone = 'neutral' }: ChipProps) {
  const theme = useTheme();

  const tones = {
    brand: { bg: theme.colors.brandSoft, text: theme.colors.brand },
    success: { bg: theme.colors.successSoft, text: theme.colors.successStrong },
    danger: { bg: theme.colors.dangerSoft, text: theme.colors.dangerStrong },
    accent: { bg: theme.colors.accentSoft, text: theme.colors.accentStrong },
    neutral: { bg: theme.colors.surfaceMuted, text: theme.colors.textSecondary },
  }[tone];

  return (
    <View
      style={{
        backgroundColor: tones.bg,
        borderRadius: theme.radius.pill,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xxs + 2,
        alignSelf: 'flex-start',
      }}>
      <Text variant="label" style={{ color: tones.text }}>
        {label.toUpperCase()}
      </Text>
    </View>
  );
}
