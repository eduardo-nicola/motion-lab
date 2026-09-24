---
tipo: tecnica
grupo: timing
gatilho: click
eixo: nenhum
deps: vanilla
custo: baixo
mobile: ok
reduced-motion: salto-direto
secao: [hero, cta-final]
combina: ["[[Magnetic button]]", "[[Click]]"]
conflita: []
fonte: exemples/timing/spring/
tags: [tecnica/timing]
---
# Spring

> **Fórmula:** Quando **o clique solta o bloco**, ele faz **spring stiffness 100 damping 20** porque a peça precisa chegar com peso e parar, não pular como ícone de 2014.

**Certo:** mola física (k 100, d 20, massa 1). Matemática: `d = 2·√(k·m)` → **amortecimento crítico**, chega sem passar do alvo e assenta rápido. Quer uma oscilação leve e natural? `damping 12` (ζ ≈ 0,6).
**Errado:** `cubic-bezier(0.34, 1.8, 0.64, 1)` elástico de template.

## Implementação
`Motion.spring(get, set, target, {stiffness:100, damping:20})` em [[motion-kit.js]] (integração semi-implícita, dt ≤ 32ms, para quando |v| < .02).

Aproximação CSS sem JS (Chrome/Safari/Firefox modernos): `transition-timing-function: linear(0, 0.6 18%, 1.02 38%, 0.99 60%, 1)` — gerar curva com ferramenta de spring→linear().

Usar em: retorno do [[Magnetic button]], cards, toggle.
