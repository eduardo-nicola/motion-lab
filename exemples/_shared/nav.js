/* MOTION lab — manifesto único + chrome.
   Injeta: breadcrumb (topo esq.) e anterior/próximo (topo dir.). */
(function (w, d) {
  var GROUPS = [
    { slug: 'gatilhos', label: 'Gatilhos', lead: 'Quando o movimento dispara. Não o quê.', items: [
      { slug: 'load', title: 'Load', desc: 'Coreografia de abertura. Hierarquia no primeiro frame.' },
      { slug: 'hover', title: 'Hover', desc: 'Cursor como gatilho. CSS puro: escala, underline, nudge.' },
      { slug: 'click', title: 'Click', desc: 'Clique vira estado. Morph de origem para destino.' },
      { slug: 'preloader', title: 'Preloader', desc: 'Só com asset pesado. Contagem, saída, teto de 3.5s.' }
    ] },
    { slug: 'scroll', label: 'Scroll / câmera', lead: 'Uma ideia de câmera por página. Não empilhar hijack, dive e stack.', items: [
      { slug: 'reveal-stagger', title: 'Reveal stagger', desc: 'Itens nascem ao entrar. Uma vez.' },
      { slug: 'pin', title: 'Pin', desc: 'A seção cola; o miolo vive.' },
      { slug: 'scrub', title: 'Scrub', desc: 'Playhead = scrollbar. Ease none.' },
      { slug: 'parallax', title: 'Parallax', desc: 'Planos a velocidades diferentes.', bleed: true },
      { slug: 'zoom-parallax', title: 'Zoom parallax', desc: 'Dolly falso na foto.', bleed: true },
      { slug: 'sticky-stack', title: 'Sticky stack', desc: 'Carta cobre carta, a de baixo recua.', bleed: true },
      { slug: 'horizontal-hijack', title: 'Horizontal hijack', desc: 'Scroll Y vira trilho X.', bleed: true },
      { slug: 'split-screen', title: 'Split screen', desc: 'Dois meios, dois tempos, um scroll.', bleed: true },
      { slug: 'curtain-reveal', title: 'Curtain reveal', desc: 'A cortina abre o assunto.', bleed: true },
      { slug: 'z-axis-dive', title: 'Z-axis dive', desc: 'Dolly no Z. Túnel de planos.', bleed: true },
      { slug: 'scrollytelling', title: 'Scrollytelling', desc: 'Progresso 0–1 dirige uma cena.', bleed: true },
      { slug: 'chapter-timeline', title: 'Chapter timeline', desc: 'Seção longa em atos (fit por trecho).', bleed: true },
      { slug: 'image-sequence', title: 'Image sequence', desc: 'Câmera gravada antes; o scroll escolhe o frame.', bleed: true },
      { slug: 'nav-adaptativa', title: 'Nav adaptativa', desc: 'O header troca de cor com o palco.', bleed: true }
    ] },
    { slug: 'palco', label: 'Palco / fundo', lead: 'Um sistema de fundo + grain. Nunca blob, particles e mesh juntos.', items: [
      { slug: 'grain', title: 'Grain', desc: 'Película fixa, pointer-events none.' },
      { slug: 'mesh-gradient', title: 'Mesh gradient', desc: 'Duas manchas, clima sem circo.' },
      { slug: 'noise-displacement', title: 'Noise displacement', desc: 'A palavra treme no ruído SVG.' },
      { slug: 'particles', title: 'Particles', desc: 'Poeira. Poucos pontos, pausa fora da tela.' },
      { slug: 'blob-aproximado', title: 'Blob aproximado', desc: 'Canvas 2D honesto, sem fingir WebGL.' },
      { slug: 'lens-blur', title: 'Lens blur', desc: 'Fundo fora de foco, frente nítida.' },
      { slug: 'light-leak', title: 'Light leak', desc: 'Faixa de luz analógica em screen.' },
      { slug: 'gobo', title: 'Gobo', desc: 'Sombra de folhagem projetada.' },
      { slug: 'cursor-distortion', title: 'Cursor distortion', desc: 'WebGL lite: UV + RGB shift. Fallback img.' }
    ] },
    { slug: 'tipo', label: 'Tipo / texto', lead: 'O tipo como objeto, não como parágrafo. Marquee: no máximo uma.', items: [
      { slug: 'kinetic-type', title: 'Kinetic type', desc: 'Letra entra, pesa, para.' },
      { slug: 'line-mask-reveal', title: 'Line mask reveal', desc: 'Linha sobe de trás da régua.' },
      { slug: 'text-mask', title: 'Text mask', desc: 'A palavra é a janela da imagem.' },
      { slug: 'scramble', title: 'Scramble', desc: 'Cifrado → lido.' },
      { slug: 'marquee', title: 'Marquee', desc: 'Uma faixa. Só uma.' }
    ] },
    { slug: 'pele', label: 'Pele / ponteiro', lead: 'Superfície que responde ao cursor. Desliga no toque.', items: [
      { slug: 'magnetic-button', title: 'Magnetic button', desc: 'O CTA puxa.' },
      { slug: 'tilt-card', title: 'Tilt card', desc: 'O plano segue a mão.' },
      { slug: 'spotlight-border', title: 'Spotlight border', desc: 'Luz local no cursor.' },
      { slug: 'page-transition', title: 'Page transition', desc: 'Wipe entre estados.' },
      { slug: 'galeria-arrastavel', title: 'Galeria arrastável', desc: 'Puxa quem quer. Não sequestra o scroll.' },
      { slug: 'lupa-arrastavel', title: 'Lupa arrastável', desc: 'O detalhe como prova.' }
    ] },
    { slug: 'timing', label: 'Timing / 5 palavras', lead: 'Certo ao lado do errado. O olho aprende a diferença.', items: [
      { slug: 'ease-out', title: 'Ease out', desc: 'cubic-bezier(0.16, 1, 0.3, 1) × linear.' },
      { slug: 'spring', title: 'Spring', desc: 'k 100 / d 20 × bounce de template.' },
      { slug: 'scrub-none', title: 'Scrub none', desc: 'Ease none × bounce no scrub.' },
      { slug: 'stagger', title: 'Stagger', desc: '60ms × parede × lama.' },
      { slug: 'duration', title: 'Duration', desc: '0.5s de UI × 2s de drama.' }
    ] }
  ];

  var FLAT = [];
  GROUPS.forEach(function (g) {
    g.items.forEach(function (it) {
      FLAT.push({ href: '/' + g.slug + '/' + it.slug + '/', title: it.title, group: g, bleed: !!it.bleed });
    });
  });

  w.LAB_GROUPS = GROUPS;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function mount() {
    var path = w.location.pathname.replace(/index\.html$/, '');
    if (path.slice(-1) !== '/') path += '/';
    var idx = -1;
    FLAT.forEach(function (it, i) { if (it.href === path) idx = i; });
    var cur = idx > -1 ? FLAT[idx] : null;
    var isRoot = path === '/';
    var prev = idx > 0 ? FLAT[idx - 1] : null;
    var next = idx > -1 && idx < FLAT.length - 1 ? FLAT[idx + 1] : isRoot ? FLAT[0] : null;

    var crumb = '';
    if (cur) {
      var menu = cur.group.items.map(function (it) {
        var href = '/' + cur.group.slug + '/' + it.slug + '/';
        return '<a role="menuitem" href="' + href + '"' + (href === cur.href ? ' class="is-active" aria-current="page"' : '') + '>' + esc(it.title) + '</a>';
      }).join('');
      crumb =
        '<nav class="lab-crumb" aria-label="Caminho do lab">' +
        '<a class="root" href="/">MOTION lab</a><span class="sep">/</span>' +
        '<a href="/#' + cur.group.slug + '">' + esc(cur.group.label) + '</a><span class="sep">/</span>' +
        '<div class="lab-drop"><button type="button" class="cur" aria-haspopup="true" aria-expanded="false">' + esc(cur.title) + ' ▾</button>' +
        '<div class="lab-menu" role="menu">' + menu + '</div></div></nav>';
    }

    var rail = '<div class="lab-rail">' +
      (prev ? '<a href="' + prev.href + '" rel="prev" aria-label="Anterior: ' + esc(prev.title) + '">← <span class="t">anterior</span></a>' : '<span class="off">← <span class="t">anterior</span></span>') +
      (next ? '<a href="' + next.href + '" rel="next" aria-label="Próximo: ' + esc(next.title) + '"><span class="t">próximo</span> →</a>' : '<span class="off"><span class="t">próximo</span> →</span>') +
      '</div>';

    var wrap = d.createElement('div');
    wrap.className = 'lab-nav';
    wrap.innerHTML = crumb + rail;
    d.body.insertBefore(wrap, d.body.firstChild);
    if (!cur || !cur.bleed) d.body.classList.add('lab-push');

    var drop = wrap.querySelector('.lab-drop');
    if (drop) {
      var btn = drop.querySelector('button');
      var m = drop.querySelector('.lab-menu');
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = !drop.classList.contains('is-open');
        drop.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
        if (open) { var r = btn.getBoundingClientRect(); m.style.left = Math.max(8, r.left) + 'px'; }
      });
      d.addEventListener('click', function () { drop.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); });
      d.addEventListener('keydown', function (e) { if (e.key === 'Escape') { drop.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); } });
    }

  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', mount); else mount();
})(window, document);
