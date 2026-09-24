---
tipo: principio
tags: [principio, a11y]
---
# Reduced motion e progressive enhancement

## Regra
**O HTML sem JS e sem animação já é a página final.** Estados iniciais escondidos (`opacity:0`, `translateY`) só existem quando a camada de motion confirmou que vai rodar.

## Padrão de classe gate
```html
<script>
  // primeira linha do <head>, antes do CSS pintar
  (function(){
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) document.documentElement.classList.add('motion');
  })();
</script>
```
```css
/* estado inicial escondido SÓ com .motion */
.motion [data-reveal] { opacity: 0; transform: translateY(28px); }
.motion [data-reveal].in { opacity: 1; transform: none;
  transition: opacity .6s var(--ease-out), transform .6s var(--ease-out); }
```
Se a lib de animação falhar (CDN caiu), remover `.motion` → tudo aparece. Ver [[CDN com fallback]].

## Tabela de degradação (resumo do dicionário)
| Técnica | Reduced motion |
|---|---|
| Load / Kinetic / Reveal / Stagger | texto já montado no lugar |
| Pin / Scrub / Scrollytelling | sem pin, cena no **estado final** |
| Hijack / Dive / Stack | painéis empilhados no Y, fluxo normal |
| Parallax / Zoom | tudo parado na posição de leitura |
| Curtain | cortina ausente |
| Mesh / Leak / Particles / Blob | parado ou vazio; fundo sólido |
| Grain / Lens blur / Text mask | pode ficar (textura, não movimento) |
| Magnet / Tilt / Spotlight | desligado; hover só de cor |
| Scramble | texto final direto |
| Marquee | texto estático com quebra de linha |

## Acessibilidade mínima
- Um `<h1>` só. Texto dividido em `<span>` por letra leva `aria-label` com a palavra inteira no pai.
- Elementos decorativos (`canvas`, cortina, blobs): `aria-hidden="true"`, `pointer-events:none`.
- Toda interação por hover tem equivalente por `:focus-visible`.
- Touch: magnet/tilt/spotlight não rodam em `(hover: none)`.
