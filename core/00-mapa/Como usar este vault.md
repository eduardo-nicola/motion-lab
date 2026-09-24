---
tipo: guia
tags: [mapa]
---
# Como usar este vault

Fluxo para transformar um brief em landing page criativa usando este vault (humano ou agente).

## 1. Ler o brief e fixar os dials

| Dial | 1 | 10 | Efeito |
|---|---|---|---|
| `DESIGN_VARIANCE` | grid clássico | layout quebrado, assimétrico | quantos gestos editoriais |
| `MOTION_INTENSITY` | só hover/reveal | câmera de scroll + palco vivo | quantas técnicas de [[03-tecnicas]] entram |
| `VISUAL_DENSITY` | muito respiro | denso | espaçamento, nº de seções |

Página de captura (opt-in) → `MOTION_INTENSITY ≤ 4`. Página de produto/lançamento → pode ir a 8.

## 2. Identidade visual
Se a marca já tem site/material: extrair paleta, fontes, radius, sombras → preencher [[Tokens base]]. **Tokens default do vault só valem quando não houver identidade.**

## 3. Escolher a câmera
Uma única ideia de câmera por página: ver [[Uma câmera por página]]. As demais técnicas obedecem a ela.

## 4. Montar pela receita
Pegar uma receita em [[05-receitas/Receitas|Receitas]] e trocar peças pelo dicionário. Cada nota de técnica tem: fórmula, usar/não usar, snippet de produção, reduced motion, conflitos.

## 5. Fluxo
Ver [[Fluxo de criação]]. O plano lista **as técnicas escolhidas e o porquê** (usar a [[Fórmula do movimento]]).

## 6. Validar
[[Checklist de entrega]] antes de publicar.

## Convenções do vault
- Toda técnica tem frontmatter padronizado (`grupo`, `gatilho`, `eixo`, `deps`, `custo`, `mobile`, `secao`, `combina`, `conflita`) → consultável em [[tecnicas.base]].
- `deps`: `css` (zero JS) · `vanilla` (JS próprio, inline) · `gsap` (CDN + fallback obrigatório, ver [[CDN com fallback]]) · `webgl` (fora do padrão).
- `mobile`: `ok` · `degradar` (versão simplificada) · `desligar`.
- Tags: `tecnica/<grupo>`, `principio`, `padrao`, `receita`, `referencia`.
