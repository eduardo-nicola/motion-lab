---
tipo: tecnica
grupo: tipo
gatilho: load
eixo: y
deps: vanilla
custo: baixo
mobile: ok
reduced-motion: texto-montado
secao: [hero]
combina: ["[[Load]]", "[[Mesh gradient]]", "[[Grain]]"]
conflita: []
fonte: exemples/type/kinetic-type/
tags: [tecnica/tipo]
---
# Kinetic type

> **Fórmula:** Quando **o nome entra**, cada **letra** faz **translateY stagger** com **50ms e 0.7s ease-out**, porque o título é o visual, não um H1 sentado.

## Ideia central
Tipo display gigante (`clamp(3.2rem, 12vw, 8rem)`, `letter-spacing: -0.07em`, `line-height: .9`) como peça gráfica principal. Letra pesa, entra, para.

## Implementação (produção)
```js
Motion.splitChars(document.querySelector('[data-kinetic]'), 50); // cria spans + aria-label
```
```css
.motion [data-kinetic] span span {  /* palavra > letra */ display:inline-block; opacity:0; transform:translateY(40px);
  animation: up .7s var(--ease-out) forwards; animation-delay: var(--d); }
```
Variações: por **palavra** (frases longas), máscara de linha (`overflow:hidden` no pai + `translateY(100%)`), peso variável (`font-variation-settings`) no scroll.

## Não usar
Parágrafos, nav, loop infinito. Serif aleatória no meio do sans.
