---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: z
deps: gsap
custo: alto
mobile: degradar
reduced-motion: empilha-y
secao: [hero, features]
combina: ["[[Grain]]", "[[Scrub none]]"]
conflita: ["[[Horizontal hijack]]", "[[Sticky stack]]", "[[Zoom parallax]]", "[[Curtain reveal]]"]
fonte: exemples/scroll/z-axis-dive/
tags: [tecnica/scroll]
---
# Z-axis dive

> **Fórmula:** Quando **o scroll anda**, a **câmera** faz **dolly no Z** com **scrub none**, porque a história é penetração, não descida de documento.

## Ideia central
CSS 3D: `perspective` no viewport fixo, planos estacionados em `translateZ(0, −900, −1800, −2700)`, world move em Z. Opacidade por distância relativa (fade-in ao chegar, fade-out ao passar). Spacer de ~380vh gera o scroll. **É o mais próximo de [[Oryzo.ai]] sem WebGL.**

## Usar
Produto, espaço, filme, "entrar" no método.

## Não usar
Lista, pricing, depoimento, form. Com qualquer outra câmera.

## Implementação (produção, resumo)
```css
.motion .viewport { position:fixed; inset:0; perspective:min(1100px,78vw); overflow:hidden; }
.motion .world { position:absolute; inset:0; transform-style:preserve-3d; }
.motion .plane { position:absolute; inset:16vh 11vw; backface-visibility:hidden; }
.spacer { display:none; } .motion .spacer { display:block; height:380vh; }
```
```js
withGsap(function (gsap) {
  var proxy = { z: 0 };
  gsap.to(proxy, { z: 2700, ease: 'none',
    scrollTrigger: { trigger: '#spacer', start: 'top top', end: 'bottom bottom', scrub: true,
      onUpdate: function () {
        world.style.transform = 'translateZ(' + proxy.z + 'px)';
        planes.forEach(function (el) {
          var rel = +el.dataset.z + proxy.z, o = 1;
          if (rel > 420) o = 0; else if (rel > 80) o = 1 - (rel - 80) / 340;
          else if (rel < -1300) o = 0; else if (rel < -850) o = (rel + 1300) / 450;
          el.style.opacity = o;
        });
      } } });
});
```
Viewport fixo cobre a página: depois do dive, o conteúdo seguinte precisa `position:relative; z-index` acima, ou encerrar o viewport com `ScrollTrigger` `onLeave` (esconder). Reduced/fallback: planos em fluxo normal.
