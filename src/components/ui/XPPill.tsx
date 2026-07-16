import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '@/components/ui/Text';
import { useTheme } from '@/theme/ThemeProvider';

export function XPPill({ xp }: { xp: number }) {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: theme.colors.accentSoft,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xs + 2,
        borderRadius: theme.radius.pill,
      }}>
      <Ionicons name="flash" size={15} color={theme.colors.accentStrong} />
      <Text variant="bodyBold" style={{ color: theme.colors.accentStrong }}>
        {xp} XP
      </Text>
    </View>
  );
}

export function StreakBadge({ days }: { days: number }) {
  const theme = useTheme();
  const active = days > 0;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: active ? theme.colors.dangerSoft : theme.colors.surfaceMuted,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xs + 2,
        borderRadius: theme.radius.pill,
      }}>
      <Ionicons name="flame" size={15} color={active ? theme.colors.dangerStrong : theme.colors.textMuted} />
      <Text variant="bodyBold" style={{ color: active ? theme.colors.dangerStrong : theme.colors.textMuted }}>
        {days}
      </Text>
    </View>
  );
}
