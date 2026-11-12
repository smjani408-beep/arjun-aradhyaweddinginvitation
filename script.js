/* =====================================================================
   Aarav & Saanvi — Wedding Invitation
   ---------------------------------------------------------------------
   ✏️  EDIT EVERYTHING ABOUT THE WEDDING IN THE CONFIG BELOW.
   You don't need to touch the rest of this file (or the HTML) to change
   names, dates, photos, venue, WhatsApp number, map or music.
   ===================================================================== */

const CONFIG = {
  /* ---------- The couple ---------- */
  groom: {
    name: 'Aarav',                       // short name used in big headings
    fullName: 'Aarav Varma',
    telugu: 'ఆరవ్ వర్మ',
    bio: 'A software architect with a love for Carnatic music and long drives.',
    parents: 'Sri Venkata Ramana Varma & Smt. Lakshmi Devi',
    parentsTelugu: 'శ్రీ వెంకట రమణ వర్మ & శ్రీమతి లక్ష్మీ దేవి',
  },
  bride: {
    name: 'Saanvi',
    fullName: 'Saanvi Rao',
    telugu: 'సాన్వి రావు',
    bio: 'A Kuchipudi dancer and paediatrician who lights up every room.',
    parents: 'Sri Ramakrishna Rao & Smt. Padmavathi',
    parentsTelugu: 'శ్రీ రామకృష్ణ రావు & శ్రీమతి పద్మావతి',
  },
  coupleTelugu: 'ఆరవ్ ❀ సాన్వి',
  monogram: 'A|S',
  families: 'With love — the Varma & Rao families',
  hashtag: '#AaravWedsSaanvi',

  /* ---------- The wedding ---------- */
  wedding: {
    // Muhurtham in ISO format WITH the India time-zone offset (+05:30).
    // The countdown, dates and calendar file are all generated from this.
    muhurtham: '2027-02-18T10:24:00+05:30',
    durationHours: 3,
    city: 'Hyderabad',
    muhurthamLabel: 'Meena Lagnam',
    muhurthamNote: 'Kindly be seated by 10:00 AM',
    hinduDate: 'Parabhava Nama Samvatsara · Magha Masam',
  },
  timeZone: 'Asia/Kolkata',

  /* ---------- Invitation text ---------- */
  text: {
    shloka: '॥ శ్రీ గణేశాయ నమః ॥',
    inviteMessage: 'With joyful hearts and the blessings of our elders, we invite you to celebrate the sacred union of our souls.',
    inviteTelugu: 'మా ఇంట జరుగు శుభకార్యానికి మీరు సకుటుంబ సపరివార సమేతంగా విచ్చేసి, వధూవరులను ఆశీర్వదించవలసిందిగా కోరుచున్నాము.',
    inviteEnglish: 'We request the pleasure of your company, with your family and loved ones, to bless the couple on this auspicious occasion.',
    bandShloka: 'మాంగల్యం తంతునానేన మమ జీవన హేతునా ।\nకంఠే బధ్నామి సుభగే త్వం జీవ శరదాం శతమ్ ॥',
    bandTranslation: '“This sacred thread is the reason of my life. I tie it around your neck, O auspicious one — may you live a hundred autumns.”',
    eventsIntro: 'Three days of rituals, colour, music and blessings — we would love for you to join every one.',
    thankYou: 'Your presence and blessings are the most precious gifts we could ask for. Thank you for being part of our story.',
  },

  /* ---------- Venue & Google Maps ---------- */
  venue: {
    name: 'N Convention',
    hall: 'Main Kalyana Mandapam',
    address: 'Survey No. 11/2, HITEC City Road, Madhapur, Hyderabad, Telangana 500081',
    // What Google Maps should search for (a place name, an address, or "17.4435,78.3772").
    mapQuery: 'N Convention, Madhapur, Hyderabad',
    // Optional: paste the src="" from Google Maps › Share › Embed a map to use an exact pin.
    mapEmbedUrl: '',
    facts: [
      'Valet parking available at the main gate',
      '25 minutes from Hyderabad city centre',
      'Wheelchair accessible · Lunch served after the muhurtham',
    ],
  },

  /* ---------- Events (add, remove or reorder freely) ----------
     icon: haldi | mehendi | rings | mandap | diya
     accent: any CSS colour — also shown as the dress-code dot       */
  events: [
    { name: 'Haldi', telugu: 'పసుపు వేడుక', icon: 'haldi', accent: '#d39a12',
      start: '2027-02-16T09:00:00+05:30', end: '2027-02-16T12:00:00+05:30',
      place: 'Varma Residence, Jubilee Hills', dress: 'Shades of yellow',
      description: 'A joyful morning of turmeric, laughter and blessings for the bride and groom.' },
    { name: 'Mehendi', telugu: 'మెహందీ', icon: 'mehendi', accent: '#4f7a3a',
      start: '2027-02-16T17:00:00+05:30', end: '2027-02-16T21:00:00+05:30',
      place: 'Rao Residence Garden, Banjara Hills', dress: 'Greens & florals',
      description: 'Henna, folk songs, dholak beats and an evening under the fairy lights.' },
    { name: 'Engagement', telugu: 'నిశ్చితార్థం', icon: 'rings', accent: '#a83f63',
      start: '2027-02-17T18:30:00+05:30', end: '2027-02-17T22:00:00+05:30',
      place: 'Sri Hall, N Convention', dress: 'Pastels & rose gold',
      description: 'The exchange of rings and promises as two families become one.' },
    { name: 'Wedding Ceremony', telugu: 'కళ్యాణం', icon: 'mandap', accent: '#7e1a2c',
      start: '2027-02-18T10:24:00+05:30', end: '2027-02-18T13:30:00+05:30',
      place: 'Main Kalyana Mandapam, N Convention', dress: 'Traditional silks',
      description: 'Jeelakarra-Bellam, Mangalya Dharana and Talambralu at the auspicious muhurtham.' },
    { name: 'Reception', telugu: 'రిసెప్షన్', icon: 'diya', accent: '#2f3d73',
      start: '2027-02-18T19:30:00+05:30', end: '2027-02-18T23:00:00+05:30',
      place: 'Grand Ballroom, N Convention', dress: 'Royal evening wear',
      description: 'An evening of dinner, music and dancing to celebrate the newlyweds.' },
  ],

  /* ---------- Photos ----------
     Put your images in the /img folder and change the file names here.
     Any public https:// image URL also works.                          */
  images: {
    couplePhoto: 'img/hero-couple.jpg',
    couplePhotoPosition: '56% center',   // which part of the photo stays visible in the arch
    heroBackground: 'img/gallery-3.jpg',
    bandBackground: 'img/gallery-4.jpg',
    groomPhoto: 'img/groom.jpg',
    bridePhoto: 'img/bride.jpg',
    // 'auto' = optimise images via Netlify Image CDN when hosted on Netlify,
    // use originals when opened locally. Set false when hosting elsewhere (e.g. Vercel).
    useNetlifyImageCDN: 'auto',
  },

  /* ratio = crop shape in the masonry grid, e.g. '3/4' (tall), '4/3', '1/1', '16/10' */
  gallery: [
    { src: 'img/hero-couple.jpg', caption: 'The promise', ratio: '4/3' },
    { src: 'img/bride.jpg', caption: 'Our Saanvi', ratio: '3/4' },
    { src: 'img/gallery-1.jpg', caption: 'Mehendi stories', ratio: '1/1' },
    { src: 'img/gallery-2.jpg', caption: 'Haldi laughter', ratio: '4/5' },
    { src: 'img/gallery-3.jpg', caption: 'The mandapam awaits', ratio: '16/10' },
    { src: 'img/groom.jpg', caption: 'Our Aarav', ratio: '3/4' },
    { src: 'img/gallery-4.jpg', caption: 'Hand in hand', ratio: '4/3' },
    { src: 'img/gallery-5.jpg', caption: 'Sacred vows', ratio: '1/1' },
    { src: 'img/gallery-6.jpg', caption: 'A lifetime of celebrations', ratio: '16/10' },
  ],

  /* ---------- RSVP ---------- */
  rsvp: {
    // International format, digits only, no "+" (91 = India). Replace with the family's number.
    whatsappNumber: '919876543210',
    deadline: '2027-02-01',
    // true = store every RSVP in Netlify Forms (works when deployed on Netlify).
    saveToNetlifyForms: true,
  },

  /* ---------- Background music ----------
     Replace music/wedding-theme.wav with your own .mp3 and update src.
     Music never starts on its own — only after the guest taps a button. */
  music: {
    src: 'music/wedding-theme.wav',
    title: 'Mangala Vadyam',
    volume: 0.55,
    playOnOpen: true,   // start softly when the guest taps "Open Wedding Invitation"
  },

  /* ---------- Effects ---------- */
  effects: { petals: true, parallax: true },
};

