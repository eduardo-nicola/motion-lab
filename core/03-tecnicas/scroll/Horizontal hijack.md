---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: x
deps: gsap
custo: alto
mobile: degradar
reduced-motion: empilha-y
secao: [features, proof]
combina: ["[[Scrub none]]"]
conflita: ["[[Sticky stack]]", "[[Z-axis dive]]", "[[Split screen]]", "[[Parallax]]"]
fonte: exemples/scroll/horizontal-hijack/
tags: [tecnica/scroll]
---
# Horizontal hijack

> **Fórmula:** Quando **o wrapper pina no topo**, o **trilho** faz **translateX** com **scrub 1 e ease none**, porque cada quadro pede a tela inteira.

## Ideia central
Scroll Y vira translateX. Distância = `track.scrollWidth − innerWidth`. Voltar o scroll rebobina o filme.

## Usar
Capítulos, produtos, cases, galeria de módulos que pedem take isolado.

## Não usar
Artigo, form, pricing. Se o X governa, Z e Y-stack ficam fora. Marquee infinito não é esta câmera.

## Implementação (produção)
```css
.track { display:flex; flex-direction:column; }              /* mobile: empilha */
@media (min-width: 768px) {
  .motion .viewport { overflow:hidden; }
  .motion .track { flex-direction:row; width:max-content; height:100dvh; }
  .motion .panel { flex: 0 0 100vw; height:100dvh; }
}
```
```js
if (matchMedia('(min-width: 768px)').matches) withGsap(function (gsap) {
  var dist = function () { return track.scrollWidth - innerWidth; };
  gsap.to(track, { x: function () { return -dist(); }, ease: 'none',
    scrollTrigger: { trigger: wrap, start: 'top top', end: function () { return '+=' + dist(); },
      pin: true, scrub: 1, invalidateOnRefresh: true } });
});
```
Fallback CDN: `.motion` removido → painéis empilhados no Y.
