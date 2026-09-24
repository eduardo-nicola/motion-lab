---
tipo: tecnica
grupo: timing
gatilho: load
eixo: y
deps: css
custo: baixo
mobile: ok
reduced-motion: ja-visivel
secao: [hero, features]
combina: ["[[Load]]", "[[Reveal stagger]]", "[[Kinetic type]]"]
conflita: []
fonte: exemples/timing/stagger/
tags: [tecnica/timing]
---
# Stagger

> **Fórmula:** Quando **os itens entram**, eles fazem **stagger de 60ms**, porque sequência é hierarquia. 0ms é parede. 200ms é lama.

| Valor | Leitura |
|---|---|
| 0ms | parede — tudo junto, sem ordem |
| **40–80ms** | ritmo — letras 40ms, cards 60–70ms |
| 200ms+ | lama — a pessoa espera |

```css
.motion .item { animation: up .6s var(--ease-out) both; animation-delay: calc(var(--i) * var(--stagger)); }
```
Listas longas: limitar o atraso total (`min(var(--i), 8) * 60ms`).
