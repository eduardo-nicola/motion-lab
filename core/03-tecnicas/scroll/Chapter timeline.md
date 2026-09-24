---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: y
deps: gsap
custo: medio
mobile: ok
reduced-motion: estado-final-por-capitulo
secao: [features]
combina: ["[[Pin]]", "[[Scrub none]]", "[[Image sequence]]", "[[Line mask reveal]]"]
conflita: ["[[Horizontal hijack]]", "[[Z-axis dive]]"]
fonte: "[[Oryzo.ai]] (math.fit encadeado)"
tags: [tecnica/scroll]
---
# Chapter timeline

> **Fórmula:** Quando **o progresso de uma seção longa pinada anda**, cada **capítulo** faz **sua própria animação num trecho do progresso** com **ease none**, porque uma seção longa precisa de atos, não de um único tween esticado.

## Ideia central
Seção pinada de 4–10 vh. Progresso `p ∈ [0,1]` remapeado por trechos:
```js
function fit(p, a, b, from, to) { var t = Math.min(1, Math.max(0, (p - a) / (b - a))); return from + (to - from) * t; }
// capítulo 1: 0.00–0.30 · respiro 0.30–0.35 · capítulo 2: 0.35–0.65 · …
```
Cada capítulo troca título ([[Line mask reveal]]), move objeto, altera filtro (ex.: slider térmico do Oryzo = `filter: hue-rotate() contrast()` + LUT).

## Implementação (produção)
```js
withGsap(function (gsap, ST) {
  var caps = [].slice.call(document.querySelectorAll('[data-cap]'));
  ST.create({ trigger: '#chapters', start: 'top top', end: '+=' + caps.length * 120 + '%', pin: true,
    onUpdate: function (s) {
      var active = Math.min(caps.length - 1, Math.floor(s.progress * caps.length));
      caps.forEach(function (c, i) {
        var a = i / caps.length, b = (i + 1) / caps.length;
        c.classList.toggle('is-on', i === active);                // só um capítulo na tela
        c.style.setProperty('--t', Motion.fit(s.progress, a, a + (b - a) * .85)); // 15% final = respiro em t=1
      });
    } });
});
```
CSS: `--t` default = 1 (estado final); `.motion .cap { position:absolute; opacity:0 } .motion .cap.is-on { opacity:1 }`. Exemplo vivo: `exemples/scroll/chapter-timeline/`.

Alternativa: `gsap.timeline()` com labels por capítulo + `scrollTrigger.snap: { snapTo: 'labels' }`.

## Reduced motion
Capítulos em fluxo normal, cada um no estado final.