/* =====================================================================
   Below this line: site logic. No editing needed.
   ===================================================================== */
(() => {
  'use strict';

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 760px)').matches;

  /* ---------------- Formatting helpers ---------------- */
  const fmt = (date, opts) => new Intl.DateTimeFormat('en-IN', { timeZone: CONFIG.timeZone, ...opts }).format(date);
  const fmtDate = (d) => fmt(d, { day: 'numeric', month: 'long', year: 'numeric' });
  const fmtShortDate = (d) => fmt(d, { day: 'numeric', month: 'short' });
  const fmtWeekday = (d) => fmt(d, { weekday: 'long' });
  const fmtTime = (d) => fmt(d, { hour: 'numeric', minute: '2-digit', hour12: true }).toUpperCase();
  const muhurtham = new Date(CONFIG.wedding.muhurtham);

  /* ---------------- Image helper (Netlify Image CDN) ---------------- */
  const useCDN = (() => {
    const opt = CONFIG.images.useNetlifyImageCDN;
    if (opt === true || opt === false) return opt;
    const { protocol, hostname, port } = location;
    if (!protocol.startsWith('http')) return false;
    const local = ['localhost', '127.0.0.1', '0.0.0.0', ''].includes(hostname) || hostname.endsWith('.local');
    return !local || port === '8889'; // 8889 = `netlify dev`
  })();
  function imgSrc(path, width) {
    if (!path) return '';
    if (/^(https?:|data:|blob:)/.test(path) || !useCDN) return path;
    const abs = path.startsWith('/') ? path : '/' + path;
    return `/.netlify/images?url=${encodeURIComponent(abs)}&w=${width}&fm=webp&q=80`;
  }

  /* ---------------- Mandala SVG generator ---------------- */
  function mandalaSVG(n) {
    const rot = (x, y, a) => [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a)];
    const p = (pt) => pt.map((v) => v.toFixed(1)).join(' ');
    const ring = (count, r1, r2, w, offset = 0) => {
      let d = '';
      const mid = (r1 + r2) / 2;
      for (let i = 0; i < count; i++) {
        const a = (i + offset) * (2 * Math.PI / count);
        d += `M${p(rot(0, -r1, a))}Q${p(rot(w, -mid, a))} ${p(rot(0, -r2, a))}Q${p(rot(-w, -mid, a))} ${p(rot(0, -r1, a))}Z`;
      }
      return `<path d="${d}"/>`;
    };
    let dots = '';
    for (let i = 0; i < n * 4; i++) { const [x, y] = rot(0, -184, i * 2 * Math.PI / (n * 4)); dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.8"/>`; }
    return `<svg viewBox="-200 -200 400 400" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="1">
      <circle r="26"/><circle r="20" stroke-dasharray="2 4"/>
      ${ring(n, 28, 64, 11)}${ring(n, 40, 64, 5)}
      <circle r="66"/>${ring(n * 2, 68, 108, 9, .5)}
      <circle r="110"/><circle r="114" stroke-dasharray="1 5"/>${ring(n, 116, 168, 24)}${ring(n, 126, 160, 12)}${ring(n, 140, 174, 8, .5)}
      <circle r="176"/><circle r="192"/></g><g fill="currentColor">${dots}<circle r="4"/></g></svg>`;
  }
  $$('[data-mandala]').forEach((el) => { el.innerHTML = mandalaSVG(+el.dataset.mandala || 12); });

  /* ---------------- Text bindings ---------------- */
  const g = CONFIG.groom, b = CONFIG.bride, v = CONFIG.venue, t = CONFIG.text;
  const bindings = {
    shloka: t.shloka,
    groomName: g.name, brideName: b.name,
    groomFullName: g.fullName, brideFullName: b.fullName,
    groomTelugu: g.telugu, brideTelugu: b.telugu,
    groomBio: g.bio, brideBio: b.bio,
    groomParents: g.parents, brideParents: b.parents,
    groomParentsTelugu: g.parentsTelugu, brideParentsTelugu: b.parentsTelugu,
    coupleTelugu: CONFIG.coupleTelugu,
    monogram: CONFIG.monogram,
    dateLong: fmtDate(muhurtham),
    dateShort: fmt(muhurtham, { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, ' · '),
    weekday: fmtWeekday(muhurtham),
    city: CONFIG.wedding.city,
    hinduDate: CONFIG.wedding.hinduDate,
    muhurthamTime: fmtTime(muhurtham),
    muhurthamLabel: CONFIG.wedding.muhurthamLabel,
    muhurthamNote: CONFIG.wedding.muhurthamNote,
    venueName: v.name, venueHall: v.hall, venueAddress: v.address,
    inviteMessage: t.inviteMessage, inviteTelugu: t.inviteTelugu, inviteEnglish: t.inviteEnglish,
    bandShloka: t.bandShloka, bandTranslation: t.bandTranslation,
    eventsIntro: t.eventsIntro,
    thankYou: t.thankYou, families: CONFIG.families, hashtag: CONFIG.hashtag,
    rsvpDeadline: fmtDate(new Date(CONFIG.rsvp.deadline + 'T00:00:00+05:30')),
  };
  $$('[data-bind]').forEach((el) => {
    const val = bindings[el.dataset.bind];
    if (val !== undefined) el.textContent = val ?? '';
  });
  document.title = `${g.name} & ${b.name} — Wedding Invitation | ${bindings.dateLong}`;
  $('#groomCard img').alt = `${g.fullName}, the groom`;
  $('#brideCard img').alt = `${b.fullName}, the bride`;
  $('.hero__photo img').alt = `${g.name} and ${b.name}`;

  /* ---------------- Images ---------------- */
  $$('[data-img]').forEach((img) => {
    img.src = imgSrc(CONFIG.images[img.dataset.img], +img.dataset.w || 1200);
    if (img.dataset.pos) img.style.objectPosition = CONFIG.images[img.dataset.pos] || '';
  });

  /* ---------------- Events ---------------- */
  const icon = (id) => `<svg aria-hidden="true"><use href="#ic-${id}"/></svg>`;
  $('#eventsList').innerHTML = CONFIG.events.map((e, i) => {
    const s = new Date(e.start), en = e.end ? new Date(e.end) : null;
    return `<li class="event reveal" style="--accent:${e.accent};--d:${(i % 2) * .1}s">
      <div class="event__icon">${icon(e.icon)}</div>
      <article class="event__card">
        <p class="event__te">${esc(e.telugu || '')}</p>
        <h3 class="event__name">${esc(e.name)}</h3>
        <p class="event__meta">
          <span>${icon('calendar')}${esc(fmtWeekday(s).slice(0, 3))}, ${esc(fmtShortDate(s))}</span>
          <span>${icon('clock')}${esc(fmtTime(s))}${en ? ' – ' + esc(fmtTime(en)) : ''}</span>
          ${e.place ? `<span>${icon('pin')}${esc(e.place)}</span>` : ''}
        </p>
        ${e.description ? `<p class="event__desc">${esc(e.description)}</p>` : ''}
        ${e.dress ? `<p class="event__dress"><i></i>Dress code: ${esc(e.dress)}</p>` : ''}
      </article></li>`;
  }).join('');
  function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  /* ---------------- Gallery ---------------- */
  $('#galleryGrid').innerHTML = CONFIG.gallery.map((p, i) => `
    <li class="gallery__item reveal" style="--d:${(i % 3) * .08}s">
      <button class="gallery__btn" type="button" data-index="${i}" data-caption="${esc(p.caption || '')}" aria-label="View photo: ${esc(p.caption || 'photo ' + (i + 1))}">
        <img src="${imgSrc(p.src, 700)}" alt="${esc(p.caption || '')}" loading="lazy" decoding="async" style="--ar:${esc(p.ratio || '4/3')}" />
      </button>
    </li>`).join('');

  /* ---------------- Venue & map ---------------- */
  const q = encodeURIComponent(v.mapQuery || v.address);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
  $('#mapFrame').src = v.mapEmbedUrl || `https://www.google.com/maps?q=${q}&output=embed`;
  $('#directionsBtn').href = directionsUrl;
  $('#detailsDirections').href = directionsUrl;
  $('#openMapBtn').href = `https://www.google.com/maps/search/?api=1&query=${q}`;
  $('#venueFacts').innerHTML = (v.facts || []).map((f) => `<li>${esc(f)}</li>`).join('');

  /* ---------------- Add to calendar (.ics with every event) ---------------- */
  $('#addCalendar').addEventListener('click', () => {
    const stamp = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const icsEsc = (s) => String(s).replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n');
    const evts = CONFIG.events.map((e, i) => {
      const s = new Date(e.start);
      const en = e.end ? new Date(e.end) : new Date(s.getTime() + CONFIG.wedding.durationHours * 36e5);
      return ['BEGIN:VEVENT', `UID:${stamp(s)}-${i}@wedding-invite`, `DTSTAMP:${stamp(new Date())}`,
        `DTSTART:${stamp(s)}`, `DTEND:${stamp(en)}`,
        `SUMMARY:${icsEsc(`${e.name} · ${g.name} & ${b.name}`)}`,
        `LOCATION:${icsEsc(e.place || v.name)}`,
        `DESCRIPTION:${icsEsc(e.description || '')}`, 'END:VEVENT'].join('\r\n');
    });
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wedding Invitation//EN', 'CALSCALE:GREGORIAN', ...evts, 'END:VCALENDAR'].join('\r\n');
    const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: `${g.name}-${b.name}-wedding.ics` });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  });

  /* =====================================================================
     MUSIC
     ===================================================================== */
  const audio = $('#bgMusic');
  const musicWrap = $('#music'), musicBtn = $('#musicBtn'), musicLabel = $('#musicLabel');
  let fadeTimer = null, wantsMusic = false, pausedByHide = false;
  function fadeTo(target, ms, done) {
    clearInterval(fadeTimer);
    const start = audio.volume, steps = Math.max(1, Math.round(ms / 50)); let i = 0;
    fadeTimer = setInterval(() => {
      i++; audio.volume = Math.min(1, Math.max(0, start + (target - start) * (i / steps)));
      if (i >= steps) { clearInterval(fadeTimer); done && done(); }
    }, 50);
  }
  function setMusicUI(playing) {
    musicWrap.classList.toggle('is-playing', playing);
    musicBtn.setAttribute('aria-pressed', String(playing));
    musicBtn.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
    musicLabel.textContent = playing ? `♪ ${CONFIG.music.title}` : 'Play music';
  }
  function playMusic() {
    if (!CONFIG.music.src) return;
    if (!audio.src) audio.src = CONFIG.music.src;
    audio.volume = 0;
    wantsMusic = true;
    const p = audio.play();
    setMusicUI(true);
    if (p && p.catch) p.then(() => fadeTo(CONFIG.music.volume, 1800)).catch(() => { wantsMusic = false; setMusicUI(false); musicLabel.textContent = 'Tap to play music'; });
    else fadeTo(CONFIG.music.volume, 1800);
  }
  function pauseMusic(byUser = true) {
    if (byUser) wantsMusic = false;
    setMusicUI(false);
    fadeTo(0, 500, () => audio.pause());
  }
  musicBtn.addEventListener('click', () => (audio.paused || !wantsMusic ? playMusic() : pauseMusic()));
  audio.addEventListener('error', () => { setMusicUI(false); musicLabel.textContent = 'Music unavailable'; });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && wantsMusic && !audio.paused) { pausedByHide = true; pauseMusic(false); }
    else if (!document.hidden && pausedByHide) { pausedByHide = false; playMusic(); }
  });

  /* =====================================================================
     OPENING ENVELOPE
     ===================================================================== */
  const intro = $('#intro');
  let started = false;
  function startSite() {
    if (started) return; started = true;
    document.body.classList.remove('is-locked');
    document.body.classList.add('is-ready');
    initReveal();
    if (location.hash && $(location.hash)) setTimeout(() => $(location.hash).scrollIntoView({ behavior: 'smooth' }), 300);
  }
  $('#openInvite').addEventListener('click', () => {
    if (CONFIG.music.playOnOpen) playMusic(); // inside the click = user gesture, never autoplay
    intro.classList.add('is-opening');
    const openMs = reduceMotion ? 300 : 2500;
    setTimeout(() => {
      intro.classList.add('is-leaving');
      startSite();
      setTimeout(() => { intro.hidden = true; $('#main').focus?.({ preventScroll: true }); }, reduceMotion ? 50 : 1400);
    }, openMs);
  });

  /* =====================================================================
     SCROLL REVEAL, PARALLAX, NAV
     ===================================================================== */
  function initReveal() {
    const els = $$('.reveal');
    if (!('IntersectionObserver' in window) || reduceMotion) { els.forEach((el) => el.classList.add('is-visible')); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => io.observe(el));
  }

  const nav = $('#nav');
  const parallaxEls = CONFIG.effects.parallax && !reduceMotion ? $$('[data-parallax]') : [];
  let ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const factor = (+el.dataset.parallax || 0.3) * (isMobile ? 0.5 : 1);
        const max = el.offsetHeight * 0.08;
        const y = Math.max(-max, Math.min(max, -((r.top + r.height / 2) - vh / 2) * factor));
        el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      });
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  // Mobile menu
  const toggle = $('#navToggle'), links = $('#navLinks');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  });
  links.addEventListener('click', (e) => { if (e.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); links.classList.remove('is-open'); } });

  // Highlight active section in nav
  if ('IntersectionObserver' in window) {
    const map = new Map($$('.nav__links a').map((a) => [a.getAttribute('href').slice(1), a]));
    const sio = new IntersectionObserver((entries) => entries.forEach((en) => {
      const a = map.get(en.target.id);
      if (a && en.isIntersecting) { map.forEach((l) => l.classList.remove('is-active')); a.classList.add('is-active'); }
    }), { rootMargin: '-45% 0px -50% 0px' });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) sio.observe(s); });
  }

  /* =====================================================================
     COUNTDOWN
     ===================================================================== */
  const units = Object.fromEntries($$('[data-unit]').map((el) => [el.dataset.unit, el]));
  let countdownTimer;
  function updateCountdown() {
    const diff = muhurtham.getTime() - Date.now();
    if (diff <= 0) {
      $('#timer').hidden = true; $('#countdownDone').hidden = false; clearInterval(countdownTimer); return;
    }
    const vals = {
      days: Math.floor(diff / 864e5),
      hours: Math.floor(diff / 36e5) % 24,
      minutes: Math.floor(diff / 6e4) % 60,
      seconds: Math.floor(diff / 1e3) % 60,
    };
    for (const k in vals) {
      const txt = String(vals[k]).padStart(2, '0');
      const el = units[k];
      if (el.textContent !== txt) {
        el.textContent = txt;
        if (!reduceMotion) { el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick'); }
      }
    }
  }
  updateCountdown();
  countdownTimer = setInterval(updateCountdown, 1000);

  /* =====================================================================
     LIGHTBOX (keyboard + swipe)
     ===================================================================== */
  const lb = $('#lightbox'), lbImg = $('.lightbox__img', lb), lbText = $('.lightbox__text', lb), lbCount = $('.lightbox__count', lb);
  let lbIndex = 0, lbTrigger = null;
  const lbSrc = (i) => imgSrc(CONFIG.gallery[i].src, 1600);
  function showPhoto(i, animate = true) {
    const n = CONFIG.gallery.length;
    lbIndex = (i + n) % n;
    const item = CONFIG.gallery[lbIndex];
    const apply = () => {
      lbImg.src = lbSrc(lbIndex); lbImg.alt = item.caption || '';
      lbText.textContent = item.caption || ''; lbCount.textContent = `${lbIndex + 1} / ${n}`;
      lbImg.classList.remove('is-switching');
      [1, -1].forEach((d) => { const pre = new Image(); pre.src = lbSrc((lbIndex + d + n) % n); });
    };
    if (animate && !reduceMotion) { lbImg.classList.add('is-switching'); setTimeout(apply, 220); } else apply();
  }
  function openLightbox(i, trigger) {
    lbTrigger = trigger; showPhoto(i, false);
    lb.hidden = false; document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => lb.classList.add('is-open'));
    $('.lightbox__close', lb).focus();
  }
  function closeLightbox() {
    lb.classList.remove('is-open'); document.body.style.overflow = '';
    setTimeout(() => { lb.hidden = true; lbTrigger && lbTrigger.focus(); }, 350);
  }
  $('#galleryGrid').addEventListener('click', (e) => {
    const btn = e.target.closest('.gallery__btn'); if (btn) openLightbox(+btn.dataset.index, btn);
  });
  $('.lightbox__close', lb).addEventListener('click', closeLightbox);
  $('.lightbox__nav--prev', lb).addEventListener('click', () => showPhoto(lbIndex - 1));
  $('.lightbox__nav--next', lb).addEventListener('click', () => showPhoto(lbIndex + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lightbox__stage')) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') showPhoto(lbIndex + 1);
    else if (e.key === 'ArrowLeft') showPhoto(lbIndex - 1);
    else if (e.key === 'Tab') { // keep focus inside the viewer
      const f = $$('button', lb); const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  let touchX = null, touchY = null;
  lb.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; touchY = e.touches[0].clientY; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX, dy = e.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) showPhoto(lbIndex + (dx < 0 ? 1 : -1));
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) closeLightbox(); // swipe down to close
    touchX = touchY = null;
  }, { passive: true });

  /* =====================================================================
     RSVP — Netlify Forms + WhatsApp
     ===================================================================== */
  const form = $('#rsvpForm'), statusEl = $('#rsvpStatus'), submitBtn = $('#rsvpSubmit');
  const eventsChoice = $('#eventsChoice'), guestsField = $('#guestsField');

  // Render event chips from CONFIG (field name stays "events")
  $$('.choice__chip', eventsChoice).forEach((c) => c.remove());
  eventsChoice.insertAdjacentHTML('beforeend', CONFIG.events.map((e) =>
    `<label class="choice__chip"><input type="checkbox" name="events" value="${esc(e.name)}"${e.icon === 'mandap' ? ' checked' : ''} /><span>${esc(e.name)}</span></label>`).join(''));

  const attending = () => form.attendance.value !== 'Regretfully declines';
  function syncAttendance() {
    const yes = attending();
    form.guests.disabled = !yes;
    guestsField.classList.toggle('is-disabled', !yes);
    eventsChoice.classList.toggle('is-disabled', !yes);
    $$('input', eventsChoice).forEach((i) => { i.disabled = !yes; });
  }
  $$('input[name="attendance"]', form).forEach((r) => r.addEventListener('change', syncAttendance));
  syncAttendance();

  function readForm() {
    const fd = new FormData(form);
    return {
      name: (fd.get('name') || '').toString().trim(),
      phone: (fd.get('phone') || '').toString().trim(),
      attendance: fd.get('attendance'),
      guests: fd.get('guests'),
      events: fd.getAll('events').join(', '),
      message: (fd.get('message') || '').toString().trim(),
    };
  }
  function whatsappUrl(d) {
    const lines = [
      `🙏 *RSVP — ${g.name} & ${b.name}'s Wedding*`, '',
      `*Name:* ${d.name || '—'}`,
      d.phone ? `*Phone:* ${d.phone}` : null,
      `*Response:* ${d.attendance || '—'}`,
      d.attendance !== 'Regretfully declines' && d.guests ? `*Guests:* ${d.guests}` : null,
      d.attendance !== 'Regretfully declines' && d.events ? `*Events:* ${d.events}` : null,
      d.message ? `*Wishes:* ${d.message}` : null,
    ].filter((l) => l !== null);
    return `https://wa.me/${CONFIG.rsvp.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(lines.join('\n'))}`;
  }
  // Direct WhatsApp link always reflects what's typed so far
  $('#rsvpWhatsAppDirect').addEventListener('click', function () { this.href = whatsappUrl(readForm()); });
  $('#rsvpWhatsAppDirect').href = whatsappUrl(readForm());

  function validate() {
    let ok = true;
    [['f-name', (val) => val.trim().length >= 2], ['f-phone', (val) => /^\+?[0-9\s-]{10,15}$/.test(val.trim())]].forEach(([id, test]) => {
      const input = document.getElementById(id), field = input.closest('.field');
      const valid = test(input.value);
      field.classList.toggle('is-invalid', !valid);
      input.setAttribute('aria-invalid', String(!valid));
      if (!valid && ok) { input.focus(); ok = false; }
    });
    return ok;
  }
  $$('#f-name, #f-phone').forEach((i) => i.addEventListener('input', () => i.closest('.field').classList.remove('is-invalid')));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = '';
    if (!validate()) return;
    const data = readForm();
    const waUrl = whatsappUrl(data);

    if (!CONFIG.rsvp.saveToNetlifyForms) { showThanks(data, waUrl, false); return; }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner" aria-hidden="true"></span><span>Sending…</span>';
    try {
      const body = new URLSearchParams(new FormData(form));
      body.delete('events'); body.set('events', data.events || '—');
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      showThanks(data, waUrl, true);
    } catch (err) {
      statusEl.innerHTML = '';
      statusEl.append('We couldn’t save your RSVP online just now. ');
      const a = Object.assign(document.createElement('a'), { href: waUrl, target: '_blank', rel: 'noopener', textContent: 'Please send it on WhatsApp instead →' });
      statusEl.append(a);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Send RSVP</span>';
    }
  });

  function showThanks(d, waUrl, saved) {
    const first = d.name.split(' ')[0];
    const yes = d.attendance !== 'Regretfully declines';
    $('#thanksTitle').textContent = yes ? `Thank you, ${first}!` : `Thank you, ${first}`;
    $('#thanksText').textContent = saved
      ? (yes ? `Your RSVP for ${d.guests} ${d.guests === '1' ? 'guest' : 'guests'} has been received. We can’t wait to celebrate with you!` : 'We’ll miss you dearly — your blessings mean the world to us. Your response has been received.')
      : 'Tap below to send your RSVP to the family on WhatsApp.';
    const wa = $('#rsvpWhatsApp');
    wa.href = waUrl;
    wa.lastChild.textContent = saved ? ' Also send on WhatsApp' : ' Send RSVP on WhatsApp';
    form.hidden = true;
    const box = $('#rsvpThanks'); box.hidden = false; box.focus();
  }
  $('#rsvpAgain').addEventListener('click', () => {
    form.reset(); syncAttendance();
    $('#rsvpThanks').hidden = true; form.hidden = false; $('#f-name').focus();
  });

  /* =====================================================================
     FLOATING PETALS (canvas — lightweight, pauses when tab hidden)
     ===================================================================== */
  (function petals() {
    const canvas = $('#petals');
    if (!CONFIG.effects.petals || reduceMotion || !canvas.getContext) { canvas.remove(); return; }
    const ctx = canvas.getContext('2d');
    const colors = ['#e8a33d', '#d9822b', '#b3263f', '#e9b8b0', '#c9a45c', '#f2d27a'];
    const count = isMobile ? 16 : 30;
    let W, H, dpr, items = [], raf = null, last = performance.now();
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.width = Math.round(innerWidth * dpr); H = canvas.height = Math.round(innerHeight * dpr);
    }
    const make = (initial) => ({
      x: Math.random() * W, y: initial ? Math.random() * H : -20 * dpr,
      s: (6 + Math.random() * 8) * dpr, vy: (18 + Math.random() * 30) * dpr, sway: 20 + Math.random() * 40,
      f: .4 + Math.random() * .8, ph: Math.random() * 6.28, r: Math.random() * 6.28, vr: (Math.random() - .5) * 1.6,
      c: colors[(Math.random() * colors.length) | 0], a: .55 + Math.random() * .4,
    });
    function frame(now) {
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      ctx.clearRect(0, 0, W, H);
      for (const p of items) {
        p.y += p.vy * dt; p.ph += p.f * dt; p.r += p.vr * dt;
        const x = p.x + Math.sin(p.ph) * p.sway * dpr;
        if (p.y > H + 20 * dpr) Object.assign(p, make(false));
        ctx.save(); ctx.translate(x, p.y); ctx.rotate(p.r); ctx.scale(1, Math.abs(Math.cos(p.ph * 1.7)) * .7 + .3);
        ctx.globalAlpha = p.a; ctx.fillStyle = p.c;
        ctx.beginPath(); ctx.moveTo(0, -p.s);
        ctx.bezierCurveTo(p.s * .9, -p.s * .5, p.s * .7, p.s * .6, 0, p.s);
        ctx.bezierCurveTo(-p.s * .7, p.s * .6, -p.s * .9, -p.s * .5, 0, -p.s);
        ctx.fill(); ctx.restore();
      }
      raf = requestAnimationFrame(frame);
    }
    resize(); items = Array.from({ length: count }, () => make(true));
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { cancelAnimationFrame(raf); raf = null; }
      else if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
    });
    raf = requestAnimationFrame(frame);
  })();
})();
