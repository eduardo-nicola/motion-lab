---
tipo: receita
uso: marca-produto
motion-intensity: 9
camera: image-sequence + capitulos
palco: grain + gobo
deps: [css, vanilla, gsap]
tags: [receita]
---
# Produto como filme (Oryzo-lite)

Versão reproduzível sem WebGL da mecânica do [[Oryzo.ai]]: **objeto + produção de cinema + humor de nicho + twist no CTA**.

**Dials:** DESIGN_VARIANCE 9 · MOTION_INTENSITY 9 · VISUAL_DENSITY 3

## Conceito (preencher antes de tudo)
- Objeto: ___ · Linguagem satirizada/emprestada: ___ · Twist final: ___
- Cada feature = **um brinquedo interativo** (hover, slider, lupa, input).

| Seção | Técnica | Fórmula |
|---|---|---|
| preloader | [[Preloader]] | Quando os frames carregam, a contagem sai para cima, porque o filme só começa com palco pronto. |
| hero | [[Image sequence]] (canvas fixo) + [[Line mask reveal]] | Quando o scroll avança, o frame gira o produto, porque a câmera foi gravada antes. |
| feature 1–3 | [[Chapter timeline]] sobre o mesmo canvas | Quando cada ato começa, título sobe da régua e o objeto muda de pose. |
| detalhe | [[Lupa arrastável]] | Quando o cursor passeia, a lupa revela o macro, porque o detalhe é prova. |
| virada | seção **clara** + [[Gobo]] + [[Nav adaptativa]] | Quando a seção clara chega, a nav inverte, porque a narrativa virou. |
| prova | [[Galeria arrastável]] + reviews em mono | Arrastar é opcional. |
| tiers | [[Sticky stack]] (1, 2, 3 objetos) | Cada tier cobre o anterior. |
| cta-final | twist + [[Magnetic button]] | — |

**Tier opcional:** [[Cursor distortion (WebGL lite)]] no hero (desktop, fallback `<img>`).
**Não copiar do Oryzo:** ausência de reduced motion, 1,1 MB de JS, página de 50.000px. Alvo aqui: ≤ 15 vh de página, JS próprio ≤ 30KB.
