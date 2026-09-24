---
tipo: tecnica
grupo: tipo
gatilho: load
eixo: x
deps: css
custo: baixo
mobile: ok
reduced-motion: texto-estatico
secao: [proof]
combina: ["[[Grain]]"]
conflita: ["[[Horizontal hijack]]"]
fonte: exemples/type/marquee/
tags: [tecnica/tipo]
---
# Marquee

> **Fórmula:** Quando **a lista é larga demais para caber**, a **faixa** faz **translateX infinito** com **28s linear**, porque amplitude não pede leitura item a item.

```html
<div class="mq" aria-label="Logos de clientes: A, B, C">
  <div class="mq-track" aria-hidden="true"><span>A · B · C · </span><span>A · B · C · </span></div>
</div>
```
```css
.mq { overflow:hidden; }
.mq-track { display:flex; width:max-content; white-space:nowrap; }
.motion .mq-track { animation: mq 28s linear infinite; }
.mq:hover .mq-track { animation-play-state: paused; }
@keyframes mq { to { transform: translateX(-50%); } }   /* conteúdo duplicado = loop sem emenda */
```
**Máximo uma por página.** Logos, manifesto, números. Não usar como nav.
