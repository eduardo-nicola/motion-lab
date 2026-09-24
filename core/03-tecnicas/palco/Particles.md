---
tipo: tecnica
grupo: palco
gatilho: load
eixo: nenhum
deps: vanilla
custo: medio
mobile: degradar
reduced-motion: canvas-vazio
secao: [hero]
combina: ["[[Grain]]"]
conflita: ["[[Mesh gradient]]", "[[Blob aproximado]]", "[[Noise displacement]]"]
fonte: exemples/stage/particles/
tags: [tecnica/palco]
---
# Particles

> **Fórmula:** Quando **o palco pede poeira**, o **canvas** faz **60 pontos lentos** com **drift contínuo**, porque atmosfera é densidade baixa, não hero circus.

## Implementação (produção)
```js
Motion.particles(canvas, { count: innerWidth < 768 ? 30 : 60, color: 'rgba(226,61,40,.55)' });
```
Base (em [[motion-kit.js]]): canvas `aria-hidden`, `pointer-events:none`, DPR ≤ 2, pausa com IO fora da viewport, pontos r 0.8–2.4px sobem 0.00015–0.0004/frame e reciclam.

## Não usar
Atrás de UI densa, explosão interativa, junto de mesh/blob/vídeo.
