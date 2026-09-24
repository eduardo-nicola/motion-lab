---
tipo: padrao
tags: [padrao, performance]
---
# CDN com fallback

Técnicas `deps: gsap` ([[Pin]], [[Scrub]], [[Parallax]], [[Zoom parallax]], [[Sticky stack]], [[Horizontal hijack]], [[Split screen]], [[Curtain reveal]], [[Z-axis dive]], [[Scrollytelling]], [[Chapter timeline]], [[Image sequence]]) só entram com este padrão: se a lib não carregar, a página fica estática e completa.

## Ordem de preferência
1. **CSS puro** (hover, keyframes, `position: sticky`)
2. **CSS scroll-driven** (`animation-timeline`) dentro de `@supports`
3. **Vanilla JS inline** (IntersectionObserver, rAF, pointer)
4. **GSAP via loader** com fallback = estado final

## Loader
Implementado como `withGsap(run)` em [[motion-kit.js]]:
- sai cedo se não houver `.motion` (reduced motion);
- carrega `gsap.min.js` + `ScrollTrigger.min.js` do jsDelivr (3.12.7), timeout 4s;
- falhou → remove `.motion`, adiciona `.motion-fallback` → todos os estados escondidos aparecem.

Uso:
```js
withGsap(function (gsap, ST) {
  gsap.to('#track', { x: () => -(track.scrollWidth - innerWidth), ease: 'none',
    scrollTrigger: { trigger: '#wrap', start: 'top top', end: () => '+=' + (track.scrollWidth - innerWidth),
      pin: true, scrub: 1, invalidateOnRefresh: true } });
});
```

## Alternativa nativa (zero CDN)
```css
@supports (animation-timeline: view()) {
  .motion [data-reveal] {
    animation: reveal-up linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
}
@keyframes reveal-up { from { opacity: 0; transform: translateY(28px); } }
```
`animation-timeline: scroll()` cobre barra de progresso e parallax simples. Não cobre pin → pin nativo = `position: sticky` num wrapper alto.
