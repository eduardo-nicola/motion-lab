---
tipo: principio
tags: [principio, timing]
---
# Curvas e tempos canônicos

Resumo do grupo Timing. Detalhe em cada nota.

| Palavra | Valor | Onde | Nunca |
|---|---|---|---|
| [[Ease out]] | `cubic-bezier(0.16, 1, 0.3, 1)` | hover, enter, painel | `linear` em UI |
| [[Spring]] | stiffness 100 · damping 20 · mass 1 (crítico; 12 = leve oscilação) | CTA, retorno de magnet, cards | bounce elástico de template |
| [[Scrub none]] | `ease: "none"` | todo scrub de câmera | `bounce`/`elastic`/`power4` no scrub |
| [[Stagger]] | 40–80ms (padrão 60–70ms) | listas, letras, cards | 0ms (parede) · 200ms+ (lama) |
| [[Duration]] | UI 0.4–0.8s · drama > 1.2s | UI vs cortina/hero | 2s em botão |

Tokens:
```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-ui: .5s;
  --dur-enter: .7s;
  --dur-drama: 1.2s;
  --stagger: 60ms;
}
```
