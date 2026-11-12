# AGENTS.md

## What this is
A static, single-page luxury Indian (Telugu) wedding invitation. Plain HTML/CSS/vanilla JS with no framework, bundler or build step. Netlify publishes the repository root (see `netlify.toml`).

## Files
- `index.html`: All sections in semantic order (intro envelope → nav → hero → couple → shloka band → details → countdown → events → gallery → venue → RSVP → footer, plus the lightbox and music player). The top holds a hidden `<svg><defs>` **ornament library**: `#divider`, `#corner`, `#lotus`, event icons `#ic-haldi|mehendi|rings|mandap|diya`, and UI icons `#ic-calendar|pin|clock|whatsapp`. Reuse these with `<use href="#id">`.
- `style.css`: Design tokens live in `:root` (maroon/gold/ivory palette, fonts). Sections are commented with banner headings.
- `script.js`: `CONFIG` at the top is the **single source of truth** for wedding content. The logic below it is one IIFE.

## Conventions / non-obvious decisions
- **Content comes from CONFIG.** Elements with `data-bind="key"` get `textContent` from the `bindings` map in `script.js`. `<img data-img="key">` reads from `CONFIG.images`. Events, gallery, venue facts and RSVP event chips are rendered from CONFIG. The HTML keeps sensible default text for SEO and no-JS visitors. When you add a new editable field, add it to CONFIG, add it to `bindings`, then use `data-bind` in the HTML.
- **Dates** are ISO strings with `+05:30` and are always formatted in `CONFIG.timeZone` (Asia/Kolkata), so guests abroad see IST.
- **Images** go through `imgSrc()`. It uses Netlify Image CDN (`/.netlify/images?...&fm=webp`) on Netlify hosts and on `netlify dev` (port 8889), and the raw relative path on `file://` or other localhosts. Keep config paths relative (`img/x.jpg`).
- **RSVP**: a static Netlify Form named `rsvp`, with honeypot `bot-field`. JS submits it with AJAX as URL-encoded data to `/`, merges the `events` checkboxes into one value, and shows success only when the response is OK. It then offers a prefilled `wa.me` link. If you add a field, also add it to the static HTML form so Netlify registers it at deploy. Forms detection is enabled through the `.netlify/features/netlify-forms` marker.
- **Music** never autoplays. It starts only inside the "Open Invitation" click or the player button (user gesture). It fades in and out and pauses when the tab is hidden. `music/wedding-theme.wav` is an original synthesized tanpura + santoor-style loop. It can be replaced with any mp3.
- **Motion**: reveal (`.reveal` + `--d` delay) starts only after the envelope opens, so the hero animates in. Parallax uses `[data-parallax="factor"]` and is clamped to the element's extra height. Petals are drawn on a canvas, and there are fewer of them on mobile. Everything is disabled under `prefers-reduced-motion`.
- z-index order: content < petals (35) < nav (50) < music (60) < lightbox (90) < intro (100). Petals sit at 110 during the intro.
