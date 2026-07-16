"""Generates a 1024x1024 Oikos app icon (indigo squircle + gold 'O') for macOS packaging."""
from PIL import Image, ImageDraw, ImageFont

SIZE = 1024
MARGIN = int(SIZE * 0.09)
CORNER_RADIUS = int(SIZE * 0.22)

INDIGO_TOP = (108, 95, 209)      # #6C5FD1
INDIGO_BOTTOM = (65, 56, 168)    # #4138A8
GOLD = (255, 176, 32)            # #FFB020

FONT_PATH = "/Users/rodrigo/oikos-app/node_modules/@expo-google-fonts/sora/800ExtraBold/Sora_800ExtraBold.ttf"

img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))

# vertical gradient background
gradient = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
gpx = gradient.load()
for y in range(SIZE):
    t = y / (SIZE - 1)
    r = int(INDIGO_TOP[0] + (INDIGO_BOTTOM[0] - INDIGO_TOP[0]) * t)
    g = int(INDIGO_TOP[1] + (INDIGO_BOTTOM[1] - INDIGO_TOP[1]) * t)
    b = int(INDIGO_TOP[2] + (INDIGO_BOTTOM[2] - INDIGO_TOP[2]) * t)
    for x in range(SIZE):
        gpx[x, y] = (r, g, b, 255)

mask = Image.new("L", (SIZE, SIZE), 0)
mdraw = ImageDraw.Draw(mask)
mdraw.rounded_rectangle(
    [MARGIN, MARGIN, SIZE - MARGIN, SIZE - MARGIN],
    radius=CORNER_RADIUS,
    fill=255,
)

img.paste(gradient, (0, 0), mask)

draw = ImageDraw.Draw(img)

# thin gold ring accent inset from the edge
ring_inset = MARGIN + int(SIZE * 0.05)
draw.rounded_rectangle(
    [ring_inset, ring_inset, SIZE - ring_inset, SIZE - ring_inset],
    radius=int(CORNER_RADIUS * 0.75),
    outline=GOLD,
    width=int(SIZE * 0.014),
)

# centered "O" monogram
font = ImageFont.truetype(FONT_PATH, int(SIZE * 0.46))
text = "O"
bbox = draw.textbbox((0, 0), text, font=font)
tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
tx = (SIZE - tw) / 2 - bbox[0]
ty = (SIZE - th) / 2 - bbox[1]
draw.text((tx, ty), text, font=font, fill=(255, 255, 255, 255))

# small gold dot as the economics "cycle" accent, bottom-right of the O
dot_r = int(SIZE * 0.035)
cx, cy = int(SIZE * 0.665), int(SIZE * 0.665)
draw.ellipse([cx - dot_r, cy - dot_r, cx + dot_r, cy + dot_r], fill=GOLD)

img.save("/Users/rodrigo/oikos-app/desktop/build/icon-1024.png")
print("saved icon-1024.png")
