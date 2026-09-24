---
tipo: kit
tags: [kit]
---
# Tokens base

**Prioridade:** tokens da identidade da marca (site/material existente) > estes defaults.

```css
*, *::before, *::after { box-sizing: border-box; }
:root {
  /* marca — SUBSTITUIR pelos valores da identidade */
  --color-bg: #14140f;
  --color-bg-2: #181910;
  --color-bg-3: #1e2016;
  --color-ink: #ece7dc;
  --color-muted: #8a8678;
  --color-primary: #e23d28;
  --color-primary-hover: #ff5a3c;
  --color-line: #2c2c24;
  --color-primary-deep: #6a3a28;      /* versões escuras p/ mesh gradient */
  --color-secondary-deep: #3d4a32;
  --font-display: system-ui, -apple-system, sans-serif;  /* da referência */
  --font-body: system-ui, -apple-system, sans-serif;
  --radius: 0px;

  /* motion — fixos do vault */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-ui: .5s;
  --dur-enter: .7s;
  --dur-drama: 1.2s;
  --stagger: 60ms;

  /* camadas */
  --z-base: 1; --z-hud: 40; --z-overlay: 60; --z-grain: 80;
}
html { background: var(--color-bg); }
body { margin:0; min-height:100dvh; font: 16px/1.5 var(--font-body); color: var(--color-ink); background: var(--color-bg); }
.display { font-family: var(--font-display); font-weight:800; letter-spacing:-.05em; line-height:.92; }
```

Paleta default = [[Motion lab (exemples)]] (olive charcoal + burnt red, radius 0, dark). Tipografia do lab (Cabinet Grotesk + Satoshi via Fontshare) **não** é default: CDN de fonte só se a referência já usa.
