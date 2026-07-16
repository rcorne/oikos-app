import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { useTheme } from '@/theme/ThemeProvider';

type ProgressBarProps = {
  progress: number; // 0..1
  height?: number;
  color?: string;
  trackColor?: string;
};

export function ProgressBar({ progress, height = 10, color, trackColor }: ProgressBarProps) {
  const theme = useTheme();
  const clamped = Math.max(0, Math.min(1, progress));
  const width = useSharedValue(clamped);

  useEffect(() => {
    width.value = withTiming(clamped, { duration: 450 });
  }, [clamped, width]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value * 100}%`,
  }));

  return (
    <View
      style={{
        height,
        borderRadius: theme.radius.pill,
        backgroundColor: trackColor ?? theme.colors.surfaceMuted,
        overflow: 'hidden',
      }}>
      <Animated.View
        style={[
          {
            height: '100%',
            borderRadius: theme.radius.pill,
            backgroundColor: color ?? theme.colors.brand,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
}
