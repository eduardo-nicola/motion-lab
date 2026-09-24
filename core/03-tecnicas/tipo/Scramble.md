---
tipo: tecnica
grupo: tipo
gatilho: hover
eixo: nenhum
deps: vanilla
custo: baixo
mobile: ok
reduced-motion: texto-final
secao: [hero, features]
combina: ["[[Hover]]"]
conflita: []
fonte: exemples/type/scramble/
tags: [tecnica/tipo]
---
# Scramble

> **Fórmula:** Quando **o ponteiro entra** (ou foco), o **nome** faz **scramble** com **700ms**, porque o estado muda de cifrado para lido, e isso é feedback.

`Motion.scramble(el, text, 700)` em [[motion-kit.js]]: a cada frame, caractere i revela quando `progress > i/len`; os demais sorteiam de `A–Z0–9`. Disparar em `pointerenter` **e** `focus`.

Acessibilidade: `aria-label` fixo com o texto final (leitor de tela não lê glifos aleatórios).
Usar em nome, label de peça, número-chave revelado no scroll (IO). Não usar em corpo nem em tudo que "parece hacker".
