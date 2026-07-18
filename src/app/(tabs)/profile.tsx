import { Alert, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '@/components/ui/Card';
import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';
import { totalLessonCount } from '@/content';
import { useProgress } from '@/lib/progress';
import { useTheme } from '@/theme/ThemeProvider';

export default function ProfileScreen() {
  const theme = useTheme();
  const { state, resetProgress } = useProgress();

  const completedLessons = Object.values(state.lessons).filter((l) => l.completed).length;
  const total = totalLessonCount();

  const confirmReset = () => {
    Alert.alert('Reiniciar progreso', 'Esto borrará tu XP, tu racha y las lecciones completadas. No se puede deshacer.', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Reiniciar', style: 'destructive', onPress: () => resetProgress() },
    ]);
  };

  return (
    <Screen contentContainerStyle={{ gap: theme.spacing.xl }}>
      <View style={{ paddingTop: theme.spacing.md, alignItems: 'center', gap: theme.spacing.md }}>
        <View
          style={{
            width: 84,
            height: 84,
            borderRadius: 42,
            backgroundColor: theme.colors.brandSoft,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="person" size={40} color={theme.colors.brand} />
        </View>
        <Text variant="h2">Tu progreso</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: theme.spacing.md }}>
        <Card style={{ flex: 1, alignItems: 'center', gap: 4 }}>
          <Text variant="h1" color="accent">
            {state.xp}
          </Text>
          <Text variant="caption" color="muted" center>
            XP totales
          </Text>
        </Card>
        <Card style={{ flex: 1, alignItems: 'center', gap: 4 }}>
          <Text variant="h1" color="danger">
            {state.streak.current}
          </Text>
          <Text variant="caption" color="muted" center>
            Racha actual
          </Text>
        </Card>
        <Card style={{ flex: 1, alignItems: 'center', gap: 4 }}>
          <Text variant="h1" color="brand">
            {completedLessons}/{total}
          </Text>
          <Text variant="caption" color="muted" center>
            Lecciones
          </Text>
        </Card>
      </View>

      <View style={{ gap: theme.spacing.md }}>
        <Text variant="h3">Acerca de Oikos</Text>
        <Card style={{ gap: theme.spacing.sm }}>
          <Text variant="body" color="secondary">
            Oikos es una app para aprender los fundamentos de la microeconomía y la macroeconomía a través de
            lecciones cortas, ejemplos concretos y ejercicios interactivos. Su contenido está inspirado en el temario
            clásico de Mankiw, Frank y Larraín-Sachs, aunque todo el texto de la app es de elaboración propia y no
            reproduce fragmentos de esos libros.
          </Text>
          <Text variant="caption" color="muted">
            Las respuestas de desarrollo se califican en el dispositivo, comparando conceptos clave contra tu
            respuesta transcrita — no se envía tu voz ni tu texto a ningún servidor.
          </Text>
        </Card>
      </View>

      <View style={{ gap: theme.spacing.md }}>
        <Text variant="h3">Ajustes</Text>
        <Pressable onPress={confirmReset}>
          <Card style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md }} borderColor={theme.colors.dangerSoft}>
            <Ionicons name="refresh-circle-outline" size={22} color={theme.colors.dangerStrong} />
            <Text variant="bodyBold" style={{ color: theme.colors.dangerStrong }}>
              Reiniciar progreso
            </Text>
          </Card>
        </Pressable>
      </View>
    </Screen>
  );
}
