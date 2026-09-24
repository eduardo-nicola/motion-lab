---
tipo: tecnica
grupo: palco
gatilho: load
eixo: nenhum
deps: vanilla
custo: medio
mobile: ok
reduced-motion: mancha-estatica
secao: [hero]
combina: ["[[Grain]]"]
conflita: ["[[Particles]]", "[[Mesh gradient]]"]
fonte: exemples/stage/webgl-blob/
tags: [tecnica/palco]
---
# Blob aproximado

> **Fórmula:** Quando **o palco pede volume**, o **canvas 2D** faz **gradiente radial derivando** com **drift lento**, porque three.js não está no padrão e mentir WebGL é pior do que nomear a aproximação.

## Ideia central
`createRadialGradient` com centro oscilando `sin(t)*52`, `cos(t*.8)*32`, t += .005/frame. Aproximação honesta de blob WebGL.

## Upgrade possível
Blob real = shader (fragment com noise 3D) em WebGL puro inline (~80 linhas, sem three.js). Só com `MOTION_INTENSITY ≥ 8` e fallback para esta versão. Ver [[Oryzo.ai]].

## Não usar
Como substituto de produto 3D real.
