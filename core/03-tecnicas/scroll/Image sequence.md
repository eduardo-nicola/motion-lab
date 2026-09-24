---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: z-falso
deps: gsap
custo: alto
mobile: degradar
reduced-motion: primeiro-frame
secao: [hero]
combina: ["[[Chapter timeline]]", "[[Line mask reveal]]", "[[Grain]]"]
conflita: ["[[Z-axis dive]]", "[[Horizontal hijack]]"]
fonte: "[[Oryzo.ai]] (câmera baked .buf → aqui frames pré-renderizados)"
tags: [tecnica/scroll]
---
# Image sequence

> **Fórmula:** Quando **o scroll avança**, o **canvas** faz **troca de frame pré-renderizado** com **scrub none**, porque a câmera 3D foi gravada antes e o scroll só escolhe o quadro.

## Ideia central
Versão "Apple AirPods" do Oryzo sem WebGL: render 3D/vídeo exportado como 60–150 frames WebP → canvas 2D fixo desenha `frames[round(p*(n-1))]`. Visual cinematográfico com custo de CPU baixo; custo é **banda**.

## Requisitos
- Frames exportados como arquivos otimizados. Planejar nomes `seq-001.webp…` para montar o array.
- Desktop 1600px ~40–80KB/frame; mobile: metade dos frames, 800px.
- Primeiro frame como `<img>` real (LCP + fallback); sem motion, nenhum outro frame é baixado.

## Implementação (produção)
```js
withGsap(function (gsap) {
  var c = document.getElementById('seq'), g = c.getContext('2d'), n = FRAMES.length, imgs = [], st = { f: 0 };
  FRAMES.forEach(function (src, i) { var im = new Image(); im.src = src; imgs[i] = im; });
  function draw() { var im = imgs[Math.round(st.f)]; if (im && im.complete) { c.width = im.naturalWidth; c.height = im.naturalHeight; g.drawImage(im, 0, 0); } }
  imgs[0].onload = draw;
  gsap.to(st, { f: n - 1, ease: 'none', onUpdate: draw,
    scrollTrigger: { trigger: '#seq-wrap', start: 'top top', end: '+=300%', pin: true, scrub: .5 } });
});
```
`FRAMES` = array de URLs dos frames. CSS: `canvas { width:100%; height:100dvh; object-fit:cover; }`.

## Não usar
Página de captura leve, conexão ruim como público principal, sem frames reais (nunca placeholder).
