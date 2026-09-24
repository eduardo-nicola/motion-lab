---
tipo: tecnica
grupo: tipo
gatilho: nenhum
eixo: nenhum
deps: css
custo: baixo
mobile: degradar
reduced-motion: mantem
secao: [hero]
combina: ["[[Zoom parallax]]"]
conflita: []
fonte: exemples/type/text-mask/
tags: [tecnica/tipo]
---
# Text mask

> **Fórmula:** Quando **o título precisa de imagem**, o **tipo** faz **mask** com **estado estático**, porque a foto só existe dentro da letra.

```css
.mask { font-weight:800; font-size: clamp(4.5rem, 22vw, 12rem); letter-spacing:-.08em; line-height:.8;
  color: var(--ink);                                   /* fallback */
  background: url('{{URL da imagem}}') center/cover; }
@supports (background-clip: text) or (-webkit-background-clip: text) {
  .mask { color: transparent; -webkit-background-clip: text; background-clip: text; }
}
```
Animação opcional: `background-position` ou `background-size` no scrub (dolly dentro da letra).
Uma palavra só; uma máscara por dobra; palavra curta (quebra no mobile). Imagem via [[Mídia e imagens]].
