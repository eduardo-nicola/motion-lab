---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: y-oposto
deps: gsap
custo: medio
mobile: degradar
reduced-motion: estatico
secao: [features, proof]
combina: ["[[Reveal stagger]]"]
conflita: ["[[Horizontal hijack]]"]
fonte: exemples/scroll/split-screen/
tags: [tecnica/scroll]
---
# Split screen

> **Fórmula:** Quando **a seção pina**, os **dois meios** fazem **translateY opostos** com **scrub none**, porque duas vozes precisam ocupar o mesmo tempo.

## Ideia central
Dois meios, dois tempos, um scroll. Contraste: ofício/resultado, antes/depois, problema/solução.

## Usar
Antes × depois, sem × com o produto.

## Não usar
Listas. Mobile (empilha, sem oposição). Com hijack.

## Implementação (produção)
```css
#split { display:grid; }
@media (min-width: 768px) { #split { grid-template-columns: 1fr 1fr; } }
```
```js
if (innerWidth >= 768) withGsap(function (gsap) {
  gsap.to('#left .inner', { y: -80, ease: 'none', scrollTrigger: { trigger: '#split', start: 'top top', end: '+=140%', pin: true, scrub: true } });
  gsap.fromTo('#right .inner', { y: -80 }, { y: 40, ease: 'none', scrollTrigger: { trigger: '#split', start: 'top top', end: '+=140%', scrub: true } });
});
```
