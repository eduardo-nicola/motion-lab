---
tipo: padrao
tags: [padrao, midia]
---
# Mídia e imagens

Técnicas que dependem de imagem: [[Parallax]], [[Zoom parallax]], [[Split screen]], [[Curtain reveal]], [[Text mask]], [[Tilt card]], [[Lens blur]], [[Light leak]], [[Gobo]], [[Lupa arrastável]], [[Image sequence]].

## Regras
- Os demos do [[Motion lab (exemples)]] usam `picsum.photos` — **só para estudo**. Em página real: imagem própria, WebP/AVIF.
- `alt` descritivo; `loading="lazy"` abaixo da dobra; hero **sem** lazy.
- Conteúdo nunca mora só em `background-image` (sem alt).

## Requisitos por técnica
| Técnica | Proporção | Largura mínima | Observação |
|---|---|---|---|
| Zoom parallax | 3:2 ou 16:9 | 1800px | escala até 1.22 → sobra de resolução |
| Parallax (fundo) | 16:9 | 1600px | desloca ~160px → altura extra |
| Text mask | paisagem | 1600px | textura legível dentro da letra, alto contraste |
| Lens blur | qualquer | 1400px | será borrada, pode ser mais leve |
| Tilt card | 4:3 | 900px | objeto recortado funciona melhor |
| Curtain | 16:10 | 1600px | é o assunto revelado |
| Lupa | par idêntico | 1200px | normal + macro no mesmo enquadramento |
| Image sequence | 16:9 | 1600px (mobile 800) | 60–150 frames, 40–80KB cada |

Sem mídia adequada → técnica sem imagem ([[Mesh gradient]], [[Kinetic type]], [[Scrub]] de número).
