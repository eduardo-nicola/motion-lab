---
tipo: tecnica
grupo: palco
gatilho: load
eixo: x
deps: css
custo: baixo
mobile: ok
reduced-motion: parado
secao: [hero]
combina: ["[[Grain]]"]
conflita: ["[[Mesh gradient]]", "[[Blob aproximado]]"]
fonte: exemples/stage/light-leak/
tags: [tecnica/palco]
---
# Light leak

> **Fórmula:** Quando **o quadro pede calor**, uma **faixa diagonal** faz **light leak** com **varredura de 9s em screen blend**, porque um acento de luz cruzando a foto substitui vídeo de stock.

```css
.leak { position:relative; overflow:hidden; }
.wash { position:absolute; inset:-30% -45%; width:170%; height:160%; pointer-events:none;
  background: linear-gradient(100deg, transparent 32%, rgb(226 61 40 / .55) 47%, rgb(255 197 120 / .4) 53%, transparent 66%);
  mix-blend-mode: screen; transform: translateX(-26%); }
.motion .wash { animation: leak 9s ease-in-out infinite alternate; }
@keyframes leak { to { transform: translateX(22%) rotate(2deg); } }
```
Usar em hero fotográfico, estética analógica. Não usar em UI de produto. Cores do leak derivadas do acento da marca.
