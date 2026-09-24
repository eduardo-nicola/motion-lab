---
tipo: kit
tags: [kit]
---
# Esqueleto de página

Estrutura base + camada de motion. Preencher com [[Tokens base]], técnicas do dicionário e [[motion-kit.js]].

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{PAGE_TITLE}}</title>
  <script>
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.classList.add('motion');
  </script>
  <style>
    /* 1. tokens (Tokens base, valores da referência) */
    /* 2. base + tipografia */
    /* 3. seções (mobile-first) */
    /* 4. técnicas: estados iniciais SEMPRE sob .motion */
    /* 5. @media (min-width: 768px) — câmeras X/Z, grids */
    /* 6. @media (prefers-reduced-motion: reduce) — redundância de segurança */
  </style>
</head>
<body>
  <header class="hero" id="hero">
    <h1 data-kinetic>{{HEADLINE}}</h1>
    <p class="sub">{{SUBHEADLINE}}</p>
    <a class="btn" id="cta" href="#cta-final">{{CTA descritivo}}</a>
    <!-- imagem do hero, sem lazy (acima da dobra) -->
  </header>

  <section class="features" id="features"> <!-- câmera dominante aqui --> </section>
  <section class="proof" id="proof"> <!-- scrub de número / marquee de logos --> </section>

  <section class="cta-final" id="cta-final">
    <form action="{{ENDPOINT}}" method="post">
      <!-- campos … -->
    <button type="submit">{{Texto do CTA}}</button>
    </form>
  </section>

  <footer>© {{ANO}} {{MARCA}} · <a href="{{url}}">Política de privacidade</a></footer>

  <!-- 1. motion-kit.js -->
  <!-- 2. scripts das técnicas -->
  <script>
    Motion.splitChars(document.querySelector('[data-kinetic]'), 45);
    Motion.reveal('[data-reveal]');
    Motion.magnetic(document.getElementById('cta'), .3);
    withGsap(function (gsap, ST) { /* câmera */ });
  </script>
  <!-- 3. terceiros / analytics (último) -->
</body>
</html>
```
Ver [[Ordem de scripts]] e [[Checklist de entrega]].
