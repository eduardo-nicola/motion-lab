---
tipo: tecnica
grupo: tipo
gatilho: scroll-enter
eixo: y
deps: vanilla
custo: baixo
mobile: ok
reduced-motion: texto-montado
secao: [hero, features, proof]
combina: ["[[Chapter timeline]]", "[[Reveal stagger]]", "[[Load]]"]
conflita: []
fonte: "[[Oryzo.ai]] (GSAP SplitText mask: lines)"
tags: [tecnica/tipo]
---
# Line mask reveal

> **Fórmula:** Quando **o título entra**, cada **linha** faz **translateY 100% → 0 dentro de uma máscara** com **0.8s ease-out e stagger 80ms**, porque o texto parece nascer de trás de uma régua, não flutuar.

## Ideia central
Assinatura Oryzo/Lusion em todos os títulos. Diferente de [[Kinetic type]] (letras soltas com fade): aqui **sem opacity**, o texto é cortado por `overflow: hidden`.

## Implementação (produção, sem SplitText pago)
Quebrar manualmente por linha no HTML (títulos curtos, quebras controladas):
```html
<h2 class="lm" aria-label="Feito para canecas. Construído para mesas.">
  <span class="lm-l" aria-hidden="true"><span>Feito para canecas.</span></span>
  <span class="lm-l" aria-hidden="true"><span>Construído para mesas.</span></span>
</h2>
```
```css
.lm-l { display:block; overflow:hidden; padding-bottom:.08em; }      /* padding evita cortar descendentes */
.lm-l > span { display:inline-block; }
.motion .lm-l > span { transform: translateY(105%); transition: transform .8s var(--ease-out); }
.motion .lm.in .lm-l > span { transform: none; }
.motion .lm.in .lm-l:nth-child(2) > span { transition-delay: 80ms; }
.motion .lm.in .lm-l:nth-child(3) > span { transition-delay: 160ms; }
```
```js
Motion.reveal('.lm');   // adiciona .in uma vez
```
Quebra automática por largura (responsivo): medir `offsetTop` de spans por palavra e agrupar — só se necessário.
