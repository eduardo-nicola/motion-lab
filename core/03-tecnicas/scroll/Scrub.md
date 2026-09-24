---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: y
deps: gsap
custo: baixo
mobile: ok
reduced-motion: estado-final
secao: [hero, proof]
combina: ["[[Pin]]", "[[Scrub none]]"]
conflita: []
fonte: exemples/scroll/scrub/
tags: [tecnica/scroll]
---
# Scrub

> **Fórmula:** Quando **o scroll vai de 0 a 1**, o **número** faz **contagem colada** com **ease none**, porque voltar o dedo precisa rebobinar o take.

## Ideia central
Playhead = scrollbar. Filme, não easing. Tudo reversível.

## Usar
Contador de prova social (0 → 12.000 clientes), barra de progresso, câmera, revelação de linha.

## Não usar
Botão, load, hover. Bounce no scrub é erro de câmera ([[Scrub none]]).

## Implementação (produção)
```js
withGsap(function (gsap) {
  gsap.fromTo('#line', { scaleX: 0 }, { scaleX: 1, ease: 'none',     // scaleX, não width
    scrollTrigger: { trigger: '#hold', start: 'top top', end: '+=200%', pin: true, scrub: true,
      onUpdate: function (s) { n.textContent = Math.round(s.progress * TARGET).toLocaleString('pt-BR'); } } });
});
```
Nativo: `animation-timeline: scroll(root)` na barra de progresso de leitura.

## Reduced motion
Número final + barra cheia.
