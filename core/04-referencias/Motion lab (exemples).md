---
tipo: referencia
url: exemples/ (local, http://localhost:4173/)
stack: [html-estatico, css, vanilla, gsap-via-withGsap]
versao: 2
tags: [referencia]
---
# Motion lab (exemples)

Lab local em `../exemples/`: **uma técnica, uma pasta**, demo viva + fórmula + usar / não usar + comportamento sem motion. **v2 foi construído a partir deste vault**: o manifesto de `_shared/nav.js` segue a tabela do [[MAPA]] (as páginas não citam o vault).

## Como rodar
```bash
cd exemples && npm install && npm run dev   # http://localhost:4173/
```

## Arquitetura
- `_shared/nav.js` — manifesto único (6 grupos, 43 técnicas) → breadcrumb e anterior/próximo. Testar fallback pelo DevTools: emular `prefers-reduced-motion` e bloquear `cdn.jsdelivr.net`.
- `_shared/motion-kit.js` — cópia executável de [[motion-kit.js]].
- `_shared/lab.css` — [[Tokens base]] com paleta quente do [[Oryzo.ai]] (`#100904`, `#ffedd7`, `#dc5000`), Clash Display + General Sans, grain global.
- `_shared/media/` — plates SVG e 48 frames (vista explodida do porta-copos, gerador em `media/_src/gen_seq.py`) gerados localmente (sem imagens externas, ver [[Mídia e imagens]]).
- Página-modelo: `scroll/pin/index.html`.

## Grupos (pastas)
`gatilhos/` · `scroll/` · `palco/` · `tipo/` · `pele/` · `timing/` — mesmos nomes de `03-tecnicas/`.

## Histórico
- **v1** (commits até `0a2722d` em github.com/eduardo-nicola/motion-lab): 34 técnicas, paleta olive/burnt red, picsum, GSAP por `<script src>`, `Lab.reduce()`.
- **v2**: reconstruído a partir deste vault seguindo [[Padrões de entrega HTML]], [[CDN com fallback]] e [[Reduced motion e progressive enhancement]].
