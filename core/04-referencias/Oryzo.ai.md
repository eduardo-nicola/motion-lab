---
tipo: referencia
url: https://oryzo.ai/
autor: Lusion (estúdio)
analisado-em: 2026-09-23
stack: [astro, threejs-r178-lusion, gaussian-splats, gsap-splittext, rive, msdf, smooth-scroll-proprio]
tags: [referencia]
---
# Oryzo.ai

## Ideia central
Peça de autopromoção do estúdio **Lusion**: "vende" um **porta-copos de cortiça** como se fosse um lançamento de IA ("Oryzo-1, open-weight"). Cada feature é uma piada visual interativa sobre marketing de IA (temperatura T, SOTA, benchmarks, BibTeX, wearable estilo AI pin). Twist final = CTA:
> "We caught your attention with a non-existent product. If we can sell a coaster, imagine what we can do for your brand."

**Mecânica transferível:** objeto banal + produção nível Apple + linguagem de um nicho satirizada + revelação no fim. Ver receita [[Produto como filme (Oryzo-lite)]].

## Seções em ordem de scroll (~50.700px de página, viewport 821px)
| # | Seção | Altura | Câmera | Técnica | Nota no vault |
|---|---|---|---|---|---|
| 1 | hero | 1 vh | 3D fixo | coaster 3D sobre mesa, vídeo PLAY | [[Image sequence]] (lite) |
| 2 | ai "Powered by AI" | ~8 vh, pinned | Z/orbita | mão 3D de 6 dedos reage ao hover | [[Chapter timeline]] |
| 3 | wearable | ~13 vh | Y | HUD ciano, galeria arrastável, layout revista | [[Galeria arrastável]] |
| 4 | features | ~10 vh | 3D mesa | lift · câmera térmica com slider T · curva de circularidade | [[Chapter timeline]] |
| 5 | encryption | 4 vh | objeto | flip do coaster com input de texto | [[Click]] + `rotateY` |
| 6 | grip | 4 vh | macro | lupa arrastável, microscopia (tardígrado) | [[Lupa arrastável]] |
| 7 | sustainability | 5 vh | — | **única seção clara**, palavra 3D gigante, sombra de planta | [[Gobo]] · [[Nav adaptativa]] |
| 8 | testimonies | 2 vh | Y | reviews satíricas em mono | [[Reveal stagger]] |
| 9 | social-content | 9 vh | Y | coaster "on the edge" da seção, bokeh | [[Lens blur]] |
| 10 | product | 3 vh | stack | tiers = pilha de 1/2/3 coasters | [[Sticky stack]] (lite) |
| 11 | open-weight | 1 vh | — | paper falso (serif + mono), download .OBJ | tipografia |
| 12 | footer | — | 3D | grãos de café instanciados, newsletter | [[Particles]] (lite) |

## Stack detectada (evidência)
- **Astro** SSG, bundle único `/_astro/hoisted.*.js` (1,1 MB) + ~250 requests.
- **three.js r178 "modified by Lusion"** com cenas por seção (`HeroScene`, `HandScene`, `TableScene`…), `PostEffect`, FBO helpers.
- **Gaussian splatting** próprio (`.sog`, sort em Worker + WASM).
- Animações de câmera/objeto **baked** em `.buf` por frame (exportadas de DCC) — frame = f(scroll).
- **GSAP SplitText 3.14** com `mask: lines|words|chars`. **Sem ScrollTrigger, sem Lenis**: loop próprio + smooth scroll próprio (`targetScrollPixel`, wheel normalizado).
- **Rive** (contadores/ilustrações), texto **MSDF** no WebGL, Vimeo no hero.
- Fontes: Halyard Display/Text Variable (Typekit), Literata, DM Mono.

## Sistema visual
- **Paleta quente escura:** `#100904` preto · `#382416` marrom · `#6c5f51` grey-brown · `#dc5000` laranja (acento + glow) · `#ffedd7` creme (nunca branco puro) · `#445231`/`#5d6c49` verdes · `#f6e0c6` creme claro.
- **Tipografia:** display geométrica enorme + labels caixa-alta pequenos; serif para "paper"; mono para specs e `[ 4.9/5 ]`.
- **Escala fluida** por `--screen-unit` → [[Escala fluida (screen-unit)]].
- Grid 16 col desktop / 4–6 mobile, breakpoint único 767.98px, divisores tracejados, cards translúcidos com blur, pills radius 3em.
- Grain vem do pós-processamento, não de overlay CSS.

## Técnicas → tier de reprodução
| Técnica Oryzo                                               | Padrão do vault (css/vanilla/gsap) | Nota                               |
| ----------------------------------------------------------- | ---------------------------------- | ---------------------------------- |
| Timeline por capítulos (`fit(p,a,b)`)                       | ✅                                  | [[Chapter timeline]]               |
| Câmera 3D baked por scroll                                  | ✅ via sequência de frames          | [[Image sequence]]                 |
| SplitText mascarado                                         | ✅ vanilla                          | [[Line mask reveal]]               |
| Nav com cor por seção                                       | ✅                                  | [[Nav adaptativa]]                 |
| Galeria arrastável                                          | ✅                                  | [[Galeria arrastável]]             |
| Lupa microscópica                                           | ✅                                  | [[Lupa arrastável]]                |
| Sombra de planta (gobo)                                     | ✅ PNG + blend                      | [[Gobo]]                           |
| Preloader                                                   | ✅                                  | [[Preloader]]                      |
| Flip com mensagem                                           | ✅ `rotateY` + backface             | [[Click]]                          |
| Slider térmico                                              | ✅ lite: foto + `filter`/LUT em CSS | [[Chapter timeline]]               |
| Cursor paint distortion + RGB shift                         | ⚠️ WebGL lite (1 fragment shader)  | [[Cursor distortion (WebGL lite)]] |
| Gaussian splats, bloom, DOF, motion blur, mão skinned, MSDF | ❌ WebGL completo, fora do padrão   | —                                  |

## Lições para o vault
1. **Um canvas fixo, DOM rola por cima** — a página é um filme com legendas. No padrão do vault: canvas 2D de [[Image sequence]] fixo + seções DOM.
2. **Capítulos longos** (até 13 vh) com remap por trecho → [[Chapter timeline]]. Confirma [[Pin]] + [[Scrub none]].
3. **Uma seção clara** quebra o ritmo escuro no ponto de virada (sustentabilidade) → contraste como pontuação.
4. **Humor + interação = memória.** Cada feature tem um brinquedo (hover na mão, slider, lupa, input de flip).
5. **Falha de a11y:** zero `prefers-reduced-motion`, 1,1 MB de JS. **Não copiar** — o vault exige [[Reduced motion e progressive enhancement]] e [[Performance de motion]].
