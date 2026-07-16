import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { useTheme } from '@/theme/ThemeProvider';

type FeedbackBannerProps = {
  status: 'correct' | 'incorrect' | 'partial';
  title: string;
  explanation?: string;
  onContinue: () => void;
  continueLabel?: string;
};

export function FeedbackBanner({ status, title, explanation, onContinue, continueLabel = 'Continuar' }: FeedbackBannerProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(80);

  useEffect(() => {
    translateY.value = withTiming(0, { duration: 320 });
  }, [translateY]);

  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ translateY: translateY.value }] }));

  const tone = {
    correct: { bg: theme.colors.successSoft, text: theme.colors.successStrong, icon: 'checkmark-circle' as const },
    partial: { bg: theme.colors.accentSoft, text: theme.colors.accentStrong, icon: 'alert-circle' as const },
    incorrect: { bg: theme.colors.dangerSoft, text: theme.colors.dangerStrong, icon: 'close-circle' as const },
  }[status];

  const buttonVariant = status === 'incorrect' ? 'danger' : status === 'partial' ? 'gold' : 'success';

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyle,
        {
          backgroundColor: tone.bg,
          paddingBottom: insets.bottom + theme.spacing.lg,
          borderTopLeftRadius: theme.radius.xl,
          borderTopRightRadius: theme.radius.xl,
        },
      ]}>
      <View style={styles.header}>
        <Ionicons name={tone.icon} size={26} color={tone.text} />
        <Text variant="h3" style={{ color: tone.text, flex: 1 }}>
          {title}
        </Text>
      </View>
      {explanation ? (
        <Text variant="body" color="secondary" style={{ marginTop: theme.spacing.xs, marginBottom: theme.spacing.lg }}>
          {explanation}
        </Text>
      ) : (
        <View style={{ height: theme.spacing.lg }} />
      )}
      <Button label={continueLabel} onPress={onContinue} variant={buttonVariant} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
