/* MOTION lab helpers. Direct DOM, no React state. */
(function (w) {
  w.Lab = w.Lab || {};

  Lab.reduce = function () {
    return w.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  Lab.magnetic = function (el, strength) {
    if (!el) return;
    strength = strength == null ? 0.28 : strength;
    if (Lab.reduce()) return;
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      var x = (e.clientX - (r.left + r.width / 2)) * strength;
      var y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = "translate(" + x + "px," + y + "px)";
    });
    el.addEventListener("pointerenter", function () {
      el.style.transition = "transform 80ms linear";
    });
    el.addEventListener("pointerleave", function () {
      el.style.transition = "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.transform = "translate(0,0)";
    });
  };

  Lab.tilt = function (el, max) {
    if (!el) return;
    max = max == null ? 10 : max;
    if (Lab.reduce()) return;
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform =
        "rotateY(" + px * max * 2 + "deg) rotateX(" + -py * max * 2 + "deg)";
    });
    el.addEventListener("pointerleave", function () {
      el.style.transition = "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.transform = "rotateY(0) rotateX(0)";
    });
    el.addEventListener("pointerenter", function () {
      el.style.transition = "transform 80ms linear";
    });
  };

  Lab.scramble = function (el, text, duration) {
    if (!el) return;
    var glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    duration = duration == null ? 700 : duration;
    if (Lab.reduce()) {
      el.textContent = text;
      return;
    }
    var t0 = performance.now();
    function tick(now) {
      var p = Math.min(1, (now - t0) / duration);
      var out = "";
      for (var i = 0; i < text.length; i++) {
        if (text[i] === " ") out += " ";
        else if (p > i / text.length) out += text[i];
        else out += glyphs[(Math.random() * glyphs.length) | 0];
      }
      el.textContent = out;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

  Lab.spring = function (get, set, target, opts) {
    opts = opts || {};
    var k = opts.stiffness == null ? 100 : opts.stiffness;
    var d = opts.damping == null ? 20 : opts.damping;
    var mass = opts.mass == null ? 1 : opts.mass;
    var v = 0;
    var last = performance.now();
    var running = true;
    function step(now) {
      if (!running) return;
      var dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      var x = get();
      var a = (-k * (x - target) - d * v) / mass;
      v += a * dt;
      x += v * dt;
      set(x);
      if (Math.abs(v) > 0.02 || Math.abs(x - target) > 0.04) {
        requestAnimationFrame(step);
      } else {
        set(target);
      }
    }
    requestAnimationFrame(step);
    return function stop() {
      running = false;
    };
  };
})(window);
