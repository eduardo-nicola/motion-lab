---
tipo: tecnica
grupo: palco
gatilho: nenhum
eixo: nenhum
deps: css
custo: baixo
mobile: ok
reduced-motion: mantem
secao: [global]
combina: ["[[Mesh gradient]]", "[[Light leak]]", "[[Blob aproximado]]", "[[Particles]]"]
conflita: []
fonte: exemples/stage/grain/
tags: [tecnica/palco]
---
# Grain

> **Fórmula:** Quando **a página está viva**, o **overlay fixo** faz **grain** com **opacidade 0.07**, porque o palco precisa de matéria sem roubar o scroll.

## Ideia central
Película de filme. SVG `feTurbulence` inline como data-URI, overlay `position: fixed`, `pointer-events: none`. Zero requests.

| Opacidade | Leitura |
|---|---|
| 0 | digital, liso |
| **0.05–0.08** | produção (padrão 0.07) |
| 0.16 | só comparação / fundo claro |

## Implementação (produção)
```css
body::before { content:""; position:fixed; inset:0; z-index:80; pointer-events:none; opacity:.07;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E"); }
```

## Não usar
Em div que scrolla (repaint contínuo mata FPS mobile). Não animar o grain. Cobrindo form sem `pointer-events:none`.
