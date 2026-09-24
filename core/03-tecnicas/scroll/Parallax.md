---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: y
deps: gsap
custo: baixo
mobile: degradar
reduced-motion: estado-final
secao: [hero]
combina: ["[[Reveal stagger]]", "[[Grain]]"]
conflita: ["[[Horizontal hijack]]"]
fonte: exemples/scroll/parallax/
tags: [tecnica/scroll]
---
# Parallax

> **Fórmula:** Quando **o documento desce**, os **planos** fazem **translateY em taxas diferentes** com **scrub none**, porque profundidade se lê por velocidade, não por sombra.

## Ideia central
2–3 planos: fundo fotográfico lento (+160px), título médio (−80px), legenda rápida (−140px). Profundidade barata.

## Usar
Hero com foto de fundo + título que precisa parecer mais perto.

## Não usar
Texto longo. Mobile se causar náusea (reduzir amplitude à metade). Junto de hijack.

## Implementação (produção)
```js
withGsap(function (gsap) {
  var st = { trigger: '#scene', start: 'top top', end: 'bottom bottom', scrub: true };
  gsap.to('#back', { y: 160, ease: 'none', scrollTrigger: st });
  gsap.to('#mid',  { y: -80, ease: 'none', scrollTrigger: st });
  gsap.to('#fore', { y: -140, ease: 'none', scrollTrigger: st });
});
```
Nativo: `@supports (animation-timeline: scroll())` + `@keyframes` com `translate`.
Imagem de fundo: [[Mídia e imagens]], 1600px+, altura extra para o deslocamento.
