import { useEffect } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { Text } from '@/components/ui/Text';
import { useSpeechToText } from '@/lib/speech';
import { useTheme } from '@/theme/ThemeProvider';

type OpenEndedAudioCardProps = {
  prompt: string;
  value: string;
  onChangeValue: (value: string) => void;
  answered: boolean;
};

export function OpenEndedAudioCard({ prompt, value, onChangeValue, answered }: OpenEndedAudioCardProps) {
  const theme = useTheme();
  const { status, transcript, error, start, stop } = useSpeechToText();

  useEffect(() => {
    if (transcript) onChangeValue(transcript);
  }, [transcript]); // eslint-disable-line react-hooks/exhaustive-deps

  const isListening = status === 'listening';
  const voiceUnavailable = status === 'unsupported' || status === 'denied';

  const handleMicPress = () => {
    if (answered) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    if (isListening) {
      stop();
    } else {
      start();
    }
  };

  return (
    <View style={{ gap: theme.spacing.xl }}>
      <Text variant="h3">{prompt}</Text>

      {!voiceUnavailable && (
        <View style={{ alignItems: 'center', gap: theme.spacing.sm }}>
          <Pressable
            disabled={answered}
            onPress={handleMicPress}
            style={{
              width: 84,
              height: 84,
              borderRadius: 42,
              backgroundColor: isListening ? theme.colors.dangerSoft : theme.colors.brandSoft,
              borderWidth: 2,
              borderColor: isListening ? theme.colors.danger : theme.colors.brand,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons
              name={isListening ? 'stop' : 'mic'}
              size={32}
              color={isListening ? theme.colors.dangerStrong : theme.colors.brand}
            />
          </Pressable>
          <Text variant="caption" color="muted">
            {isListening ? 'Escuchando… toca para detener' : 'Toca para responder con tu voz'}
          </Text>
        </View>
      )}

      {voiceUnavailable && (
        <View
          style={{
            flexDirection: 'row',
            gap: theme.spacing.sm,
            backgroundColor: theme.colors.surfaceMuted,
            borderRadius: theme.radius.md,
            padding: theme.spacing.md,
          }}>
          <Ionicons name="information-circle-outline" size={18} color={theme.colors.textMuted} />
          <Text variant="caption" color="muted" style={{ flex: 1 }}>
            El reconocimiento de voz no está disponible en este entorno. Escribe tu respuesta abajo.
          </Text>
        </View>
      )}

      {error && (
        <Text variant="caption" color="danger">
          {error}
        </Text>
      )}

      <View>
        <Text variant="caption" color="muted" style={{ marginBottom: theme.spacing.xs }}>
          Tu respuesta (puedes editarla)
        </Text>
        <TextInput
          editable={!answered}
          multiline
          value={value}
          onChangeText={onChangeValue}
          placeholder="Escribe o dicta tu respuesta aquí…"
          placeholderTextColor={theme.colors.textMuted}
          style={{
            minHeight: 110,
            borderWidth: 1.5,
            borderColor: theme.colors.border,
            borderRadius: theme.radius.md,
            padding: theme.spacing.md,
            fontFamily: theme.font.body,
            fontSize: 15,
            lineHeight: 22,
            color: theme.colors.textPrimary,
            backgroundColor: theme.colors.surface,
            textAlignVertical: 'top',
          }}
        />
      </View>
    </View>
  );
}
