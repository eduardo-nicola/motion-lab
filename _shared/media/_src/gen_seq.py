"""Gera _shared/media/seq/f000–f047.svg: vista explodida de um porta-copos de 4 camadas.
Rodar a partir de _shared/media: python3 _src/gen_seq.py"""
import math, random
W, H = 1600, 1000
CX, R, N = 640, 320, 48
FLOOR = 870
LAYERS = [  # label, espessura, topo, lateral escura, lateral clara, tipo
    ('01 · CORTIÇA PRENSADA · 6 MM', 30, '#c98f55', '#6e4322', '#b77a44', 'cork'),
    ('02 · FILME DE SELAGEM · 0,4 MM', 8, '#e9b074', '#8a5a2e', '#d99a5a', 'film'),
    ('03 · NÚCLEO DENSO · 3 MM', 18, '#3a2616', '#1c1109', '#4a3020', 'core'),
    ('04 · FELTRO ANTIDESLIZE · 2 MM', 12, '#5d6c49', '#2e3624', '#6f7f58', 'felt'),
]
def smooth(t): return t * t * (3 - 2 * t)
def clamp(t): return max(0.0, min(1.0, t))
random.seed(7)
DOTS = [(random.uniform(0, 6.2832), math.sqrt(random.random()) * R * .96, random.uniform(3, 11), random.uniform(.45, 1)) for _ in range(380)]
FIBERS = [(random.uniform(0, 6.2832), math.sqrt(random.random()) * R * .95, random.uniform(0, 180)) for _ in range(160)]

def top_face(kind, color, ry, cy, ang):
    g = f'<g transform="translate({CX} {cy:.1f}) scale(1 {ry / R:.4f}) rotate({ang:.1f})"><circle r="{R}" fill="{color}"/>'
    if kind == 'cork':
        for a, r, s, k in DOTS:
            g += f'<ellipse cx="{r*math.cos(a):.0f}" cy="{r*math.sin(a):.0f}" rx="{s:.1f}" ry="{s*k:.1f}" fill="#6e4322" opacity=".55"/>'
        g += f'<circle r="{R*.78:.0f}" fill="none" stroke="#8a5a2e" stroke-width="3" opacity=".6"/>'
        g += '<text y="22" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="64" letter-spacing="-2" fill="#6e4322" opacity=".85">Nº 7</text>'
    elif kind == 'film':
        g += f'<circle r="{R}" fill="url(#sheen)"/>'
    elif kind == 'core':
        for i in range(1, 9):
            g += f'<circle r="{R*i/9:.0f}" fill="none" stroke="#4a3020" stroke-width="2" opacity=".7"/>'
    elif kind == 'felt':
        for a, r, rot in FIBERS:
            x, y = r * math.cos(a), r * math.sin(a)
            g += f'<rect x="{x:.0f}" y="{y:.0f}" width="16" height="2" fill="#7f9166" opacity=".55" transform="rotate({rot:.0f} {x:.0f} {y:.0f})"/>'
    g += '</g>'
    g += f'<path d="M {CX-R} {cy:.1f} A {R} {ry:.1f} 0 0 0 {CX+R} {cy:.1f}" fill="none" stroke="#fff3e0" stroke-width="2" opacity=".35"/>'
    return g

def side(cy, ry, h, i):
    return f'<path d="M {CX-R} {cy:.1f} L {CX-R} {cy+h:.1f} A {R} {ry:.1f} 0 0 0 {CX+R} {cy+h:.1f} L {CX+R} {cy:.1f} Z" fill="url(#side{i})"/>'

for f in range(N):
    t = f / (N - 1)
    te = smooth(clamp((t - .06) / .8))           # explosão das camadas
    elev = math.radians(14 + 22 * smooth(t))     # câmera sobe
    ry, ch = R * math.sin(elev), math.cos(elev)
    ang = -25 + 70 * smooth(t)                   # giro do disco
    gap = te * 175
    total = sum(l[1] for l in LAYERS) * ch + gap * (len(LAYERS) - 1)
    rest_y = FLOOR - 14 - total                   # pousado no piso
    y = rest_y + (455 - total / 2 - rest_y) * smooth(clamp(t / .55))   # levanta até o centro
    lab = clamp((t - .62) / .2)
    d = ('<radialGradient id="spot" cx=".4" cy=".45" r=".62"><stop offset="0" stop-color="#3a2516"/><stop offset=".4" stop-color="#1c110a"/><stop offset=".68" stop-color="#100904"/></radialGradient>'
         '<radialGradient id="shadow"><stop offset="0" stop-color="#000" stop-opacity=".75"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>'
         '<linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".2"/></linearGradient>')
    for i, l in enumerate(LAYERS):
        d += f'<linearGradient id="side{i}"><stop offset="0" stop-color="{l[3]}"/><stop offset=".35" stop-color="{l[4]}"/><stop offset=".7" stop-color="{l[3]}"/><stop offset="1" stop-color="#0c0703"/></linearGradient>'
    b = f'<rect width="{W}" height="{H}" fill="url(#spot)"/>'
    for k in range(1, 7):
        rr = k * 150
        b += f'<ellipse cx="{CX}" cy="{FLOOR}" rx="{rr}" ry="{rr*math.sin(elev):.1f}" fill="none" stroke="#ffedd7" stroke-opacity="{.06-k*.007:.3f}" stroke-width="1.5"/>'
    lift = max(0, FLOOR - (y + total) - 40)
    sr = R * 1.05 + lift * .4
    b += f'<ellipse cx="{CX}" cy="{FLOOR}" rx="{sr:.0f}" ry="{sr*math.sin(elev)*.9:.1f}" fill="url(#shadow)" opacity="{max(.25, 1-lift/500):.2f}"/>'
    pos, yy = [], y
    for l in LAYERS:
        h = l[1] * ch; pos.append((yy, h)); yy += h + gap
    for i in reversed(range(len(LAYERS))):
        l = LAYERS[i]; cy, h = pos[i]
        b += side(cy, ry, h, i) + top_face(l[5], l[2], ry, cy, ang)
    if lab > 0:
        for i, l in enumerate(LAYERS):
            cy, h = pos[i]; ly = cy + h / 2; x0, x1 = CX + R + 18, CX + R + 110
            b += (f'<g opacity="{lab:.2f}"><line x1="{x0}" y1="{ly:.1f}" x2="{x1}" y2="{ly:.1f}" stroke="#dc5000" stroke-width="2"/><circle cx="{x0}" cy="{ly:.1f}" r="4" fill="#dc5000"/>'
                  f'<text x="{x1+14}" y="{ly+6:.1f}" font-family="ui-monospace, Menlo, monospace" font-size="20" letter-spacing="2" fill="#ffedd7">{l[0]}</text></g>')
    open(f'seq/f{f:03d}.svg', 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}"><defs>{d}</defs>{b}</svg>')
