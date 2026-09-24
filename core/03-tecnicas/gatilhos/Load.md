---
tipo: tecnica
grupo: gatilhos
gatilho: load
eixo: y
deps: css
custo: baixo
mobile: ok
reduced-motion: texto-montado
secao: [hero]
combina: ["[[Kinetic type]]", "[[Stagger]]", "[[Grain]]"]
conflita: []
fonte: exemples/triggers/load/
tags: [tecnica/gatilhos]
---
# Load

> **Fórmula:** Quando **a página carrega**, o **título** faz **stagger de letras** com **40–60ms e 0.7s ease-out**, porque a hierarquia precisa existir no primeiro olhar.

## Ideia central
Coreografia de entrada. Primeiro frame aponta o que importa: nome → tese → CTA. Toca **uma vez**.

## Usar
Hero, headline, nome do produto, CTA primário (entra por último, ~600ms).

## Não usar
Conteúdo já visto, dashboards, texto que precisa ser lido em 200ms, loop infinito.

## Implementação (produção)
```html
<h1 class="load-word" aria-label="LANÇAMENTO">
  <span aria-hidden="true" style="--i:0">L</span><span aria-hidden="true" style="--i:1">A</span>…
</h1>
<p class="load-sub">Tese em uma linha.</p>
```
```css
.load-word span { display:inline-block; }
.motion .load-word span { opacity:0; transform:translateY(32px);
  animation: up var(--dur-enter) var(--ease-out) forwards;
  animation-delay: calc(var(--i) * 40ms); }
.motion .load-sub { opacity:0; transform:translateY(16px);
  animation: up .6s var(--ease-out) 620ms forwards; }
@keyframes up { to { opacity:1; transform:none; } }
```
Divisão de letras via JS: ver `Motion.splitChars()` em [[motion-kit.js]].

## Reduced motion
Sem `.motion` → texto já no lugar.

## Ver também
[[Kinetic type]] (mesma técnica como peça visual) · [[Stagger]] · [[Duration]]
