---
tipo: tecnica
grupo: pele
gatilho: click
eixo: x
deps: css
custo: baixo
mobile: ok
reduced-motion: troca-direta
secao: [features]
combina: ["[[Click]]"]
conflita: []
fonte: exemples/skin/page-transition/
tags: [tecnica/pele]
---
# Page transition

> **Fórmula:** Quando **se troca de peça**, o **wipe** faz **scaleX** com **0.6s ease-out**, porque a troca de estado precisa de cortina honesta.

Keyframe único: 0→50% cresce da esquerda (`origin: 0 50%`), 51% troca origem, 50→100% recolhe para a direita. Conteúdo troca aos 300ms (meio).
```css
@keyframes wipe { 0%{transform:scaleX(0);transform-origin:0 50%} 50%{transform:scaleX(1);transform-origin:0 50%}
  51%{transform-origin:100% 50%} 100%{transform:scaleX(0);transform-origin:100% 50%} }
```
Em landing single-page: tabs de planos/módulos, carrossel de depoimentos. Entre páginas reais do site: **View Transitions API** (`@view-transition { navigation: auto; }`) — progressive enhancement, sem JS.
