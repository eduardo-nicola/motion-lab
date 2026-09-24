---
tipo: tecnica
grupo: pele
gatilho: ponteiro
eixo: nenhum
deps: vanilla
custo: baixo
mobile: desligar
reduced-motion: borda-solida
secao: [features]
combina: ["[[Tilt card]]"]
conflita: []
fonte: exemples/skin/spotlight-border/
tags: [tecnica/pele]
---
# Spotlight border

> **Fórmula:** Quando **o cursor anda na peça**, a **borda** faz **luz local** com **custom properties no ponteiro**, porque o foco precisa seguir a mão, não um hover sólido.

```css
.spot { position:relative; border:1px solid var(--line); }
.spot::before { content:""; position:absolute; inset:0; pointer-events:none; opacity:0; transition:opacity .3s;
  background: radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgb(226 61 40 / .45), transparent 55%); }
.spot:hover::before { opacity:1; }
```
```js
el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', e.clientX - r.left + 'px'); el.style.setProperty('--my', e.clientY - r.top + 'px'); });
```
Variação "só borda": `mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)` com padding 1px. Usar em 1–4 cards de benefício, nunca dezenas.
