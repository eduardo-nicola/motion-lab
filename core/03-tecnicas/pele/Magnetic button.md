---
tipo: tecnica
grupo: pele
gatilho: ponteiro
eixo: xy
deps: vanilla
custo: baixo
mobile: desligar
reduced-motion: desligado
secao: [hero, cta-final]
combina: ["[[Spring]]", "[[Hover]]", "[[Lens blur]]"]
conflita: []
fonte: exemples/skin/magnetic-button/
tags: [tecnica/pele]
---
# Magnetic button

> **Fórmula:** Quando **o cursor chega perto**, o **botão** faz **translate atrás do ponteiro** com **follow 80ms linear e retorno 0.5s ease-out**, porque o clique precisa parecer posse.

`Motion.magnetic(el, 0.35, zona)` em [[motion-kit.js]] (`zona` = elemento maior que o botão, para o puxão começar **perto**, não só em cima): `pointermove` → deslocamento = (cursor − centro) × strength; `pointerleave` → volta a 0 com `--ease-out` (ou [[Spring]]).

Regras: **um CTA** por página (o principal). Só com `(hover: hover) and (pointer: fine)`. Nunca estado de framework para cursor. Contraste AA do texto no acento. Botão de envio de form: só `transform` ([[Formulário e motion]]).
