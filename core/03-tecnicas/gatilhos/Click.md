---
tipo: tecnica
grupo: gatilhos
gatilho: click
eixo: nenhum
deps: vanilla
custo: baixo
mobile: ok
reduced-motion: troca-sem-viagem
secao: [features, proof]
combina: ["[[Spring]]", "[[Ease out]]"]
conflita: []
fonte: exemples/triggers/click/
tags: [tecnica/gatilhos]
---
# Click

> **Fórmula:** Quando **o botão é acionado**, o **retângulo** faz **morph para painel** com **0.55s ease-out**, porque o clique precisa mostrar que o estado mudou, não só piscar.

## Ideia central
Clique = mudança de estado visível. Morph (FLIP) liga origem e destino. `:active scale(.98)` sempre.

## Usar
Abrir detalhe, toggle, FAQ/accordion, "ver mais", confirmação.

## Não usar
Quando navega de verdade (→ [[Page transition]]). Quando destino não tem relação espacial com origem.

## Implementação (produção)
```css
.panel[hidden] { display:none; }
.motion .panel.is-on { animation: rise .55s var(--ease-out); }
@keyframes rise { from { opacity:0; transform: translateY(16px) scale(.96); } }
```
```js
open.addEventListener('click', () => {
  open.hidden = true; panel.hidden = false; panel.classList.add('is-on');
  panel.querySelector('button').focus();           // foco segue o estado
});
close.addEventListener('click', () => {
  panel.hidden = true; panel.classList.remove('is-on'); open.hidden = false; open.focus();
});
```
Acessibilidade: `aria-expanded` no gatilho, `aria-controls` apontando o painel.

FAQ nativo sem JS: `<details><summary>` + `details[open] .body { animation: rise … }`.

## Ver também
[[Spring]] · [[Page transition]]
