---
tipo: kit
fonte: "[[Oryzo.ai]]"
tags: [kit]
---
# Escala fluida (screen-unit)

Técnica do [[Oryzo.ai]]: todo tamanho (tipo, gap, botão) é múltiplo de uma unidade que escala com a tela, limitada pela altura. Layout idêntico em qualquer monitor, sem dezenas de breakpoints.

```css
:root {
  --pad: calc(16 / 375 * 100vw);
  --su: calc((100vw - 2 * var(--pad)) / (375 - 32));          /* mobile: 1px de design = 1su */
}
@media (min-width: 768px) {
  :root {
    --pad: 3.125vw;
    --su: min(calc((100vw - 2 * var(--pad)) / (1920 - 120)), calc(100vh / 1024 * 1.25));
  }
}
h1 { font-size: calc(120 * var(--su)); }
.body1 { font-size: max(16px, calc(18 * var(--su))); }       /* piso de legibilidade */
.grid { display:grid; grid-template-columns: repeat(4, 1fr); gap: calc(24 * var(--su)); padding-inline: var(--pad); }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(16, 1fr); } }
```
Números = medidas do layout no Figma (mobile 375, desktop 1920). Corpo de texto sempre com piso de 16px.
