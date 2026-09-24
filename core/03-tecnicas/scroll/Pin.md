---
tipo: tecnica
grupo: scroll
gatilho: scroll
eixo: y
deps: gsap
custo: medio
mobile: ok
reduced-motion: sem-pin
secao: [features]
combina: ["[[Scrub]]", "[[Reveal stagger]]"]
conflita: ["[[Horizontal hijack]]", "[[Z-axis dive]]"]
fonte: exemples/scroll/pin/
tags: [tecnica/scroll]
---
# Pin

> **Fórmula:** Quando **o bloco atinge o topo**, ele faz **pin** e o miolo reage ao progresso, porque a câmera precisa parar para o olho crer no capítulo.

## Ideia central
Viewport segura o bloco; a história acontece dentro (barra de progresso, label que troca: "preso no topo" → "ainda preso" → "soltando").

**Pin vs stack vs scrub:** pin = um quadro fixo enquanto o texto é lido · [[Sticky stack]] = cartas se substituindo · [[Scrub]] = câmera amarrada ao dedo o tempo todo.

## Usar
Um take que precisa de tempo de leitura: decisão, virada, número-chave, "como funciona" em 3 passos.

## Não usar
Texto genérico de artigo. Empilhado com hijack/dive. Mais de 3 por página.

## Implementação (produção)
```js
withGsap(function (gsap, ST) {
  var labels = ['passo 1', 'passo 2', 'passo 3'];
  ST.create({ trigger: '#pin', start: 'top top', end: '+=140%', pin: true,
    onUpdate: function (s) {
      fill.style.transform = 'scaleX(' + s.progress + ')';
      label.textContent = labels[Math.min(2, Math.floor(s.progress * 3))];
    } });
});
```
**Sem CDN:** wrapper com `height: 240vh` + filho `position: sticky; top: 0; height: 100dvh`; progresso via `animation-timeline: view()` ou IO por passo.

## Reduced motion
Sem pin; os 3 passos em fluxo normal.
