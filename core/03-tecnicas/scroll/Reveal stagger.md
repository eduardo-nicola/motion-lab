---
tipo: tecnica
grupo: scroll
gatilho: scroll-enter
eixo: y
deps: vanilla
custo: baixo
mobile: ok
reduced-motion: ja-visivel
secao: [features, proof]
combina: ["[[Stagger]]", "[[Parallax]]", "[[Pin]]"]
conflita: []
fonte: exemples/scroll/reveal-stagger/
tags: [tecnica/scroll]
---
# Reveal stagger

> **Fórmula:** Quando **o item entra na viewport**, ele faz **reveal** com **stagger 70ms**, porque a lista é uma tese em ordem, não um mural.

## Ideia central
Entrada, não pin nem scrub. Dispara **uma vez**, desconecta. Direção consistente (de baixo pra cima).

## Usar
Features, benefícios, versos, depoimentos em fila vertical. **Câmera base mais segura** — combina com quase tudo.

## Não usar
Nav, preço, formulário (precisam já estar lá). Itens que devem coexistir na memória desde o primeiro frame.

## Implementação (produção, zero CDN)
```css
.motion [data-reveal] { opacity:0; transform: translateY(28px); }
.motion [data-reveal].in { opacity:1; transform:none;
  transition: opacity .6s var(--ease-out), transform .6s var(--ease-out); }
```
```js
Motion.reveal('[data-reveal]', { stagger: 70, threshold: .35 }); // [[motion-kit.js]]
```
Versão nativa: `animation-timeline: view()` (ver [[CDN com fallback]]).

## Ver também
[[Stagger]] · [[Load]]
