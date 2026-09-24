---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: y
deps: gsap
custo: medio
mobile: ok
reduced-motion: estado-final
secao: [features]
combina: ["[[Pin]]", "[[Scrub none]]"]
conflita: ["[[Horizontal hijack]]", "[[Z-axis dive]]"]
fonte: exemples/scroll/scrollytelling/
tags: [tecnica/scroll]
---
# Scrollytelling

> **Fórmula:** Quando **o progresso vai de 0 a 1**, a **cena** faz **sol subir e volume crescer** com **ease none**, porque o scroll é o narrador, não um decorado 3D.

## Ideia central
Split 50/50: cena (esquerda, pinada) + copy (direita). Um `timeline` com scrub dirige elementos simples da cena (SVG, divs). Começo, meio e fim visíveis. Versão WebGL disso = [[Oryzo.ai]] (fora do padrão).

## Usar
"Como funciona", transformação antes→depois, crescimento de resultado.

## Não usar
Se a cena pede órbita 3D real.

## Implementação (produção)
```js
withGsap(function (gsap) {
  gsap.timeline({ scrollTrigger: { trigger: '#hold', start: 'top top', end: '+=180%', pin: true, scrub: true } })
    .fromTo('#sun',   { yPercent: 0 },  { yPercent: -250, ease: 'none' }, 0)
    .fromTo('#block', { scaleY: .25 },  { scaleY: 1, ease: 'none' }, 0);   // transform, não height
});
```
Cena ideal: SVG inline (sem assets externos). Passos de texto podem trocar por `onUpdate` + progress.
Reduced/fallback: cena no estado final.
