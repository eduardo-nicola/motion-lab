---
tipo: tecnica
grupo: palco
gatilho: load
eixo: nenhum
deps: css
custo: baixo
mobile: ok
reduced-motion: parado
secao: [hero, cta-final]
combina: ["[[Grain]]", "[[Kinetic type]]"]
conflita: ["[[Particles]]", "[[Blob aproximado]]"]
fonte: exemples/stage/mesh-gradient/
tags: [tecnica/palco]
---
# Mesh gradient

> **Fórmula:** Quando **o palco precisa de clima**, o **fundo** faz **mesh de dois blobs** com **14–18s ease-in-out alternate**, porque atmosfera é hierarquia de silêncio, não hero de partículas.

## Ideia central
2 manchas (`border-radius:50%`, `filter: blur(70px)`, opacity .55) derivando lentamente. Cores = tokens da marca dessaturados.

## Usar
Página tipográfica que precisa de temperatura; fundo de form de captura.

## Não usar
Atrás de foto densa. Com particles/blob.

## Implementação (produção)
```css
.mesh { position:relative; overflow:hidden; }
.mesh .b { position:absolute; border-radius:50%; filter:blur(70px); opacity:.55; pointer-events:none; }
.b1 { width:55vw; height:55vw; left:-10%; top:-20%; background: var(--color-primary-deep); }
.b2 { width:40vw; height:40vw; right:-8%; bottom:-10%; background: var(--color-secondary-deep); }
.motion .b1 { animation: drift 14s ease-in-out infinite alternate; }
.motion .b2 { animation: drift2 18s ease-in-out infinite alternate; }
@keyframes drift  { to { transform: translate(8%, 10%); } }
@keyframes drift2 { to { transform: translate(-10%, -6%); } }
```
