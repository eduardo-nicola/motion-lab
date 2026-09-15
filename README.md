# MOTION lab

Reading this as: educational motion lab / mini-portfolio of techniques for a creative frontend developer, with an Awwwards-experimental language, leaning toward native CSS + Motion/GSAP + Tailwind, not a SaaS landing.

Dials: DESIGN_VARIANCE 8, MOTION_INTENSITY 8, VISUAL_DENSITY 3.

Audience: the user learning to NAME and SEE each technique before briefing a portfolio.

## Stack

Static HTML, shared CSS/JS: `_shared/lab.css`, `_shared/lab.js`, `_shared/nav.js`. Cabinet Grotesk + Satoshi, olive charcoal + burnt red, sharp radius 0, dark theme lock. No build step, no framework.

`_shared/nav.js` owns one manifest (the dictionary tree) and injects the nav chrome into every page at runtime: a top-left breadcrumb (`MOTION lab / {topico} / {item}`, each segment opens a dropdown instead of a full list sitting in the lateral) and a top-right pair (`anterior` / `proximo`). No page hardcodes its own header anymore, so there is exactly one place that lists every technique.

GSAP + ScrollTrigger via CDN only on pin/scrub/camera pages. Pointer physics in vanilla transform (`Lab.magnetic`, `Lab.tilt`), never React state. Grain is a fixed `pointer-events: none` overlay.

Three.js is not in the stack. Gaussian splat / 3D-to-2D (Oryzo-level) is skipped. `scroll/scrollytelling` and `scroll/z-axis-dive` say why. `stage/webgl-blob` is a labeled canvas approximation.

`cam/` is the original three-axis reference (stack, horizontal, dive). It stays on disk but is intentionally out of the nav and out of the index: superseded by the dictionaries below.

## One technique, one folder (dedupe)

- **Magnet** lives only in `skin/magnetic-button/`. `triggers/hover/` teaches the plain CSS hover (scale + color) and points to magnetic-button for the physics variant.
- **Pin** and **scrub** live only in `scroll/`. The old `triggers/pin/` and `triggers/scrub/` were the same lesson under a different label and were removed.
- **Text as object** (kinetic type, text mask, scramble, marquee) moved out of `skin/` into its own `type/` dictionary: it teaches typography, not pointer interaction. `skin/` kept only the four techniques that actually respond to the cursor (magnet, tilt, spotlight, page wipe).
- **Shared element** was cut: it repeated the same state-swap idea already covered by `triggers/click/`.
- **Composition** was cut: keeping one hand-picked "portfolio example" in the lab blurred the line between dictionary and product. The lab teaches techniques; it does not ship a portfolio.

## Run

```bash
cd exemples
npm install
npm run dev
```

Open http://localhost:4173/

## Deploy (static)

The lab has no build step and no server-side code: every path resolves to a static file under `exemples/`. To publish, point any static host at the `exemples/` folder as its root:

```bash
# quick check of the production file set, no dev reload
cd exemples
npx serve . -l 4173

# Netlify / any static host: publish directory = exemples/, no build command
# GitHub Pages: push exemples/ contents to the pages branch (or set Pages source to /exemples)
```

Notes:

- All internal links are root-relative (`/_shared/...`, `/scroll/...`). The deployed root **must** be `exemples/`, not the repo root.
- Fonts (Fontshare), GSAP, and demo photography (picsum.photos) load from CDNs. Offline / air-gapped hosting will lose those, not break navigation.
- `404.html` at the root catches unmatched paths and links back to `/`.
- Smoke test before shipping: open `/`, one page per dictionary, and the two anchor jumps `/#type` and `/#skin` from a demo's breadcrumb.

## URLs

- Home: `/`
- Gatilhos: `/triggers/load/` `/hover/` `/click/`
- Scroll: `/scroll/reveal-stagger/` `/pin/` `/scrub/` `/parallax/` `/zoom-parallax/` `/sticky-stack/` `/horizontal-hijack/` `/split-screen/` `/curtain-reveal/` `/z-axis-dive/` `/scrollytelling/`
- Palco: `/stage/grain/` `/mesh-gradient/` `/noise-displacement/` `/particles/` `/webgl-blob/` `/lens-blur/` `/light-leak/`
- Tipo: `/type/kinetic-type/` `/text-mask/` `/scramble/` `/marquee/`
- Pele: `/skin/magnetic-button/` `/tilt-card/` `/spotlight-border/` `/page-transition/`
- Timing: `/timing/ease-out/` `/spring/` `/scrub-none/` `/stagger/` `/duration/`
