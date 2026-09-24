---
tipo: principio
tags: [principio, performance]
---
# Performance de motion

## Propriedades
- Animar só **`transform`, `opacity`** (compositor). `filter`, `clip-path` com moderação.
- Nunca animar `width/height/top/left` em loop contínuo. (O lab usa `top`/`height` em [[Scrollytelling]] e `width` em [[Scrub]] por didática — em produção trocar por `translateY`/`scaleX`/`scaleY`.)
- `will-change: transform` só no elemento que anima, não em massa.

## Eventos
- Ponteiro: `pointermove` escrevendo `style.transform` ou custom property direto. **Nunca estado de framework** para cursor.
- Scroll: ScrollTrigger ou `IntersectionObserver`. Nunca `scroll` listener pesado sem rAF.
- Reveal: IO dispara **uma vez** e `unobserve`.
- Loops (`requestAnimationFrame`): pausar fora da viewport (IO) e em `document.hidden`.

## Mobile
- Canvas full-bleed: limitar DPR a 2, reduzir contagem de partículas.
- Pin + hijack + dive em mobile: degradar para fluxo Y (ver [[Uma câmera por página]]).
- Usar `100dvh`, não `100vh`.

## Orçamento
| Item | Limite |
|---|---|
| Libs externas | GSAP + ScrollTrigger (~70KB gz) no máximo; nada de three.js no padrão |
| Técnicas com loop infinito | ≤ 2 por página |
| Pins | ≤ 3 por página |
| Imagens de hero | dimensionadas, WebP/AVIF, `loading="lazy"` abaixo da dobra |
