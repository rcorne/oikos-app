"""Generates the full-bleed 1024x1024 iOS/App Store icon (no alpha, no rounded corners —
iOS applies its own mask). Reuses the Oikos indigo gradient + gold 'O' design."""
from PIL import Image, ImageDraw, ImageFont

SIZE = 1024
INDIGO_TOP = (108, 95, 209)      # #6C5FD1
INDIGO_BOTTOM = (65, 56, 168)    # #4138A8
GOLD = (255, 176, 32)            # #FFB020

FONT_PATH = "/Users/rodrigo/oikos-app/node_modules/@expo-google-fonts/sora/800ExtraBold/Sora_800ExtraBold.ttf"

img = Image.new("RGB", (SIZE, SIZE))
px = img.load()
for y in range(SIZE):
    t = y / (SIZE - 1)
    r = int(INDIGO_TOP[0] + (INDIGO_BOTTOM[0] - INDIGO_TOP[0]) * t)
    g = int(INDIGO_TOP[1] + (INDIGO_BOTTOM[1] - INDIGO_TOP[1]) * t)
    b = int(INDIGO_TOP[2] + (INDIGO_BOTTOM[2] - INDIGO_TOP[2]) * t)
    for x in range(SIZE):
        px[x, y] = (r, g, b)

draw = ImageDraw.Draw(img)

# thin gold ring accent (inset enough to survive iOS corner masking)
ring_inset = int(SIZE * 0.12)
draw.rounded_rectangle(
    [ring_inset, ring_inset, SIZE - ring_inset, SIZE - ring_inset],
    radius=int(SIZE * 0.16),
    outline=GOLD,
    width=int(SIZE * 0.014),
)

font = ImageFont.truetype(FONT_PATH, int(SIZE * 0.46))
text = "O"
bbox = draw.textbbox((0, 0), text, font=font)
tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
tx = (SIZE - tw) / 2 - bbox[0]
ty = (SIZE - th) / 2 - bbox[1]
draw.text((tx, ty), text, font=font, fill=(255, 255, 255))

dot_r = int(SIZE * 0.035)
cx, cy = int(SIZE * 0.665), int(SIZE * 0.665)
draw.ellipse([cx - dot_r, cy - dot_r, cx + dot_r, cy + dot_r], fill=GOLD)

img.save("/Users/rodrigo/oikos-app/assets/images/ios-icon.png")
print("saved assets/images/ios-icon.png")
