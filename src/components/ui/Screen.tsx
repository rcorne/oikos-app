import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type ViewStyle } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';

import { useTheme } from '@/theme/ThemeProvider';

type ScreenProps = {
  children: ReactNode;
  scroll?: boolean;
  padded?: boolean;
  edges?: Edge[];
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
};

export function Screen({ children, scroll = true, padded = true, edges, style, contentContainerStyle }: ScreenProps) {
  const theme = useTheme();

  const inner = padded ? { paddingHorizontal: theme.spacing.lg } : undefined;

  return (
    <SafeAreaView
      edges={edges ?? ['top', 'left', 'right']}
      style={[styles.flex, { backgroundColor: theme.colors.background }, style]}>
      {scroll ? (
        <ScrollView
          style={styles.flex}
          contentContainerStyle={[inner, { paddingBottom: theme.spacing.xxxl }, contentContainerStyle]}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.flex, inner, contentContainerStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
