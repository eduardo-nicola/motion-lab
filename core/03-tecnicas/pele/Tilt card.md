---
tipo: tecnica
grupo: pele
gatilho: ponteiro
eixo: xy-rot
deps: vanilla
custo: baixo
mobile: desligar
reduced-motion: plano
secao: [hero, features]
combina: ["[[Spotlight border]]"]
conflita: []
fonte: exemples/skin/tilt-card/
tags: [tecnica/pele]
---
# Tilt card

> **Fórmula:** Quando **o ponteiro atravessa a peça**, o **cartão** faz **rotateX/Y até 9°** com **follow imediato**, porque a peça precisa parecer objeto, não thumbnail.

`perspective: 900px` no **pai**, `transform-style: preserve-3d` no card. `Motion.tilt(el, 9)`: px,py ∈ [−.5,.5] → `rotateY(px*2*max) rotateX(−py*2*max)`.

Usar em uma peça (mockup de produto, capa do e-book), talvez duas. Não usar em grid de oito. Upgrade: camada interna com `translateZ(40px)` para paralaxe dentro do card.
