---
tipo: tecnica
grupo: scroll
gatilho: scroll-enter
eixo: nenhum
deps: vanilla
custo: baixo
mobile: ok
reduced-motion: troca-direta
secao: [global]
combina: ["[[Gobo]]"]
conflita: []
fonte: "[[Oryzo.ai]] (--btn-color por seção)"
tags: [tecnica/scroll]
---
# Nav adaptativa

> **Fórmula:** Quando **uma seção de tema oposto passa sob o header**, a **nav** faz **troca de cor** com **0.3s ease-out**, porque o HUD precisa continuar legível sobre qualquer palco.

Cada seção declara `data-theme="dark|light"`. IO com `rootMargin` na faixa do header:
```js
var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) document.documentElement.dataset.nav = e.target.dataset.theme; });
}, { rootMargin: '0px 0px -92% 0px' });   // só a faixa superior (~8%) conta
document.querySelectorAll('[data-theme]').forEach(function (s) { io.observe(s); });
```
```css
.nav { color: var(--nav-ink, var(--color-ink)); transition: color .3s var(--ease-out); }
[data-nav="light"] .nav { --nav-ink: var(--color-bg); }
```
Pré-requisito do padrão Oryzo "uma seção clara no meio" — ponto de virada da narrativa.
