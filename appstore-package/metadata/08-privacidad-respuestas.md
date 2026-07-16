# Respuestas para el cuestionario "Privacidad de la app" (App Store Connect)

Sección: App Store Connect → tu app → **Privacidad de la app** (App Privacy)

## Pregunta inicial: "¿Tú o tus socios externos recopilan datos de esta app?"

**Respuesta: NO** ("No, we do not collect data from this app")

Con esa única respuesta el cuestionario termina y la ficha mostrará la etiqueta
**"No se recopilan datos" (Data Not Collected)** — la mejor etiqueta posible.

## Por qué es verdad (por si Apple pide aclaración)

- El progreso (XP, racha, lecciones) se guarda solo en el dispositivo (AsyncStorage). Nunca se transmite.
- Las respuestas por voz se transcriben con el reconocimiento de voz del sistema (SFSpeechRecognizer) y se califican localmente. Ni el audio ni el texto salen de la app.
- No hay cuentas de usuario, analytics, publicidad, ni SDKs de terceros que recolecten datos.
- La app no hace ninguna petición de red propia.

Nota: el reconocimiento de voz de iOS puede procesar el audio en servidores de Apple según la configuración del sistema del usuario (no es recolección de datos *por parte de la app* y no se declara en el cuestionario; el permiso de micrófono y de reconocimiento de voz ya tienen sus textos de propósito configurados en la app).

## Declaración de cifrado (al subir cada build)

Pregunta "Export Compliance": **"No"** — la app no usa cifrado propietario ni algoritmos no exentos (solo el HTTPS estándar del sistema, exento).
