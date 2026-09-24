---
tipo: principio
tags: [principio]
---
# Fórmula do movimento

Toda animação da página precisa caber nesta frase. Se não cabe, não entra.

> **Quando** `<gatilho>`, **o** `<objeto>` **faz** `<transformação>` **com** `<timing>`, **porque** `<intenção narrativa>`.

Exemplos (do [[Motion lab (exemples)]]):
- Quando **a página carrega**, o **título** faz **stagger de letras** com **60ms e 0.7s ease-out**, porque a hierarquia precisa existir no primeiro olhar. → [[Load]]
- Quando **o wrapper pina no topo**, o **trilho** faz **translateX** com **scrub 1 e ease none**, porque cada quadro pede a tela inteira. → [[Horizontal hijack]]
- Quando **o cursor chega perto**, o **botão** faz **translate atrás do ponteiro** com **follow curto e retorno 0.5s ease-out**, porque o clique precisa parecer posse. → [[Magnetic button]]

## As 5 partes = 5 decisões
| Parte | Decide | Onde está no vault |
|---|---|---|
| Quando | gatilho | [[Load]] · [[Hover]] · [[Click]] · scroll (grupo scroll) · ponteiro (grupo pele) |
| o | objeto | título, CTA, imagem, seção, fundo |
| faz | transformação | só `transform`, `opacity`, `filter`, `clip-path` (ver [[Performance de motion]]) |
| com | timing | [[Curvas e tempos canônicos]] |
| porque | narrativa | se o porquê é "fica bonito", cortar |

## Uso no plano da página
No plano de [[Fluxo de criação]], cada seção listada ao usuário leva sua fórmula. Isso vira documentação da página e facilita edição futura.
