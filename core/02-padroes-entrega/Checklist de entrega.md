---
tipo: padrao
tags: [padrao, checklist]
---
# Checklist de entrega

## HTML
- [ ] `<!DOCTYPE html>`, `lang="pt-BR"`, `<meta charset>`, `<meta viewport>`
- [ ] Tokens em `:root`; `box-sizing` global; mobile-first `min-width: 768px`
- [ ] Nenhuma URL placeholder (`picsum`, `placeholder`)
- [ ] Imagens com `alt`; `loading="lazy"` abaixo da dobra
- [ ] Um `<h1>`; botões com `type`; links descritivos

## Motion
- [ ] Gate `.motion` no `<head>`; sem `.motion` a página está completa
- [ ] Toda lib externa passa por [[CDN com fallback]]
- [ ] Uma câmera dominante; ≤ 3 pins; ≤ 1 marquee; ≤ 1 sistema de palco
- [ ] Scrubs com `ease: "none"`; UI com `--ease-out`; stagger 40–80ms
- [ ] Nenhum form/pricing dentro de hijack/dive/stack/pin ([[Formulário e motion]])
- [ ] Pointer skins desligadas em `(hover: none)` e reduced motion
- [ ] Loops rAF pausam fora da viewport
- [ ] Letras divididas com `aria-label` no pai; decorativos com `aria-hidden`
- [ ] Sem scroll horizontal acidental em 375px
