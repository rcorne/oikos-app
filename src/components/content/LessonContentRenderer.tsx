import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '@/components/ui/Text';
import { Chip } from '@/components/ui/Chip';
import type { ContentBlock } from '@/content/types';
import { useTheme } from '@/theme/ThemeProvider';

const calloutIcon = {
  info: 'information-circle' as const,
  tip: 'bulb' as const,
  warning: 'warning' as const,
};

export function LessonContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  const theme = useTheme();

  return (
    <View style={{ gap: theme.spacing.lg }}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return (
              <Text key={index} variant="h2" style={{ marginTop: index === 0 ? 0 : theme.spacing.sm }}>
                {block.text}
              </Text>
            );

          case 'paragraph':
            return (
              <Text key={index} variant="bodyLg" color="secondary">
                {block.text}
              </Text>
            );

          case 'list':
            return (
              <View key={index} style={{ gap: theme.spacing.sm }}>
                {block.items.map((item, i) => (
                  <View key={i} style={{ flexDirection: 'row', gap: theme.spacing.sm }}>
                    <Text variant="bodyLg" color="brand">
                      {block.ordered ? `${i + 1}.` : '•'}
                    </Text>
                    <Text variant="bodyLg" color="secondary" style={{ flex: 1 }}>
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            );

          case 'callout': {
            const tones = {
              info: { bg: theme.colors.infoSoft, fg: theme.colors.info },
              tip: { bg: theme.colors.accentSoft, fg: theme.colors.accentStrong },
              warning: { bg: theme.colors.dangerSoft, fg: theme.colors.dangerStrong },
            }[block.tone];
            return (
              <View
                key={index}
                style={{
                  backgroundColor: tones.bg,
                  borderRadius: theme.radius.lg,
                  padding: theme.spacing.lg,
                  flexDirection: 'row',
                  gap: theme.spacing.md,
                }}>
                <Ionicons name={calloutIcon[block.tone]} size={22} color={tones.fg} />
                <View style={{ flex: 1, gap: 4 }}>
                  {block.title && (
                    <Text variant="bodyBold" style={{ color: tones.fg }}>
                      {block.title}
                    </Text>
                  )}
                  <Text variant="body" style={{ color: tones.fg }}>
                    {block.text}
                  </Text>
                </View>
              </View>
            );
          }

          case 'example':
            return (
              <View
                key={index}
                style={{
                  borderRadius: theme.radius.lg,
                  borderWidth: 1.5,
                  borderColor: theme.colors.brandSoftBorder,
                  backgroundColor: theme.colors.brandSoft,
                  padding: theme.spacing.lg,
                  gap: theme.spacing.sm,
                }}>
                <Chip label="Ejemplo" tone="brand" />
                <Text variant="bodyBold">{block.title}</Text>
                <Text variant="body" color="secondary">
                  {block.text}
                </Text>
              </View>
            );

          case 'formula':
            return (
              <View
                key={index}
                style={{
                  borderRadius: theme.radius.md,
                  backgroundColor: theme.colors.surfaceSunken,
                  paddingVertical: theme.spacing.lg,
                  paddingHorizontal: theme.spacing.lg,
                  alignItems: 'center',
                  gap: theme.spacing.xs,
                }}>
                {block.label && (
                  <Text variant="caption" color="muted">
                    {block.label}
                  </Text>
                )}
                <Text variant="h3" style={{ fontFamily: theme.font.bodyBold, textAlign: 'center' }}>
                  {block.text}
                </Text>
              </View>
            );

          default:
            return null;
        }
      })}
    </View>
  );
}
