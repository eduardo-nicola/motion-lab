---
tipo: padrao
tags: [padrao, form]
---
# Formulário e motion

## Pode
- Animar o **container** da seção (reveal do bloco inteiro, uma vez).
- [[Magnetic button]] no botão de envio (só `transform`).
- Palco atrás do form ([[Mesh gradient]], [[Grain]]) com contraste AA.

## Não pode
- Form dentro de [[Horizontal hijack]], [[Z-axis dive]], [[Sticky stack]] ou [[Pin]] com scrub — campos se movendo enquanto a pessoa digita.
- Reveal com stagger nos campos ("form, preço e nav já precisam estar lá").
- Scramble/kinetic em label de campo.
- Overlay (grain, cortina) cobrindo campos sem `pointer-events: none`.

## Posição
Hero de captura (form na primeira dobra, página simples) **ou** `cta-final` em fluxo Y normal, depois que a câmera da página já soltou.
