---
tipo: tecnica
grupo: gatilhos
gatilho: load
eixo: nenhum
deps: vanilla
custo: baixo
mobile: ok
reduced-motion: sem-preloader
secao: [hero]
combina: ["[[Load]]", "[[Image sequence]]"]
conflita: []
fonte: "[[Oryzo.ai]] (#preloader + html.is-ready)"
tags: [tecnica/gatilhos]
---
# Preloader

> **Fórmula:** Quando **os assets pesados carregam**, a **cortina de loading** faz **contagem e saída** com **0.8s ease-out**, porque a coreografia de [[Load]] só pode começar com o palco pronto.

**Só justifica** com asset pesado ([[Image sequence]], vídeo, canvas). Página de captura: **não usar** (atrasa LCP e conversão).

```html
<div id="pre" aria-hidden="true"><span id="pre-n">0</span></div>
```
```css
#pre { display:none; }
.motion #pre { display:grid; place-items:center; position:fixed; inset:0; z-index:100; background:var(--color-bg);
  transition: transform .8s var(--ease-out); }
.motion.is-ready #pre { transform: translateY(-100%); }
```
```js
(function () {
  if (!Motion.on()) return; var imgs = [].slice.call(document.images), done = 0, n = document.getElementById('pre-n');
  function tick() { done++; n.textContent = Math.round(done / imgs.length * 100); if (done >= imgs.length) ready(); }
  function ready() { document.documentElement.classList.add('is-ready'); }
  imgs.forEach(function (im) { im.complete ? tick() : (im.onload = im.onerror = tick); });
  setTimeout(ready, 3500);                                  // teto: nunca prender a pessoa
})();
```
Animações de hero gated por `.is-ready` em vez de `.motion`.
