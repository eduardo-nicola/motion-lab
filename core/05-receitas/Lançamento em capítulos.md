---
tipo: receita
uso: venda
motion-intensity: 6
camera: pin-capitulos
palco: grain
deps: [css, vanilla, gsap]
tags: [receita]
---
# Lançamento em capítulos

Produto ou curso com **método em passos**. Câmera: seções pinadas que contam atos.

**Dials:** DESIGN_VARIANCE 7 · MOTION_INTENSITY 6 · VISUAL_DENSITY 4

| Seção | Técnica | Fórmula |
|---|---|---|
| hero | [[Load]] + [[Zoom parallax]] | Quando a seção pina, a foto do produto aproxima (1 → 1.22, scrub none), porque a aproximação é o argumento. |
| problema × solução | [[Split screen]] | Quando pina, antes e depois andam em sentidos opostos, porque duas vozes ocupam o mesmo tempo. |
| método | [[Chapter timeline]] ou [[Sticky stack]] | Quando o progresso anda, cada passo tem seu ato, porque o método tem ordem. |
| números | [[Scrub]] (contador) | Quando o scroll vai de 0 a 1, o número conta, porque o dado precisa ser visto crescendo. |
| logos | [[Marquee]] (única) | Faixa 28s linear. |
| oferta | [[Curtain reveal]] | Quando o scroll avança, a cortina abre a oferta, porque ela é o assunto revelado. |
| cta-final | form em fluxo Y + [[Magnetic button]] | — |

**Riscos:** pins demais (máx. 3: hero, método, oferta). Split + stack na mesma página = ok (ambos Y); **nunca** hijack aqui.
