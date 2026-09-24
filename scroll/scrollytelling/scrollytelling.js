
    withGsap(function (gsap) {
      var count = document.getElementById('count');
      var label = document.getElementById('beat-label');
      var beats = [].slice.call(document.querySelectorAll('[data-beat]'));
      var fmt = new Intl.NumberFormat('pt-BR');

      gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: '#hold', start: 'top top', end: '+=180%', pin: true, scrub: true,
          onUpdate: function (s) {
            var i = Math.min(beats.length - 1, Math.floor(s.progress * beats.length));
            count.textContent = fmt.format(Math.round(Motion.fit(s.progress, .1, .95, 0, 12000) / 10) * 10);
            label.textContent = 'ato ' + (i + 1) + ' de ' + beats.length;
            beats.forEach(function (el, j) { el.classList.toggle('is-on', j === i); });
          }
        }
      })
        .fromTo('#sun', { y: 330 }, { y: 0, duration: 1 }, 0)
        .fromTo('#night', { opacity: .7 }, { opacity: 0, duration: .6 }, 0)
        .fromTo('.bar', { scaleY: .12 }, { scaleY: 1, transformOrigin: '50% 100%', duration: .5, stagger: .12 }, .2);
    });
  