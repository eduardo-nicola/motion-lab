---
tipo: tecnica
grupo: palco
gatilho: load
eixo: nenhum
deps: css
custo: baixo
mobile: ok
reduced-motion: parado
secao: [features, cta-final]
combina: ["[[Grain]]", "[[Nav adaptativa]]"]
conflita: ["[[Light leak]]", "[[Mesh gradient]]"]
fonte: "[[Oryzo.ai]] (light cookie de planta na seção sustainability)"
tags: [tecnica/palco]
---
# Gobo

> **Fórmula:** Quando **a seção pede luz natural**, uma **sombra de folhagem/janela** faz **deriva lenta** com **20s ease-in-out alternate**, porque luz projetada dá lugar físico ao produto.

Gobo = recorte na frente da luz (folhas, persiana, janela). Funciona melhor em **seção clara**.
```css
.gobo { position:relative; overflow:hidden; background: var(--color-cream); }
.gobo::after { content:""; position:absolute; inset:-10%; pointer-events:none;
  background: url('{{PNG de sombra}}') center/cover no-repeat;
  mix-blend-mode: multiply; opacity:.35; filter: blur(2px); }
.motion .gobo::after { animation: sway 20s ease-in-out infinite alternate; }
@keyframes sway { to { transform: translate(2%, 1%) rotate(1.5deg) scale(1.03); } }
```
Sem PNG disponível: sombra de persiana em CSS puro com `repeating-linear-gradient(100deg, transparent 0 40px, rgb(0 0 0 / .18) 40px 70px)` + blur.
