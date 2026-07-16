import { Pressable, type ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { useTheme } from '@/theme/ThemeProvider';

type IconButtonProps = {
  name: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  size?: number;
  tone?: 'default' | 'brand' | 'muted';
  style?: ViewStyle;
};

export function IconButton({ name, onPress, size = 22, tone = 'default', style }: IconButtonProps) {
  const theme = useTheme();

  const colorMap = {
    default: theme.colors.textPrimary,
    brand: theme.colors.brand,
    muted: theme.colors.textMuted,
  };

  return (
    <Pressable
      accessibilityRole="button"
      hitSlop={10}
      onPress={() => {
        Haptics.selectionAsync().catch(() => {});
        onPress();
      }}
      style={({ pressed }) => [
        {
          width: 40,
          height: 40,
          borderRadius: theme.radius.pill,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: pressed ? theme.colors.surfaceMuted : 'transparent',
        },
        style,
      ]}>
      <Ionicons name={name} size={size} color={colorMap[tone]} />
    </Pressable>
  );
}
