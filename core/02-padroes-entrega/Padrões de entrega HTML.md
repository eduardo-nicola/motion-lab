---
tipo: padrao
tags: [padrao]
---
# Padrões de entrega HTML

Regras próprias do vault para toda landing gerada. **O padrão vence o gosto:** se uma técnica exige quebrar uma regra, a técnica sai ou vira tier opcional.

| Regra | Consequência para motion |
|---|---|
| Página entregável como HTML autocontido (CSS no `<style>`, JS no fim do body) | Cada técnica traz seu CSS/JS inline. Helpers comuns em [[motion-kit.js]]. |
| Lib externa só com fallback | GSAP via loader → [[CDN com fallback]]. Preferir `css`/`vanilla`. |
| Tokens em `:root` | Tokens de marca + tokens de motion → [[Tokens base]]. |
| Mobile-first, breakpoint `@media (min-width: 768px)` | Câmeras X/Z e pins pesados **ligam** no breakpoint. |
| `box-sizing: border-box` global | Sempre no topo. |
| Base 16px, line-height 1.5 | Display pode `.85–.95`; corpo nunca. |
| Imagem real, otimizada, com `alt` | Ver [[Mídia e imagens]]. Nada de placeholder em produção. |
| Um `<h1>`; botões com `type`; links descritivos | Kinetic/scramble no h1 → `aria-label` com texto inteiro. |
| Estado final sem JS | Gate `.motion` → [[Reduced motion e progressive enhancement]]. |
| Ordem de seções narrativa | hero → câmera principal → prova → cta-final → footer; ver [[05-receitas/Receitas|Receitas]]. |
