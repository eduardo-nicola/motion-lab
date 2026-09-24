---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: z-falso
deps: gsap
custo: baixo
mobile: ok
reduced-motion: escala-1
secao: [hero]
combina: ["[[Pin]]", "[[Grain]]"]
conflita: ["[[Z-axis dive]]"]
fonte: exemples/scroll/zoom-parallax/
tags: [tecnica/scroll]
---
# Zoom parallax

> **Fórmula:** Quando **a seção está pinada**, a **imagem** faz **scale 1 → 1.22** com **scrub none**, porque a aproximação é o argumento, não um Ken Burns solto.

## Ideia central
Dolly falso na foto. Um zoom, sem segundo eixo. Texto sobreposto no rodapé da seção.

## Usar
Hero fotográfico de produto/ambiente que precisa virar presença.

## Não usar
Retrato de pessoa (distorce percepção). Somado a [[Z-axis dive]].

## Implementação (produção)
```js
withGsap(function (gsap) {
  gsap.fromTo('#shot', { scale: 1 }, { scale: 1.22, ease: 'none',
    scrollTrigger: { trigger: '#hold', start: 'top top', end: '+=160%', pin: true, scrub: true } });
});
```
```css
#hold { min-height:100dvh; overflow:hidden; position:relative; }
#hold img { width:100%; height:100dvh; object-fit:cover; will-change:transform; }
```
Imagem ≥ 1800px (ver [[Mídia e imagens]]). Hero acima da dobra: **sem** `loading="lazy"`.
