# Oikos

App móvil (iOS + Android, React Native / Expo) para aprender microeconomía a partir de lecciones cortas, ejemplos concretos y ejercicios interactivos. El contenido está inspirado en el temario clásico de *Principios de Economía* (Mankiw) y *Microeconomía y Conducta* (Frank), pero todo el texto de la app es de elaboración propia — no reproduce fragmentos de esos libros.

## Qué incluye

- **8 unidades / 24 lecciones**: principios básicos, oferta y demanda, elasticidad, comportamiento del consumidor, costos de producción, estructuras de mercado, fallas de mercado, y economía de políticas públicas.
- **4 tipos de ejercicio** por lección: opción múltiple, numérico (teclado táctil en pantalla), caso de estudio, y desarrollo por voz (se transcribe a texto y se califica en el dispositivo).
- **Calificación 100% local**: las respuestas de desarrollo se comparan contra una lista de conceptos clave (palabras/frases sinónimas) — no se envía audio ni texto a ningún servidor.
- **Progreso persistente**: XP, racha diaria y lecciones completadas, guardados en el dispositivo (AsyncStorage).
- **Diseño propio**: tipografía Sora + Manrope, paleta índigo/dorado, modo claro y oscuro.

## Cómo correrla

```bash
npm install
npx expo start
```

Desde ahí puedes abrir la app en:

- **Web** (`w` en la terminal, o `npx expo start --web`) — la forma más rápida de ver la interfaz. El reconocimiento de voz funciona aquí solo si el navegador soporta la Web Speech API (Chrome/Edge); si no, el ejercicio de audio cae automáticamente a un campo de texto.
- **Expo Go** (escaneando el QR) — funciona para navegar toda la app, **excepto** el reconocimiento de voz nativo (ver abajo).
- **Development build** (`npx expo run:ios` / `npx expo run:android`) — necesario para probar el reconocimiento de voz nativo en un dispositivo o simulador real.

### Reconocimiento de voz nativo

El ejercicio de audio usa [`expo-speech-recognition`](https://www.npmjs.com/package/expo-speech-recognition), que es un módulo nativo. **No funciona en Expo Go.** Para probarlo en iOS/Android real:

```bash
npx expo run:ios     # o
npx expo run:android
```

Esto genera un development build con el módulo compilado. En todos los casos (web sin soporte, Expo Go, o permiso de micrófono denegado), el ejercicio degrada automáticamente a un campo de texto editable — la calificación funciona igual sobre el texto, venga de voz o de teclado.

## Estructura del contenido

Todo el contenido pedagógico vive como datos tipados en `src/content/`:

```
src/content/
  types.ts              # esquema: Unit, Lesson, ContentBlock, Exercise (4 variantes)
  index.ts               # agrega todas las unidades en un solo array `units`
  units/
    unit-01-principios.ts
    unit-02-oferta-demanda.ts
    ...
```

Para agregar una lección o unidad nueva, solo hay que escribir un archivo más siguiendo el tipo `Unit` de `types.ts` — no se toca ninguna pantalla ni componente. Cada ejercicio de tipo `open_ended_audio` define `keyPoints` (conceptos esperados, cada uno con sinónimos en español) y `minPointsToPass`; el motor de calificación en `src/lib/grading.ts` normaliza el texto (minúsculas, sin tildes) y busca esos sinónimos.

## Versión de escritorio (macOS)

`desktop/` contiene un empaquetado Electron de la app para macOS (útil para probarla como app de escritorio sin un simulador de iOS/Android). Es un envoltorio de la build web de Expo — no una app nativa de macOS/Catalyst.

```bash
npx expo export --platform web --output-dir desktop/dist   # regenerar la build web
cd desktop
npm install
npm run dist    # genera desktop/release/Oikos-<version>-arm64.dmg
```

El build hace una firma **ad-hoc profunda** de la app (`codesign --force --deep --sign -`), pero no está firmada con Developer ID ni notarizada (eso requeriría una cuenta de Apple Developer de pago). Por eso, al descargar el `.dmg` en otro Mac, Gatekeeper puede mostrar **"Oikos está dañado y no puede abrirse"** — es la marca de cuarentena que macOS pone a las descargas, no un daño real.

Para instalarla en otro Mac, después de arrastrarla a Aplicaciones:

```bash
xattr -cr /Applications/Oikos.app
```

Ese comando quita la cuarentena sin modificar la app. Alternativa sin Terminal: clic derecho sobre la app → **Abrir** → **Abrir**. La única forma de que abra con doble clic directo desde una descarga es firmar con Developer ID y notarizar con Apple.

## Pendiente / fuera de alcance de esta versión

- Ícono de app y splash screen personalizados (quedan los placeholders de Expo).
- Publicación en App Store / Play Store (requiere cuentas de desarrollador y `eas build`).
- Contenido adicional más allá de las 8 unidades iniciales.
