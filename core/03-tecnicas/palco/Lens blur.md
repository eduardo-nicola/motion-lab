---
tipo: tecnica
grupo: palco
gatilho: nenhum
eixo: nenhum
deps: css
custo: baixo
mobile: ok
reduced-motion: mantem
secao: [hero, cta-final]
combina: ["[[Grain]]", "[[Magnetic button]]"]
conflita: ["[[Particles]]"]
fonte: exemples/stage/lens-blur/
tags: [tecnica/palco]
---
# Lens blur

> **Fórmula:** Quando **o assunto precisa de plano**, o **fundo** faz **blur 16px** com **estado estático**, porque hierarquia ótica é mais barata que câmera 3D.

```css
.lens { position:relative; overflow:hidden; }
.lens .bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  filter: blur(16px) saturate(.7); transform: scale(1.08); }   /* scale esconde borda borrada */
.lens .fg p { background: rgb(0 0 0 / .72); padding: 20px 22px; }
```
Variação: `backdrop-filter: blur()` em card sobre foto (glass) — com fallback de cor sólida.
Usar para destacar CTA/objeto. Não usar se a foto **é** o produto.
