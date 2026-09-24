---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: x
deps: gsap
custo: baixo
mobile: ok
reduced-motion: cortina-ausente
secao: [hero, cta-final]
combina: ["[[Kinetic type]]"]
conflita: ["[[Z-axis dive]]", "[[Horizontal hijack]]"]
fonte: exemples/scroll/curtain-reveal/
tags: [tecnica/scroll]
---
# Curtain reveal

> **Fórmula:** Quando **o scroll avança**, as **folhas** fazem **scaleX → 0** com **scrub none**, porque o palco precisa ser revelado, não cortado por fade.

## Ideia central
Storytelling de revelação: o que estava atrás **é o assunto** (produto, oferta, bônus). Duas folhas com `transform-origin` nas bordas externas. **Uma vez por página.**

## Usar
Revelar produto/oferta, abertura do cta-final ("a oferta").

## Não usar
Em toda seção. Com dive/hijack.

## Implementação (produção)
```html
<section id="scene">
  <div class="under">…assunto…</div>
  <div class="curtain" aria-hidden="true"><div class="leaf l"></div><div class="leaf r"></div></div>
</section>
```
```css
.curtain { display:none; }
.motion .curtain { position:absolute; inset:0; display:grid; grid-template-columns:1fr 1fr; pointer-events:none; }
.leaf { background: var(--bg); } .leaf.l { transform-origin: 0 50%; } .leaf.r { transform-origin: 100% 50%; }
```
```js
withGsap(function (gsap) {
  var st = { trigger: '#scene', start: 'top top', end: '+=120%', scrub: true };
  gsap.to('.leaf.l', { scaleX: 0, ease: 'none', scrollTrigger: Object.assign({ pin: true }, st) });
  gsap.to('.leaf.r', { scaleX: 0, ease: 'none', scrollTrigger: st });
});
```
Variação: `clip-path: inset(0 50% 0 50%) → inset(0)` num único elemento.
