
    (function () {
      if (!('IntersectionObserver' in window)) return;
      var root = document.documentElement;
      var nav = document.querySelector('.nav');
      var state = document.getElementById('nav-state');
      var sections = [].slice.call(document.querySelectorAll('[data-theme]'));
      var io;
      function apply(theme) {
        if (root.dataset.nav === theme) return;
        root.dataset.nav = theme;
        state.textContent = theme === 'light' ? 'palco claro' : 'palco escuro';
      }
      function watch() {
        if (io) io.disconnect();
        var r = nav.getBoundingClientRect();
        var line = Math.round(r.top + r.height / 2);             // linha no meio da faixa do header
        io = new IntersectionObserver(function (es) {
          es.forEach(function (e) { if (e.isIntersecting) apply(e.target.dataset.theme); });
        }, { rootMargin: '-' + line + 'px 0px -' + (innerHeight - line - 1) + 'px 0px' });
        sections.forEach(function (s) { io.observe(s); });
      }
      watch();
      var t;
      addEventListener('resize', function () { clearTimeout(t); t = setTimeout(watch, 150); });
    })();
  