---
tipo: receita
uso: captura
motion-intensity: 3
camera: documento-y
palco: mesh-gradient
deps: [css, vanilla]
tags: [receita]
---
# Captura editorial

Página curta, **zero CDN**, conversão primeiro. Design único vem da tipografia, não da câmera.

**Dials:** DESIGN_VARIANCE 6 · MOTION_INTENSITY 3 · VISUAL_DENSITY 3

| Seção | Técnica | Fórmula |
|---|---|---|
| hero | [[Kinetic type]] + [[Mesh gradient]] + [[Grain]] | Quando a página carrega, a headline entra letra a letra (45ms, 0.7s ease-out), porque a promessa é a peça visual. |
| hero (form) | form estático + [[Magnetic button]] | Quando o cursor chega no CTA, ele puxa, porque o clique precisa parecer posse. |
| benefícios | [[Reveal stagger]] | Quando cada benefício entra, nasce em ordem (70ms), porque a lista é argumento. |
| prova | [[Line mask reveal]] no depoimento | Quando a citação entra, sobe de trás da régua. |
| footer | — | — |

**Ordem de build:** tokens → hero/form → reveal → magnet → checklist.
**Riscos:** mesh atrás do form sem contraste AA; kinetic em headline longa (usar por palavra).
