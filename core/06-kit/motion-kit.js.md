---
tipo: kit
tags: [kit]
---
# motion-kit.js

Runtime inline (≈3KB) para colar no fim do `<body>`, antes dos scripts das técnicas. Derivado de `exemples/_shared/lab.js` + loader de [[CDN com fallback]]. Sem dependências.

Requer o gate no `<head>` (ver [[Reduced motion e progressive enhancement]]).

```html
<script>
(function (w, d) {
  var html = d.documentElement;
  var M = w.Motion = {};
  M.on = function () { return html.classList.contains('motion'); };
  M.fine = function () { return w.matchMedia('(hover: hover) and (pointer: fine)').matches; };

  /* Reveal uma vez, com stagger */
  M.reveal = function (sel, o) {
    o = o || {}; var els = [].slice.call(d.querySelectorAll(sel));
    if (!M.on() || !('IntersectionObserver' in w)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        if (!x.isIntersecting) return;
        var i = els.indexOf(x.target) % 8;
        setTimeout(function () { x.target.classList.add('in'); }, i * (o.stagger || 70));
        io.unobserve(x.target);
      });
    }, { threshold: o.threshold || .35 });
    els.forEach(function (e) { io.observe(e); });
  };

  /* Divide texto em letras com aria-label */
  M.splitChars = function (el, step) {
    if (!el) return; var t = el.textContent.trim();
    el.setAttribute('aria-label', t); el.textContent = '';
    var i = 0;
    t.split(/\s+/).forEach(function (word, wi) {
      if (wi) el.appendChild(d.createTextNode(' '));
      var ws = d.createElement('span'); ws.setAttribute('aria-hidden', 'true');
      ws.style.cssText = 'display:inline-block;white-space:nowrap';   // palavra não quebra no meio
      word.split('').forEach(function (ch) {
        var s = d.createElement('span'); s.textContent = ch; s.style.setProperty('--d', i++ * (step || 50) + 'ms');
        ws.appendChild(s);
      });
      el.appendChild(ws);
    });
  };

  /* Magnet */
  M.magnetic = function (el, k, area) {   // area: elemento maior que captura a aproximação (default: o próprio el)
    if (!el || !M.on() || !M.fine()) return; k = k == null ? .28 : k;
    area = area || el;
    area.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * k + 'px,' + (e.clientY - r.top - r.height / 2) * k + 'px)';
    });
    area.addEventListener('pointerenter', function () { el.style.transition = 'transform 80ms linear'; });
    area.addEventListener('pointerleave', function () { el.style.transition = 'transform .5s var(--ease-out)'; el.style.transform = ''; });
  };

  /* Tilt */
  M.tilt = function (el, max) {
    if (!el || !M.on() || !M.fine()) return; max = max == null ? 10 : max;
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      el.style.transform = 'rotateY(' + px * max * 2 + 'deg) rotateX(' + -py * max * 2 + 'deg)';
    });
    el.addEventListener('pointerenter', function () { el.style.transition = 'transform 80ms linear'; });
    el.addEventListener('pointerleave', function () { el.style.transition = 'transform .5s var(--ease-out)'; el.style.transform = ''; });
  };

  /* Scramble */
  M.scramble = function (el, text, dur) {
    if (!el) return; var G = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; dur = dur || 700;
    el.setAttribute('aria-label', text);
    if (!M.on()) { el.textContent = text; return; }
    var t0 = performance.now();
    (function tick(now) {
      var p = Math.min(1, (now - t0) / dur), out = '';
      for (var i = 0; i < text.length; i++) out += text[i] === ' ' ? ' ' : p > i / text.length ? text[i] : G[(Math.random() * G.length) | 0];
      el.textContent = out; if (p < 1) requestAnimationFrame(tick);
    })(t0);
  };

  /* Spring (k 100, d 20, m 1 = amortecimento crítico: sem overshoot. Oscilação leve: damping 12). o.rest = limiar de parada (px por padrão) */
  M.spring = function (get, set, target, o) {
    o = o || {}; var k = o.stiffness || 100, c = o.damping || 20, m = o.mass || 1, v = 0, last = performance.now(), run = true;
    (function step(now) {
      if (!run) return; var dt = Math.min(.032, (now - last) / 1000); last = now;
      var x = get(), a = (-k * (x - target) - c * v) / m; v += a * dt; x += v * dt; set(x);
      var rest = o.rest || .04;
      if (Math.abs(v) > rest / 2 || Math.abs(x - target) > rest) requestAnimationFrame(step); else set(target);
    })(last);
    return function () { run = false; };
  };

  /* Loop rAF que pausa fora da viewport / aba oculta */
  M.loop = function (el, frame) {
    var vis = true, id;
    if ('IntersectionObserver' in w) new IntersectionObserver(function (e) { vis = e[0].isIntersecting; }).observe(el);
    (function tick(t) { if (vis && !d.hidden) frame(t); id = requestAnimationFrame(tick); })();
    return function () { cancelAnimationFrame(id); };
  };

  /* Particles */
  M.particles = function (c, o) {
    if (!c) return; o = o || {}; var g = c.getContext('2d'), dpr = Math.min(2, w.devicePixelRatio || 1);
    function size() { c.width = c.clientWidth * dpr; c.height = c.clientHeight * dpr; }
    size(); w.addEventListener('resize', size);
    if (!M.on()) return;
    var dots = []; for (var i = 0; i < (o.count || 60); i++) dots.push({ x: Math.random(), y: Math.random(), r: (.8 + Math.random() * 1.6) * dpr, v: .00015 + Math.random() * .00025 });
    M.loop(c, function () {
      g.clearRect(0, 0, c.width, c.height); g.fillStyle = o.color || 'rgba(226,61,40,.55)';
      dots.forEach(function (p) { p.y -= p.v; if (p.y < 0) p.y = 1; g.beginPath(); g.arc(p.x * c.width, p.y * c.height, p.r, 0, 6.2832); g.fill(); });
    });
  };

  /* GSAP com fallback (ver [[CDN com fallback]]) */
  w.withGsap = function (run) {
    if (!M.on()) return;
    function load(src) { return new Promise(function (ok, no) { var s = d.createElement('script'); s.src = src; s.async = false; s.onload = ok; s.onerror = no; d.head.appendChild(s); }); }
    var b = 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/';
    var ready = w.gsap && w.ScrollTrigger ? Promise.resolve() : load(b + 'gsap.min.js').then(function () { return load(b + 'ScrollTrigger.min.js'); });
    Promise.race([ready, new Promise(function (_, no) { setTimeout(no, 4000); })])
      .then(function () { gsap.registerPlugin(ScrollTrigger); run(gsap, ScrollTrigger); })
      .catch(function () { html.classList.remove('motion'); html.classList.add('motion-fallback'); });
  };
})(window, document);
</script>
```

> Nota: `withGsap` removendo `.motion` no fallback revela **todos** os estados escondidos, inclusive reveals vanilla — comportamento desejado (página estática completa).
