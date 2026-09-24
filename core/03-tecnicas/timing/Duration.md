---
tipo: tecnica
grupo: timing
gatilho: qualquer
eixo: nenhum
deps: css
custo: baixo
mobile: ok
reduced-motion: sem-transform
secao: [todas]
combina: ["[[Ease out]]"]
conflita: []
fonte: exemples/timing/duration/
tags: [tecnica/timing]
---
# Duration

> **Fórmula:** Quando **o botão responde**, ele faz **scale em 0.5s**, porque interface vive em 0.4–0.8s. Acima de 1.2s é drama, e drama não cabe em hover.

| Faixa | Uso |
|---|---|
| 0.2–0.3s | hover de cor/underline |
| **0.4–0.8s** | UI: painel, enter, reveal |
| > 1.2s | teatro: cortina, hero, take de câmera — uma vez |

Errado: 2s em botão → parece lag.
