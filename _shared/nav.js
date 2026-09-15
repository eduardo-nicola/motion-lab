/* MOTION lab shared navigation.
   One manifest. Top-left breadcrumb ("MOTION lab / dicionarios / {atual}"),
   each segment opens a small dropdown instead of a full list sitting in the lateral.
   Top-right stays anterior/proximo. Cam is intentionally absent here. */
(function (w, d) {
  w.Lab = w.Lab || {};

  var GROUPS = [
    {
      slug: "triggers",
      label: "Gatilhos",
      items: [
        { slug: "load", title: "Load" },
        { slug: "hover", title: "Hover" },
        { slug: "click", title: "Click" }
      ]
    },
    {
      slug: "scroll",
      label: "Scroll / camera",
      items: [
        { slug: "reveal-stagger", title: "Reveal stagger" },
        { slug: "pin", title: "Pin" },
        { slug: "scrub", title: "Scrub" },
        { slug: "parallax", title: "Parallax" },
        { slug: "zoom-parallax", title: "Zoom parallax", fullBleed: true },
        { slug: "sticky-stack", title: "Sticky stack", fullBleed: true },
        { slug: "horizontal-hijack", title: "Horizontal hijack", fullBleed: true },
        { slug: "split-screen", title: "Split screen" },
        { slug: "curtain-reveal", title: "Curtain reveal" },
        { slug: "z-axis-dive", title: "Z-axis dive", fullBleed: true },
        { slug: "scrollytelling", title: "Scrollytelling", fullBleed: true }
      ]
    },
    {
      slug: "stage",
      label: "Fundo / palco",
      items: [
        { slug: "grain", title: "Grain" },
        { slug: "mesh-gradient", title: "Mesh gradient" },
        { slug: "noise-displacement", title: "Noise displacement" },
        { slug: "particles", title: "Particles" },
        { slug: "webgl-blob", title: "Blob aprox." },
        { slug: "lens-blur", title: "Lens blur" },
        { slug: "light-leak", title: "Light leak" }
      ]
    },
    {
      slug: "type",
      label: "Tipo / texto",
      items: [
        { slug: "kinetic-type", title: "Kinetic type" },
        { slug: "text-mask", title: "Text mask" },
        { slug: "scramble", title: "Scramble" },
        { slug: "marquee", title: "Marquee" }
      ]
    },
    {
      slug: "skin",
      label: "Pele / ponteiro",
      items: [
        { slug: "magnetic-button", title: "Magnetic button" },
        { slug: "tilt-card", title: "Tilt card" },
        { slug: "spotlight-border", title: "Spotlight border" },
        { slug: "page-transition", title: "Page transition" }
      ]
    },
    {
      slug: "timing",
      label: "Timing / 5 palavras",
      items: [
        { slug: "ease-out", title: "Ease out" },
        { slug: "spring", title: "Spring" },
        { slug: "scrub-none", title: "Scrub none" },
        { slug: "stagger", title: "Stagger" },
        { slug: "duration", title: "Duration" }
      ]
    }
  ];

  var FLAT = [];
  GROUPS.forEach(function (g) {
    g.items.forEach(function (it) {
      FLAT.push({
        href: "/" + g.slug + "/" + (it.slug ? it.slug + "/" : ""),
        title: it.title,
        groupSlug: g.slug,
        groupLabel: g.label,
        fullBleed: !!it.fullBleed
      });
    });
  });

  function normalize(path) {
    path = path.replace(/index\.html$/, "");
    if (path.length > 1 && path.slice(-1) !== "/") path += "/";
    return path;
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  }

  function closeAllDrops(root) {
    root.querySelectorAll(".lab-crumb-drop.is-open").forEach(function (drop) {
      drop.classList.remove("is-open");
      var btn = drop.querySelector(".lab-crumb-toggle");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }

  Lab.mountNav = function () {
    var path = normalize(w.location.pathname);
    var idx = -1;
    FLAT.forEach(function (it, i) {
      if (it.href === path) idx = i;
    });
    var current = idx > -1 ? FLAT[idx] : null;
    var isRoot = !current && (path === "/" || path === "");
    var currentGroup = current
      ? GROUPS.filter(function (g) { return g.slug === current.groupSlug; })[0]
      : null;

    var prev = idx > 0 ? FLAT[idx - 1] : null;
    var next = idx > -1 && idx < FLAT.length - 1 ? FLAT[idx + 1] : isRoot ? FLAT[0] : null;

    /* breadcrumb: MOTION lab / {topico} / {item}
       topico → /#{slug} on home (anchor to dictionary section).
       item → dropdown of siblings in the same topic.
       Home keeps its own index — no crumb there. */
    var crumb = "";
    if (!isRoot && current && currentGroup) {
      var itemsMenu = currentGroup.items
        .map(function (it) {
          var href =
            "/" + currentGroup.slug + "/" + (it.slug ? it.slug + "/" : "");
          var active = current.href === href;
          return (
            '<a role="menuitem" class="lab-crumb-item' +
            (active ? " is-active" : "") +
            '" href="' +
            href +
            '">' +
            esc(it.title) +
            "</a>"
          );
        })
        .join("");

      crumb =
        '<a class="lab-crumb-seg lab-crumb-root" href="/">MOTION lab</a>' +
        '<span class="lab-crumb-sep">/</span>' +
        '<a class="lab-crumb-seg lab-crumb-topic" href="/#' +
        esc(currentGroup.slug) +
        '">' +
        esc(currentGroup.label) +
        "</a>" +
        '<span class="lab-crumb-sep">/</span>' +
        '<div class="lab-crumb-drop" data-drop="items">' +
        '<button type="button" class="lab-crumb-seg lab-crumb-toggle is-current" aria-haspopup="true" aria-expanded="false">' +
        esc(current.title) +
        "</button>" +
        '<div class="lab-crumb-menu" role="menu">' +
        itemsMenu +
        "</div></div>";
    }

    var pairHtml = '<div class="lab-nav-pair">';
    pairHtml += prev
      ? '<a href="' + prev.href + '">anterior</a>'
      : '<span class="is-disabled">anterior</span>';
    pairHtml += next
      ? '<a href="' + next.href + '">proximo</a>'
      : '<span class="is-disabled">proximo</span>';
    pairHtml += "</div>";

    var wrap = d.createElement("div");
    wrap.className = "lab-nav";
    wrap.innerHTML =
      (crumb ? '<nav class="lab-crumb" aria-label="Caminho do lab">' + crumb + "</nav>" : "") +
      '<div class="lab-rail-right">' + pairHtml + "</div>";

    d.body.insertBefore(wrap, d.body.firstChild);
    d.body.classList.add(current && current.fullBleed ? "lab-crumb-overlay" : "lab-crumb-push");

    /* dropdown toggle: click opens/closes, outside click and Escape close, only one open at a time */
    wrap.querySelectorAll(".lab-crumb-drop").forEach(function (drop) {
      var btn = drop.querySelector(".lab-crumb-toggle");
      if (!btn) return;
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var willOpen = !drop.classList.contains("is-open");
        closeAllDrops(wrap);
        if (willOpen) {
          drop.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
    d.addEventListener("click", function () { closeAllDrops(wrap); });
    d.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeAllDrops(wrap);
    });
  };

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", Lab.mountNav);
  } else {
    Lab.mountNav();
  }
})(window, document);
