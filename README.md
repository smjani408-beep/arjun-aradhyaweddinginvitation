# Aarav & Saanvi — Royal Indian Wedding Invitation

A premium digital wedding invitation in a royal Telugu wedding style: maroon, antique gold and ivory, with mandalas, floral ornaments, Telugu and English text, and a cinematic opening where an envelope opens.

**Live sections:** envelope opening → hero with couple portrait → bride & groom cards with parents → Mangalya shloka band → wedding details (date, muhurtham, venue, add-to-calendar) → live countdown → event timeline (Haldi, Mehendi, Engagement, Wedding, Reception) → masonry gallery with lightbox → Google Map and directions → RSVP (saved and sent to WhatsApp) → footer. A floating music player sits in the corner.

## Technology

- **HTML5, CSS3 and vanilla JavaScript.** No framework and no build step: `index.html`, `style.css`, `script.js`.
- **Google Fonts**: Playfair Display, Noto Serif Telugu, Cormorant Garamond and Pinyon Script.
- **Netlify Forms** stores RSVPs.
- **Netlify Image CDN** resizes photos and serves them as WebP when the site runs on Netlify.
- Petals are drawn on a `<canvas>`. Scroll reveals use `IntersectionObserver`. Parallax runs in `requestAnimationFrame`. All motion respects `prefers-reduced-motion`.

## Run locally

Choose one:

1. **Just open `index.html`** in a browser. Everything works except saving RSVPs online. The form tells the guest it couldn't save and offers WhatsApp instead.
2. **Use a static server**: `npx serve .` and visit the printed URL.
3. **Full Netlify emulation** (Image CDN included): `netlify dev --port 8889`, then open http://localhost:8889.

## Customising (all of it is in `CONFIG` at the top of `script.js`)

| What | Where in `CONFIG` |
| --- | --- |
| Bride / groom names, Telugu names, bios, parents | `groom`, `bride`, `coupleTelugu`, `monogram` |
| Wedding date & muhurtham | `wedding.muhurtham`: ISO time **with `+05:30`**. Countdown, dates and the calendar file all come from it |
| Lagnam, panchangam line, note | `wedding.muhurthamLabel`, `wedding.hinduDate`, `wedding.muhurthamNote` |
| Invitation text & shlokas | `text` |
| Venue, address, map | `venue.name`, `venue.address`, `venue.mapQuery`. For an exact pin, paste the Google Maps **Share › Embed** `src` into `venue.mapEmbedUrl` |
| Events | `events[]`: add, remove or reorder. Each has a name, Telugu name, icon, accent colour, start/end, place, dress code |
| Couple & section photos | `images` |
| Gallery | `gallery[]`: `src`, `caption`, `ratio` (crop shape, e.g. `'3/4'`) |
| WhatsApp number | `rsvp.whatsappNumber`: digits only with the country code, e.g. `919876543210` |
| RSVP deadline | `rsvp.deadline` |
| Music | `music.src`, `music.title`, `music.volume`, `music.playOnOpen` |
| Effects | `effects.petals`, `effects.parallax` |

**Photos:** put your files in `img/` (JPG at about 1600px wide is ideal) and update the paths. Any public `https://` image URL also works.
**Music:** put an `.mp3` in `music/` and set `music.src`, e.g. `'music/our-song.mp3'`. Music only starts after the guest taps a button. It never autoplays.

## RSVP storage (backend)

Each RSVP is saved with **Netlify Forms**. There is no server code to maintain: the form named `rsvp` in `index.html` is detected at deploy time. You can view responses in the Netlify dashboard under **Forms › rsvp** and export them as CSV. To get an email for each RSVP, go to **Forms › Submission notifications**. After a successful save, the guest can also send the same RSVP on WhatsApp, already filled in.

If you host somewhere other than Netlify, Netlify Forms isn't available. Set `rsvp.saveToNetlifyForms: false` to make WhatsApp the RSVP channel, or point the form at another form service.

## Deploy

- **Netlify:** connect this repository. `netlify.toml` already publishes the repository root with no build command. Or drag the folder onto https://app.netlify.com/drop.
- **Vercel:** import the repo as a static project with no build command and the root as the output directory. In `script.js`, set `images.useNetlifyImageCDN: false` and `rsvp.saveToNetlifyForms: false`.

## Project structure

```
index.html      Semantic markup, SVG ornament library, Netlify RSVP form
style.css       Theme tokens, layout, envelope & all animations
script.js       CONFIG (edit me) + site logic
img/            Couple, portrait and gallery photos
music/          Background music track
netlify.toml    Static publish + cache headers
```
