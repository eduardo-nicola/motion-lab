---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: y
deps: gsap
custo: medio
mobile: ok
reduced-motion: fluxo-normal
secao: [features]
combina: ["[[Grain]]"]
conflita: ["[[Horizontal hijack]]", "[[Z-axis dive]]"]
fonte: exemples/scroll/sticky-stack/
tags: [tecnica/scroll]
---
# Sticky stack

> **Fórmula:** Quando **a carta atinge o topo**, ela faz **pin** e a anterior faz **scale 0.92 + opacity 0.55** com **scrub none**, porque o capítulo novo substitui o velho.

## Ideia central
Baralho, não lista. Cada carta anula a anterior na memória espacial. Faixa de 6px na cor de acento no topo de cada carta.

## Usar
Serviços, teses, passos, módulos de curso que se substituem.

## Não usar
Itens que precisam coexistir (preços lado a lado, grid). Com hijack/dive.

## Implementação
**Base CSS (funciona sem JS):**
```css
.stack-card { position: sticky; top: 0; min-height: 100dvh; transform-origin: 50% 8%; }
.stack-card:nth-child(n) { z-index: n; } /* definir z-index crescente */
```
**Camada GSAP (encolhe a de baixo):**
```js
withGsap(function (gsap) {
  var cards = gsap.utils.toArray('.stack-card');
  cards.forEach(function (card, i) {
    if (i === cards.length - 1) return;
    gsap.to(card, { scale: .92, opacity: .55, ease: 'none',
      scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top top', scrub: true } });
  });
});
```
Sticky nativo dispensa o pin do GSAP → fallback natural = cartas empilhando sem encolher.
