# langpages-criativas

Central de criação de landing pages com design único: um mapa de técnicas de animação, eventos e estilos, e um lab com uma demo viva de cada uma.

## Estrutura

```
core/       vault Obsidian: o conhecimento (princípios, padrões, técnicas, receitas, kit)
exemples/   MOTION lab: uma página HTML estática por técnica
```

- **`core/`**: abra a pasta como vault no Obsidian e comece por `00-mapa/MAPA.md`.
- **`exemples/`**: 43 técnicas em 6 grupos (gatilhos, scroll, palco, tipo, pele, timing). Detalhes em [`exemples/README.md`](exemples/README.md).

## Rodar o lab

```bash
cd exemples
npm install && npm run dev      # http://localhost:4173/
# ou, sem Node:
python3 -m http.server 4173
```

O servidor precisa ter `exemples/` como raiz, porque os links são root-relative (`/_shared/...`).

## Regras que valem para tudo

- **O estado final é o padrão; o movimento é uma camada.** A página funciona sem animação, sem JS e sem CDN.
- **Uma câmera por página** e **um sistema de fundo** (+ grain).
- Anime só `transform` e `opacity`. No scrub, `ease: "none"`; na UI, `cubic-bezier(0.16, 1, 0.3, 1)`.
- GSAP só com fallback. Sem imagens externas.

## Referência

- [oryzo.ai](https://oryzo.ai/): análise em `core/04-referencias/Oryzo.ai.md`.
