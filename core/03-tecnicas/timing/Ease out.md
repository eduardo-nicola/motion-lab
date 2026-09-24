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
combina: ["[[Hover]]", "[[Click]]", "[[Reveal stagger]]"]
conflita: ["[[Scrub none]]"]
fonte: exemples/timing/ease-out/
tags: [tecnica/timing]
---
# Ease out

> **Fórmula:** Quando **o hover acontece**, o **bloco** faz **scale** com **cubic-bezier(0.16, 1, 0.3, 1)**, porque UI precisa sair rápido e pousar sem linear de PowerPoint.

**Certo:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) em hover, enter, painel.
**Errado:** `linear` em interface. Linear é para scrub de câmera ([[Scrub none]]).

```css
:root { --ease-out: cubic-bezier(0.16, 1, 0.3, 1); }
```
GSAP equivalente: `ease: "expo.out"`.
