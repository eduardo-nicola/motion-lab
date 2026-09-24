---
tipo: tecnica
grupo: pele
gatilho: ponteiro
eixo: xy
deps: vanilla
custo: baixo
mobile: degradar
reduced-motion: sem-inercia
secao: [features]
combina: ["[[Tilt card]]"]
conflita: []
fonte: "[[Oryzo.ai]] (grip: zoom box com lerp)"
tags: [tecnica/pele]
---
# Lupa arrastável

> **Fórmula:** Quando **o cursor passeia pelo produto**, a **lupa** faz **follow com lerp revelando uma segunda imagem (macro)**, porque o detalhe é a prova de qualidade.

## Ideia central
Duas imagens do mesmo enquadramento: normal + macro/detalhe (ou raio-x, "por dentro"). Círculo segue o cursor com atraso (lerp 0.15) e mostra a segunda via `clip-path`.

```css
.loupe { position:relative; }
.loupe .detail { position:absolute; inset:0; clip-path: circle(0 at 50% 50%); }
.motion .loupe:hover .detail { clip-path: circle(var(--r,90px) at var(--lx) var(--ly)); }
```
```js
(function (el) {
  if (!Motion.on() || !Motion.fine()) return;
  var tx = 0, ty = 0, x = 0, y = 0;
  el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top; });
  Motion.loop(el, function () { x += (tx - x) * .15; y += (ty - y) * .15;
    el.style.setProperty('--lx', x + 'px'); el.style.setProperty('--ly', y + 'px'); });
})(document.querySelector('.loupe'));
```
Mobile: lupa fixa arrastável por toque, ou mostrar as duas imagens lado a lado. Imagens via [[Mídia e imagens]].
