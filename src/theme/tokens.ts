/**
 * Oikos design tokens — the single source of truth for color, type, spacing,
 * and radii. Everything in components/ should read from here rather than
 * hardcoding values.
 *
 * Palette and typography follow the Oikos brand manual (branding/LEEME.txt):
 *   Egeo profundo #0B3B4D · Egeo #0F566E · Egeo claro #128099
 *   Terracota #E0704F · Mármol #F6F1E7 · Tinta #13242C
 *   Wordmark/display: Outfit · Body: Manrope
 */

export const palette = {
  // Brand — "Egeo", the deep Aegean teal of the manual
  egeo50: '#E8F1F4',
  egeo100: '#CDE2E9',
  egeo200: '#9CC6D3',
  egeo300: '#5FA5BA',
  egeo400: '#2E8AA6',
  egeo500: '#128099', // Egeo claro
  egeo600: '#0F566E', // Egeo
  egeo700: '#0C4759',
  egeo800: '#0B3B4D', // Egeo profundo
  egeo900: '#082C3A',

  // Accent — Terracota, for XP, streaks, highlights
  terracota300: '#F0A98F',
  terracota400: '#E88A67',
  terracota500: '#E0704F', // Terracota
  terracota600: '#C25A3B',
  terracota700: '#9E4830',

  // Feedback
  green300: '#8FE0B0',
  green500: '#1FAA59',
  green600: '#158A47',
  green700: '#0F6E39',
  red300: '#F5B3B6',
  red500: '#D64545',
  red600: '#B93A3A',
  red700: '#942E2E',

  // Neutrals — Mármol (marble) paper tones and Tinta (ink)
  marmol: '#F6F1E7', // Mármol
  marmol2: '#EFE8D9',
  arena: '#E4DBC8',
  tinta50: '#F2F6F8',
  tinta100: '#DCE5EA',
  tinta300: '#A9BBC5',
  tinta500: '#6E8491',
  tinta700: '#3A505C',
  tinta800: '#22353F',
  tinta900: '#13242C', // Tinta
  black: '#0B161C',
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
  background: palette.marmol,
  backgroundAlt: palette.marmol2,
  surface: palette.white,
  surfaceMuted: palette.marmol2,
  surfaceSunken: palette.arena,
  border: palette.arena,
  borderStrong: palette.tinta100,

  textPrimary: palette.tinta900,
  textSecondary: palette.tinta700,
  textMuted: palette.tinta500,
  textOnBrand: palette.white,
  textOnGold: palette.white,

  brand: palette.egeo600,
  brandStrong: palette.egeo800,
  brandSoft: palette.egeo50,
  brandSoftBorder: palette.egeo100,

  accent: palette.terracota500,
  accentStrong: palette.terracota600,
  accentSoft: '#FAEAE3',

  success: palette.green500,
  successStrong: palette.green700,
  successSoft: '#E8F8EF',
  danger: palette.red500,
  dangerStrong: palette.red700,
  dangerSoft: '#FBE9E9',
  info: palette.egeo500,
  infoSoft: '#E4F4F7',

  tabBar: palette.white,
  overlay: 'rgba(19, 36, 44, 0.55)',
};

export const darkColors: ThemeColors = {
  background: palette.tinta900,
  backgroundAlt: '#182B34',
  surface: '#1C323D',
  surfaceMuted: '#233C48',
  surfaceSunken: '#0E1C23',
  border: '#2C4653',
  borderStrong: '#3A5765',

  textPrimary: palette.tinta50,
  textSecondary: palette.tinta100,
  textMuted: palette.tinta300,
  textOnBrand: palette.white,
  textOnGold: palette.tinta900,

  brand: palette.egeo300,
  brandStrong: palette.egeo100,
  brandSoft: '#16394A',
  brandSoftBorder: '#1F4C60',

  accent: palette.terracota400,
  accentStrong: palette.terracota300,
  accentSoft: '#3C271E',

  success: palette.green300,
  successStrong: palette.green300,
  successSoft: '#163826',
  danger: palette.red300,
  dangerStrong: palette.red300,
  dangerSoft: '#3B1E1E',
  info: palette.egeo300,
  infoSoft: '#123540',

  tabBar: '#182B34',
  overlay: 'rgba(0, 0, 0, 0.6)',
};

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
  display: 'Outfit_700Bold',
  displaySemi: 'Outfit_600SemiBold',
  displayMedium: 'Outfit_500Medium',
  displayRegular: 'Outfit_400Regular',
  body: 'Manrope_400Regular',
  bodyMedium: 'Manrope_500Medium',
  bodySemi: 'Manrope_600SemiBold',
  bodyBold: 'Manrope_700Bold',
} as const;

export const fontsToLoad = {
  Outfit_400Regular: require('@expo-google-fonts/outfit/400Regular/Outfit_400Regular.ttf'),
  Outfit_500Medium: require('@expo-google-fonts/outfit/500Medium/Outfit_500Medium.ttf'),
  Outfit_600SemiBold: require('@expo-google-fonts/outfit/600SemiBold/Outfit_600SemiBold.ttf'),
  Outfit_700Bold: require('@expo-google-fonts/outfit/700Bold/Outfit_700Bold.ttf'),
  Outfit_800ExtraBold: require('@expo-google-fonts/outfit/800ExtraBold/Outfit_800ExtraBold.ttf'),
  Manrope_400Regular: require('@expo-google-fonts/manrope/400Regular/Manrope_400Regular.ttf'),
  Manrope_500Medium: require('@expo-google-fonts/manrope/500Medium/Manrope_500Medium.ttf'),
  Manrope_600SemiBold: require('@expo-google-fonts/manrope/600SemiBold/Manrope_600SemiBold.ttf'),
  Manrope_700Bold: require('@expo-google-fonts/manrope/700Bold/Manrope_700Bold.ttf'),
};

export const shadow = {
  card: {
    shadowColor: palette.tinta900,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  raised: {
    shadowColor: palette.tinta900,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 20,
    elevation: 6,
  },
} as const;
