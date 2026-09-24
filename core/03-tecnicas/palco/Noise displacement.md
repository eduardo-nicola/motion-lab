---
tipo: tecnica
grupo: palco
gatilho: load
eixo: nenhum
deps: css
custo: medio
mobile: ok
reduced-motion: filtro-off
secao:
  - hero
combina:
  - "[[Grain]]"
conflita:
  - "[[Particles]]"
fonte: exemples/stage/noise-displacement/
tags:
  - tecnica/palco
---
# Noise displacement

> **Fórmula:** Quando **o título precisa de matéria**, o **SVG filter** faz **displacement** com **turbulência lenta (8s)**, porque a palavra é objeto no palco, não label.

## Implementação (produção)
```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="d">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="2" result="n">
      <animate attributeName="baseFrequency" values="0.8;0.95;0.8" dur="8s" repeatCount="indefinite"/>
    </feTurbulence>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="6"/>
  </filter>
</svg>
<p class="noisy" aria-hidden="true">RUÍDO</p>
```
```css
.motion .noisy { filter: url(#d); }
```
## Usar / Não usar
Uma palavra, um frame. Nunca em corpo de texto (quebra leitura) nem no `<h1>` real se prejudicar legibilidade — usar como peça decorativa ao lado do h1. Filter SVG animado custa CPU: uma instância por página.
