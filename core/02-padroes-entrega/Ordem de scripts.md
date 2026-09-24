---
tipo: padrao
tags: [padrao]
---
# Ordem de scripts

1. `<head>`: gate `.motion` (inline, antes do CSS pintar) → [[Reduced motion e progressive enhancement]]
2. Fim do `<body>`: [[motion-kit.js]]
3. Scripts das técnicas da página (`withGsap(...)`, `Motion.*`)
4. Scripts de terceiros (analytics etc.) por último

Não disparar eventos de analytics a cada `onUpdate` de scroll.
