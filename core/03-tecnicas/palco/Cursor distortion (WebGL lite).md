---
tipo: tecnica
grupo: palco
gatilho: ponteiro
eixo: nenhum
deps: webgl
custo: alto
mobile: desligar
reduced-motion: imagem-estatica
secao: [hero]
combina: ["[[Grain]]"]
conflita: ["[[Particles]]", "[[Blob aproximado]]", "[[Mesh gradient]]"]
fonte: "[[Oryzo.ai]] (screen paint distortion + RGB shift da Lusion)"
tags: [tecnica/palco, webgl]
---
# Cursor distortion (WebGL lite)

> **Fórmula:** Quando **o cursor passa sobre a imagem do hero**, o **shader** faz **distorção de UV com RGB shift** com **rastro que decai em ~0.6s**, porque a imagem parece líquida e viva sob a mão.

## Tier
Fora do padrão (`deps: webgl`). Só com `MOTION_INTENSITY ≥ 8`, desktop `(pointer: fine)`, e **fallback = `<img>` normal** (a imagem é sempre um `<img>` real no DOM; o canvas é sobreposto só se o WebGL inicializar).

## Esboço (WebGL puro inline, sem three.js, ~80 linhas)
- Quad fullscreen; textura = imagem do hero (mesma origem ou CORS liberado).
- Uniforms: `u_tex`, `u_mouse` (lerp), `u_vel` (velocidade do cursor, decai `*= .92`), `u_res`.
- Fragment:
```glsl
vec2 d = uv - u_mouse; float f = smoothstep(.25, 0., length(d * vec2(u_res.x/u_res.y, 1.))) * u_vel;
vec2 off = normalize(d + 1e-4) * f * .04;
float r = texture2D(u_tex, uv - off * 1.2).r, g = texture2D(u_tex, uv - off).g, b = texture2D(u_tex, uv - off * .8).b;
gl_FragColor = vec4(r, g, b, 1.);
```
- Loop via `Motion.loop` (pausa fora da viewport).

## Não usar
Página de captura, imagem com texto, qualquer público mobile-first.
