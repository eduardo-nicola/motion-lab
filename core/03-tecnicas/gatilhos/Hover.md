---
tipo: tecnica
grupo: gatilhos
gatilho: hover
eixo: nenhum
deps: css
custo: baixo
mobile: ok
reduced-motion: so-cor
secao: [hero, features, cta-final]
combina: ["[[Ease out]]", "[[Magnetic button]]"]
conflita: []
fonte: exemples/triggers/hover/
tags: [tecnica/gatilhos]
---
# Hover

> **Fórmula:** Quando **o ponteiro entra**, o **botão** faz **scale e muda de cor** com **0.3s ease-out**, porque o cursor precisa de resposta antes do clique.

## Ideia central
Hover é o gatilho, CSS puro. Três variantes canônicas:
1. **scale + cor** — CTA
2. **underline reveal** — link de texto
3. **icon nudge** — seta desloca 6px

## Usar
CTA, card clicável, link importante.

## Não usar
Texto corrido. Única pista de interação em touch (não existe hover no toque). A física de puxão é outra pele: [[Magnetic button]].

## Implementação (produção)
```css
.btn { transition: transform .3s var(--ease-out), background-color .3s var(--ease-out); }
.btn:hover, .btn:focus-visible { transform: scale(1.04); background-color: var(--color-primary-hover); }
.btn:active { transform: scale(.98); }

.link-u { border-bottom: 2px solid var(--line); transition: border-color .3s var(--ease-out); }
.link-u:hover, .link-u:focus-visible { border-color: var(--color-primary); }

.link-n .arrow { display:inline-block; transition: transform .3s var(--ease-out); }
.link-n:hover .arrow, .link-n:focus-visible .arrow { transform: translateX(6px); }
@media (prefers-reduced-motion: reduce) { .btn:hover { transform:none; } }
```

## Ver também
[[Ease out]] · [[Duration]] · [[Spotlight border]]
