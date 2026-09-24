---
tipo: tecnica
grupo: pele
gatilho: ponteiro
eixo: x
deps: css
custo: baixo
mobile: ok
reduced-motion: scroll-nativo
secao: [features, proof]
combina: ["[[Reveal stagger]]"]
conflita: ["[[Horizontal hijack]]"]
fonte: "[[Oryzo.ai]] (dragScroll na seção wearable)"
tags: [tecnica/pele]
---
# Galeria arrastável

> **Fórmula:** Quando **a pessoa arrasta**, a **faixa de cards** faz **translateX com inércia** e **snap**, porque explorar é opcional — quem quiser, puxa.

Diferente de [[Horizontal hijack]]: **não sequestra o scroll vertical**. Seguro para landing.

## Base CSS (touch já funciona)
```css
.gal { display:flex; gap:16px; overflow-x:auto; scroll-snap-type:x mandatory; overscroll-behavior-x:contain;
  scrollbar-width:none; padding-inline: var(--pad); }
.gal > * { flex: 0 0 min(80vw, 420px); scroll-snap-align: start; }
```
## Camada mouse (drag com inércia, vanilla)
```js
(function (el) {
  if (!Motion.fine()) return; var down = false, x0, s0, v = 0, last;
  el.addEventListener('pointerdown', function (e) { down = true; x0 = e.clientX; s0 = el.scrollLeft; last = e.clientX; el.style.scrollSnapType = 'none'; el.setPointerCapture(e.pointerId); });
  el.addEventListener('pointermove', function (e) { if (!down) return; v = e.clientX - last; last = e.clientX; el.scrollLeft = s0 - (e.clientX - x0); });
  el.addEventListener('pointerup', function () { down = false;
    (function glide() { v *= .92; el.scrollLeft -= v; if (Math.abs(v) > .5) requestAnimationFrame(glide); else el.style.scrollSnapType = ''; })(); });
})(document.querySelector('.gal'));
```
Acessível: cards focáveis, setas `<button type="button">` opcionais. Vídeos mp4 do Oryzo → imagens ou mp4 leves.
