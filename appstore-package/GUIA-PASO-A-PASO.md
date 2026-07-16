# Guía: cómo subir Oikos al App Store

Esta carpeta contiene todo lo que necesitas tener a mano (textos, ícono, respuestas de privacidad) y esta guía te dice **dónde va cada cosa**. El proceso completo toma 1–3 horas la primera vez, más 1–3 días de espera por la revisión de Apple.

---

## Requisitos previos (una sola vez)

1. **Cuenta Apple Developer** (USD 99/año): inscríbete en https://developer.apple.com/programs/enroll/ con tu Apple ID. La aprobación puede tardar 24–48 h.
2. **Cuenta Expo** (gratis): crea una en https://expo.dev y luego, en la terminal:
   ```bash
   cd ~/oikos-app
   npx eas login
   ```
3. No necesitas Xcode ni un Mac potente: la app se compila en la nube con **EAS Build**.

---

## Paso 1 — Crear la app en App Store Connect

1. Entra a https://appstoreconnect.apple.com → **Mis apps** → botón **+** → **Nueva app**.
2. Completa:
   - **Plataforma**: iOS
   - **Nombre**: `Oikos — Aprende Economía` (ver `metadata/01-nombre-y-subtitulo.txt`)
   - **Idioma principal**: Español (Latinoamérica) — o Español (España) si no aparece
   - **ID del paquete (Bundle ID)**: `com.rcorne.oikos` — créalo primero en https://developer.apple.com/account/resources/identifiers (tipo *App IDs*, capacidad ninguna extra necesaria). Debe coincidir EXACTAMENTE con el `bundleIdentifier` que ya dejé configurado en `app.json`.
   - **SKU**: `oikos-001` (es un código interno tuyo, cualquiera sirve)
3. Al crearla, App Store Connect te dará un **Apple ID de la app** (un número, ej. 6743xxxxx). Cópialo en `eas.json` → `submit.production.ios.ascAppId` (reemplaza el placeholder).

## Paso 2 — Compilar el binario (.ipa) con EAS

```bash
cd ~/oikos-app
npx eas build --platform ios --profile production
```

- La primera vez EAS te pedirá iniciar sesión con tu **Apple ID de desarrollador** y ofrecerá crear automáticamente los certificados y perfiles de aprovisionamiento — acepta (opción recomendada).
- La compilación corre en la nube (~15–25 min). Al terminar te da un enlace al `.ipa`.

## Paso 3 — Subir el binario

Opción automática (recomendada):
```bash
npx eas submit --platform ios --latest
```
Esto sube el último build directo a App Store Connect. Alternativa manual: descarga el `.ipa` y súbelo con la app **Transporter** (gratis en el Mac App Store).

Tras subirlo, el build aparece en App Store Connect → tu app → **TestFlight** (tarda ~10–30 min en procesarse).

## Paso 4 — Completar la ficha del App Store

En App Store Connect → tu app → **Distribución** (o "App Store") → versión 1.0, pega los textos de la carpeta `metadata/` donde corresponde:

| Campo en App Store Connect | Archivo de esta carpeta |
|---|---|
| Nombre | `metadata/01-nombre-y-subtitulo.txt` |
| Subtítulo | `metadata/01-nombre-y-subtitulo.txt` |
| Texto promocional | `metadata/02-texto-promocional.txt` |
| Descripción | `metadata/03-descripcion.txt` |
| Palabras clave | `metadata/04-palabras-clave.txt` |
| URL de soporte | `metadata/05-urls.txt` |
| URL de política de privacidad | `metadata/05-urls.txt` (ver nota abajo) |
| Notas para el revisor | `metadata/06-notas-para-revision.txt` |
| Copyright | `metadata/07-categoria-y-otros.txt` |
| Categoría | `metadata/07-categoria-y-otros.txt` |

**Ícono**: no se sube en la web — viaja dentro del binario (ya configurado en `app.json` → `assets/images/ios-icon.png`). La copia en `assets/icon-appstore-1024.png` es solo referencia.

**Capturas de pantalla** (obligatorias): necesitas mínimo un set para iPhone de 6.9" o 6.7" (1290 × 2796 px). Cómo generarlas:
```bash
npx expo run:ios   # abre la app en el simulador de iPhone 16 Pro Max
# navega a las pantallas bonitas (inicio, unidades, un ejercicio, resultados)
# y en el simulador: File → Save Screen (Cmd+S)
```
Sugerencia de 5 capturas: (1) inicio con la tarjeta "Continuar aprendiendo", (2) lista de unidades, (3) una lección abierta, (4) un ejercicio de opción múltiple respondido correcto, (5) pantalla de "¡Lección completada!".

## Paso 5 — Cuestionario de privacidad

En App Store Connect → tu app → **Privacidad de la app**, responde según `metadata/08-privacidad-respuestas.md`. Resumen: **la app no recolecta ningún dato** (todo se guarda localmente en el dispositivo, no hay servidores propios ni analytics).

También hay una pregunta de **cifrado** al enviar cada build: responde "No" a usar cifrado no exento (la app solo usa HTTPS estándar). Ya dejé la exención declarada en `app.json` para que ni siquiera pregunte.

## Paso 6 — Enviar a revisión

1. En la página de la versión 1.0: selecciona el build que subiste (sección "Compilación").
2. Clasificación por edades: responde el cuestionario (todo "No" → clasificación 4+).
3. Precio: **Gratis** (sección "Precios y disponibilidad").
4. Botón **Añadir para revisión** → **Enviar a revisión de la app**.

La revisión típica tarda 24–72 h. Si la rechazan, la razón llega por email y se corrige/reenvía sin costo.

---

## Nota importante: política de privacidad (URL obligatoria)

Apple exige una **URL pública** con la política de privacidad. Incluí el texto listo en `politica-privacidad.md`. La forma más rápida de publicarla gratis:

1. Sube este repositorio a GitHub (ya lo hicimos).
2. Crea el archivo como página de GitHub Pages, o simplemente usa el enlace directo al archivo en GitHub (funciona como URL válida):
   `https://github.com/<tu-usuario>/oikos-app/blob/main/appstore-package/politica-privacidad.md`
3. Pega esa URL en el campo "URL de política de privacidad".

## Nota sobre el nombre "Oikos"

Puede que "Oikos" a secas ya esté tomado en el App Store (los nombres son únicos). Por eso el nombre propuesto es **"Oikos — Aprende Economía"**. Si también estuviera tomado, prueba variantes del archivo de nombres.

## Costos totales

- Apple Developer Program: USD 99/año (único costo obligatorio)
- EAS Build: el plan gratuito de Expo incluye compilaciones limitadas al mes (suficiente para empezar)
