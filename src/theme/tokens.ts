/**
 * Oikos design tokens — the single source of truth for color, type, spacing,
 * and radii. Everything in components/ should read from here rather than
 * hardcoding values.
 */

export const palette = {
  // Brand — "Oikos indigo", a scholarly violet-blue with warmth
  indigo50: '#EEEDFB',
  indigo100: '#D9D6F5',
  indigo200: '#B3ACEB',
  indigo300: '#8B80DE',
  indigo400: '#6C5FD1',
  indigo500: '#4F42C4',
  indigo600: '#4038A8',
  indigo700: '#332C87',
  indigo800: '#241F5E',
  indigo900: '#151233',

  // Accent — warm gold for XP, streaks, highlights
  gold300: '#FFD98C',
  gold400: '#FFC55C',
  gold500: '#FFB020',
  gold600: '#E8951A',
  gold700: '#B9740F',

  // Feedback
  green300: '#8FE0B0',
  green500: '#1FAA59',
  green600: '#158A47',
  green700: '#0F6E39',
  red300: '#F5B3B6',
  red500: '#E5484D',
  red600: '#C93A3F',
  red700: '#9E2C30',

  // Secondary accent — teal, used for graphs/diagrams & info states
  teal300: '#8FE3D8',
  teal500: '#14B8A6',
  teal600: '#0E9488',

  // Neutrals — warm paper tone in light mode, deep indigo-black in dark mode
  paper: '#FAF8F4',
  paper2: '#F2EFE7',
  sand: '#E7E2D5',
  ink50: '#F5F3FF',
  ink100: '#E3E0F0',
  ink300: '#B9B4D0',
  ink500: '#8B87A8',
  ink700: '#4A4568',
  ink800: '#2B2748',
  ink900: '#1C1930',
  black: '#0F0D1E',
  white: '#FFFFFF',
} as const;

export interface ThemeColors {
  background: string;
  backgroundAlt: string;
  surface: string;
  surfaceMuted: string;
  surfaceSunken: string;
  border: string;
  borderStrong: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  textOnGold: string;
  brand: string;
  brandStrong: string;
  brandSoft: string;
  brandSoftBorder: string;
  accent: string;
  accentStrong: string;
  accentSoft: string;
  success: string;
  successStrong: string;
  successSoft: string;
  danger: string;
  dangerStrong: string;
  dangerSoft: string;
  info: string;
  infoSoft: string;
  tabBar: string;
  overlay: string;
}

export const lightColors: ThemeColors = {
  background: palette.paper,
  backgroundAlt: palette.paper2,
  surface: palette.white,
  surfaceMuted: palette.paper2,
  surfaceSunken: palette.sand,
  border: palette.sand,
  borderStrong: palette.ink100,

  textPrimary: palette.ink900,
  textSecondary: palette.ink700,
  textMuted: palette.ink500,
  textOnBrand: palette.white,
  textOnGold: palette.indigo900,

  brand: palette.indigo500,
  brandStrong: palette.indigo700,
  brandSoft: palette.indigo50,
  brandSoftBorder: palette.indigo100,

  accent: palette.gold500,
  accentStrong: palette.gold600,
  accentSoft: '#FFF4DF',

  success: palette.green500,
  successStrong: palette.green700,
  successSoft: '#E8F8EF',
  danger: palette.red500,
  dangerStrong: palette.red700,
  dangerSoft: '#FDEAEA',
  info: palette.teal500,
  infoSoft: '#E6FAF7',

  tabBar: palette.white,
  overlay: 'rgba(28, 25, 48, 0.55)',
} as const;

export const darkColors: ThemeColors = {
  background: palette.indigo900,
  backgroundAlt: '#1A1638',
  surface: '#211D44',
  surfaceMuted: '#282456',
  surfaceSunken: '#171331',
  border: '#332E5E',
  borderStrong: '#413A73',

  textPrimary: palette.ink50,
  textSecondary: palette.ink100,
  textMuted: palette.ink300,
  textOnBrand: palette.white,
  textOnGold: palette.indigo900,

  brand: palette.indigo300,
  brandStrong: palette.indigo100,
  brandSoft: '#2A2557',
  brandSoftBorder: '#3B356E',

  accent: palette.gold400,
  accentStrong: palette.gold300,
  accentSoft: '#3A2E14',

  success: palette.green300,
  successStrong: palette.green300,
  successSoft: '#163826',
  danger: palette.red300,
  dangerStrong: palette.red300,
  dangerSoft: '#3B1A1C',
  info: palette.teal300,
  infoSoft: '#123632',

  tabBar: '#1A1638',
  overlay: 'rgba(0, 0, 0, 0.6)',
} as const;

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
} as const;

export const fontFamily = {
  display: 'Sora_700Bold',
  displaySemi: 'Sora_600SemiBold',
  displayMedium: 'Sora_500Medium',
  displayRegular: 'Sora_400Regular',
  body: 'Manrope_400Regular',
  bodyMedium: 'Manrope_500Medium',
  bodySemi: 'Manrope_600SemiBold',
  bodyBold: 'Manrope_700Bold',
} as const;

export const fontsToLoad = {
  Sora_400Regular: require('@expo-google-fonts/sora/400Regular/Sora_400Regular.ttf'),
  Sora_500Medium: require('@expo-google-fonts/sora/500Medium/Sora_500Medium.ttf'),
  Sora_600SemiBold: require('@expo-google-fonts/sora/600SemiBold/Sora_600SemiBold.ttf'),
  Sora_700Bold: require('@expo-google-fonts/sora/700Bold/Sora_700Bold.ttf'),
  Sora_800ExtraBold: require('@expo-google-fonts/sora/800ExtraBold/Sora_800ExtraBold.ttf'),
  Manrope_400Regular: require('@expo-google-fonts/manrope/400Regular/Manrope_400Regular.ttf'),
  Manrope_500Medium: require('@expo-google-fonts/manrope/500Medium/Manrope_500Medium.ttf'),
  Manrope_600SemiBold: require('@expo-google-fonts/manrope/600SemiBold/Manrope_600SemiBold.ttf'),
  Manrope_700Bold: require('@expo-google-fonts/manrope/700Bold/Manrope_700Bold.ttf'),
};

export const shadow = {
  card: {
    shadowColor: palette.ink900,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  raised: {
    shadowColor: palette.ink900,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 20,
    elevation: 6,
  },
} as const;
