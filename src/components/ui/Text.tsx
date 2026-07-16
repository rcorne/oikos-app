import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { useTheme } from '@/theme/ThemeProvider';

export type TextVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'bodyLg'
  | 'body'
  | 'bodyMedium'
  | 'bodyBold'
  | 'caption'
  | 'label'
  | 'button';

type Color = 'primary' | 'secondary' | 'muted' | 'onBrand' | 'brand' | 'success' | 'danger' | 'accent';

export type TextComponentProps = RNTextProps & {
  variant?: TextVariant;
  color?: Color;
  center?: boolean;
};

const variantStyle: Record<TextVariant, { fontSize: number; lineHeight: number; family: string }> = {
  display: { fontSize: 34, lineHeight: 40, family: 'display' },
  h1: { fontSize: 28, lineHeight: 34, family: 'display' },
  h2: { fontSize: 22, lineHeight: 28, family: 'displaySemi' },
  h3: { fontSize: 18, lineHeight: 24, family: 'displaySemi' },
  bodyLg: { fontSize: 17, lineHeight: 26, family: 'body' },
  body: { fontSize: 15, lineHeight: 23, family: 'body' },
  bodyMedium: { fontSize: 15, lineHeight: 23, family: 'bodyMedium' },
  bodyBold: { fontSize: 15, lineHeight: 23, family: 'bodyBold' },
  caption: { fontSize: 13, lineHeight: 18, family: 'bodyMedium' },
  label: { fontSize: 12, lineHeight: 16, family: 'bodyBold' },
  button: { fontSize: 16, lineHeight: 20, family: 'bodySemi' },
};

export function Text({ variant = 'body', color = 'primary', center, style, ...rest }: TextComponentProps) {
  const theme = useTheme();
  const v = variantStyle[variant];
  const fontFamily = (theme.font as Record<string, string>)[v.family];

  const colorMap: Record<Color, string> = {
    primary: theme.colors.textPrimary,
    secondary: theme.colors.textSecondary,
    muted: theme.colors.textMuted,
    onBrand: theme.colors.textOnBrand,
    brand: theme.colors.brand,
    success: theme.colors.successStrong,
    danger: theme.colors.dangerStrong,
    accent: theme.colors.accentStrong,
  };

  return (
    <RNText
      style={[
        {
          fontFamily,
          fontSize: v.fontSize,
          lineHeight: v.lineHeight,
          color: colorMap[color],
          textAlign: center ? 'center' : undefined,
        },
        style,
      ]}
      {...rest}
    />
  );
}
