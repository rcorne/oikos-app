import { useCallback } from 'react';
import { Linking, Pressable, View, type ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { Text } from '@/components/ui/Text';
import { useTheme } from '@/theme/ThemeProvider';

const SUPPORT_URL = 'https://www.paypal.com/invoice/p/#RAUCDLSQXTS2S2LP';

/**
 * "Apóyanos con un café" — a subtle support prompt (Variante B) shown above the
 * bottom tab bar and on the exercise screen. The terracota button (with a coffee
 * cup) opens the PayPal payment link in the system browser / a new tab.
 */
export function SupportBanner({ style }: { style?: ViewStyle }) {
  const theme = useTheme();

  const handlePress = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    Linking.openURL(SUPPORT_URL).catch(() => {});
  }, []);

  return (
    <View
      accessibilityRole="none"
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: theme.spacing.md,
          backgroundColor: theme.colors.surfaceMuted,
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: theme.radius.lg,
          paddingVertical: theme.spacing.sm + 2,
          paddingHorizontal: theme.spacing.md,
        },
        style,
      ]}>
      <Text variant="caption" color="secondary" style={{ flex: 1, lineHeight: 17 }}>
        Apóyanos con un café para seguir mejorando esta y otras soluciones tecnológicas.
      </Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Apóyanos con un café"
        onPress={handlePress}
        style={({ pressed }) => ({
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          backgroundColor: theme.colors.accent,
          borderRadius: theme.radius.md,
          paddingVertical: theme.spacing.sm + 2,
          paddingHorizontal: theme.spacing.md,
          opacity: pressed ? 0.85 : 1,
          ...theme.shadow.card,
        })}>
        <Ionicons name="cafe" size={18} color={theme.colors.textOnGold} />
        <Text variant="button" style={{ color: theme.colors.textOnGold, fontSize: 13 }}>
          Un café
        </Text>
      </Pressable>
    </View>
  );
}
