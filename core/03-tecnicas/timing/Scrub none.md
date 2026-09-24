---
tipo: tecnica
grupo: timing
gatilho: scroll
eixo: y
deps: gsap
custo: baixo
mobile: ok
reduced-motion: estado-final
secao: [todas]
combina: ["[[Scrub]]", "[[Horizontal hijack]]", "[[Z-axis dive]]", "[[Zoom parallax]]", "[[Sticky stack]]"]
conflita: ["[[Ease out]]"]
fonte: exemples/timing/scrub-none/
tags: [tecnica/timing]
---
# Scrub none

> **Fórmula:** Quando **o scroll dirige a barra**, ela faz **scaleX com ease none**, porque qualquer curva extra mente sobre onde o corpo está.

**Certo:** `ease: "none"` em todo tween com `scrub`. O dedo **é** o easing.
**Errado:** `bounce.out`, `elastic`, `power4` no scrub → a barra vira gelatina.

Suavização permitida: `scrub: 1` (lag de 1s atrás do dedo) — isso é inércia, não curva.
CSS nativo: `animation-timing-function: linear` com `animation-timeline`.
