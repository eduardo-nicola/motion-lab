# MOTION lab

Dicionário vivo de técnicas de movimento para landing pages com design único. Uma técnica por pasta, cada página com demo, fórmula, "usar / não usar" e comportamento sem motion.


## Rodar

```bash
npm install && npm run dev      # http://localhost:4173/
# ou, sem Node:
python3 -m http.server 4173
```

A raiz servida **precisa** ser `exemples/` (links são root-relative: `/_shared/...`, `/scroll/pin/`).

## Estrutura

```
_shared/
  lab.css         tokens + chrome + anatomia das páginas
  motion-kit.js   runtime: reveal, splitChars, magnetic, tilt,
                  scramble, spring, loop, particles, fit, withGsap (CDN com fallback)
  nav.js          manifesto único → breadcrumb e anterior/próximo
  media/          SVGs gerados localmente (plates, gobo, 48 frames da vista explodida)
  media/_src/     gen_seq.py: gerador dos frames (python3 _src/gen_seq.py dentro de media/)
gatilhos/  scroll/  palco/  tipo/  pele/  timing/    uma pasta por técnica
```

## Regras que toda página segue

- **Estado final é o default.** Gate `.motion` no `<head>`; todo estado inicial escondido fica sob `.motion`.
- **GSAP só via `withGsap()`**: se o CDN cair, `.motion` sai e a página fica estática e completa.
- **Uma câmera por página, um palco + grain.**
- Só `transform`/`opacity`; scrub com `ease: "none"`; UI com `cubic-bezier(0.16, 1, 0.3, 1)`; stagger 40–80ms.
- Pele de ponteiro só com `(hover: hover) and (pointer: fine)`.
- Zero imagem externa: tudo em `_shared/media/`.

## Como testar os estados de fallback

- **Reduced motion:** ative `prefers-reduced-motion` no sistema ou no DevTools (Rendering → Emulate CSS media feature).
- **Queda do GSAP:** bloqueie `cdn.jsdelivr.net` no DevTools (Network → Block request domain).

Toda página precisa continuar legível e completa nos dois casos.

## Diferenças para o lab v1

- Paleta quente derivada do Oryzo.ai (`#100904` / `#ffedd7` / `#dc5000`), Clash Display + General Sans.
- 43 técnicas (v1: 34). Novas: Preloader, Chapter timeline, Image sequence, Nav adaptativa, Gobo, Cursor distortion (WebGL lite), Line mask reveal, Galeria arrastável, Lupa arrastável.
- Grupos em português: `gatilhos`, `palco`, `tipo`, `pele` (v1: `triggers`, `stage`, `type`, `skin`).
- Sem `picsum.photos`; sem `<script src>` direto de GSAP; gate `.motion` em vez de `Lab.reduce()`.
- `cam/` removido.
