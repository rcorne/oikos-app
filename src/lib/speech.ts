import { useCallback, useState } from 'react';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';

export type SpeechStatus = 'idle' | 'listening' | 'unsupported' | 'denied';

const DEFAULT_LANG = 'es-CL';

/**
 * Wraps expo-speech-recognition with a status machine + graceful fallback.
 * On platforms/environments where the native module isn't available (Expo Go,
 * an unsupported browser) `start()` resolves to status "unsupported" instead
 * of throwing, so callers can fall back to a typed answer.
 */
export function useSpeechToText(lang: string = DEFAULT_LANG) {
  const [status, setStatus] = useState<SpeechStatus>('idle');
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);

  useSpeechRecognitionEvent('start', () => setStatus('listening'));

  useSpeechRecognitionEvent('end', () => {
    setStatus((current) => (current === 'listening' ? 'idle' : current));
  });

  useSpeechRecognitionEvent('result', (event) => {
    const text = event.results[0]?.transcript ?? '';
    setTranscript(text);
  });

  useSpeechRecognitionEvent('error', (event) => {
    setStatus('idle');
    if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
      setError('Necesitamos permiso de micrófono para escucharte.');
    } else if (event.error === 'no-speech' || event.error === 'speech-timeout') {
      setError('No escuchamos nada. Intenta de nuevo, más cerca del micrófono.');
    } else {
      setError('No se pudo reconocer tu voz. Puedes escribir tu respuesta en su lugar.');
    }
  });

  const start = useCallback(async () => {
    setError(null);
    setTranscript('');
    try {
      const available = ExpoSpeechRecognitionModule.isRecognitionAvailable();
      if (!available) {
        setStatus('unsupported');
        return;
      }
      const permission = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
      if (!permission.granted) {
        setStatus('denied');
        setError('Debes habilitar el permiso de micrófono para responder por voz.');
        return;
      }
      ExpoSpeechRecognitionModule.start({
        lang,
        interimResults: true,
        continuous: false,
        addsPunctuation: true,
      });
    } catch {
      setStatus('unsupported');
    }
  }, [lang]);

  const stop = useCallback(() => {
    try {
      ExpoSpeechRecognitionModule.stop();
    } catch {
      setStatus('idle');
    }
  }, []);

  const reset = useCallback(() => {
    setTranscript('');
    setError(null);
    setStatus('idle');
  }, []);

  return { status, transcript, error, start, stop, reset, setTranscript };
}
