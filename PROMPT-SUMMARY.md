# Project Prompt Summary

**Project:** Sri Samayapuram Mahamariamman Devasthanam — Temple Website
**GitHub:** https://github.com/arunprab/ssmt
**Local Path:** `/Users/arunp/Documents/claude-projects/ssmt/`
**Domain:** `www.srisamayapurammariammanspatna.org`
**Last Updated:** April 2026

## What Was Built

A 7-page responsive Hindu temple website (pure HTML/CSS/JS, no frameworks) for the NGO temple project "Sri Samayapuram Mahamariamman Devasthanam" at Srirangapatna, Karnataka.

## Pages

| # | File | Nav Label | Description |
|---|------|-----------|-------------|
| 1 | `index.html` | Home | Hero slider, news ticker, highlights, gallery scroll, donation CTA |
| 2 | `pages/goddess.html` | About the Goddess | Goddess intro + Ashtabhuja, legend, Guru bio with quotes |
| 3 | `pages/temple-structure.html` | About the Temple | Sub-nav: Vision & Mission, Agama Shastra, Location, Structure (photo scroll + cards), Timelines |
| 4 | `pages/e-seva.html` | Online Service | e-Seva / e-Hundi / e-Donate — coming soon placeholder |
| 5 | `pages/news-events.html` | News & Events | Kumbhabhishekam featured (kumbabishegam-05.jpg), all events Upcoming |
| 6 | `pages/gallery.html` | Gallery | Tabbed: Photo Gallery, Video Gallery, Past Photos, Albums — fully dynamic from `gallery-data.js` |
| 7 | `pages/contact.html` | General Information | Addresses, contact form (Google Sheets ready), donation details, map |

### Legacy Pages (accessible by URL, not in nav)

| File | Description |
|------|-------------|
| `pages/photo-gallery.html` | Standalone Photo Gallery (legacy) |
| `pages/video-gallery.html` | Standalone Video Gallery (legacy) |

## Core Assets

| File/Folder | Purpose |
|-------------|---------|
| `css/styles.css` | ~1,400 lines — CSS variables, grid, flexbox, responsive at 1024/768/480px, cross-browser prefixes |
| `js/main.js` | Mobile nav + overlay, sticky header, sub-nav scroll, back-to-top, contact form, visitor counter, scroll animations |
| `js/gallery.js` | Dynamic gallery renderer — skeletons, filters, lightbox, touch swipe, YouTube + local video modal |
| `gallery-data.js` | **Admin edits this** to add photos/videos/albums. No HTML knowledge required. |
| `ssmt-logo.jpg` | Temple logo |
| `images/` | All temple photos |
| `images/gallery/` | Gallery photos organised by category subfolder |
| `images/videos/` | Local video files (.mov) |

## Gallery Folder Structure

```
images/
  gallery/
    construction/    construction-01.jpg → construction-04.jpg
    architecture/    architecture-01.jpg → architecture-06.jpg
    campus/          campus-01.jpg → campus-06.jpg  (drone/aerial shots)
    past/            past-01.jpg → past-04.jpg  (historical photos)
    ceremony/        (empty — add ceremony photos here)
  videos/
    temple-exterior-walkthrough.mov
    temple-interior-walkthrough.mov
```

## How to Add Gallery Content

**Add a photo** — drop file in folder, then add one line to `gallery-data.js`:
```js
{ file: 'construction/IMG001.jpg', caption: 'Foundation work', category: 'construction', date: '2026-04' },
```

**Add a YouTube video:**
```js
{ embedId: 'YOUTUBE_VIDEO_ID', title: 'Temple Tour', category: 'architecture', duration: '5:30', date: '2026-04' },
```

**Add a local video (.mov/.mp4):**
```js
{ localFile: 'my-video.mov', title: 'Temple Walkthrough', category: 'architecture', date: '2026-04' },
```

**Add an album** — add to `albums: [ ]` and `past: [ ]` sections in `gallery-data.js`.

## Image Files

All images are local (no Unsplash URLs).

| File | Used On |
|------|---------|
| `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` | Home slider |
| `temple-front.jpg` | Home welcome, Gallery banner |
| `goddess-deity.jpg` | Home goddess section, Goddess page (banner + intro) |
| `guru-swamiji.jpg` | Goddess page guru section |
| `gopuram-main.jpg` | Temple page (banner + Agama Shastra) |
| `pillar-carving.jpg` | Temple page structure, News card |
| `maha-mandapam.jpg` | Temple page Mandapam section |
| `construction-progress.jpg` | Temple page structure, News card |
| `kumbabishegam-05.jpg` | News page featured Kumbhabhishekam event |
| `pooja-ceremony.jpg` | News page banner, e-Seva banner |
| `campus-aerial.jpg` | News card, Contact page banner |
| `gallery-1.jpg` to `gallery-6.jpg` | Home gallery scroll |
| `structure-1.jpg` to `structure-7.jpg` | Temple Structure page scroll |

## Key Design Decisions

- **About the Goddess page**: Ashtabhuja content merged into Goddess intro block. Guru section has two quotes sandwiching bio text. Banner `background-position: center 25%` to show goddess face.
- **Temple Structure page**: Vision & Mission first, then Agama Shastra. Structure section uses horizontal photo scroll (7 slots) + 2-column text card grid. Campus Facilities removed.
- **Temple Timelines**: 9 real milestones (Apr 2012 → Dec 2022) + Kumbhabhishekam 2026 (Upcoming). Compact single-line layout with status badge on right.
- **Home page**: Campus Facilities removed. `<marquee>` replaced with CSS keyframe animation.
- **Gallery page**: Fully dynamic — zero hardcoded items. Powered by `gallery-data.js` + `gallery.js`. Supports YouTube embeds and local .mov/.mp4 playback.
- **Email**: Single contact email `samayapuramtemple.spatna@gmail.com` used across all pages.
- **Visitor Counter**: CounterAPI (free) — counts once per browser session, shown in footer of all pages.
- **Google Analytics**: GA4 placeholder (`G-XXXXXXXXXX`) added to all pages — replace with real ID when account is set up.

## Pending Items

- [ ] **Contact form → Google Sheets integration** (placeholder ready in `js/main.js`):
  1. Create Google Sheet: columns `timestamp, name, email, phone, subject, message`
  2. Open Apps Script → paste doPost script → Deploy as web app
  3. Copy web app URL into `GOOGLE_SCRIPT_URL` in `js/main.js`
- [ ] Replace `G-XXXXXXXXXX` in all 9 HTML files with real GA4 Measurement ID
- [ ] Register domain `www.srisamayapurammariammanspatna.org`
- [ ] Update Kumbhabhishekam event dates when confirmed
- [ ] Build e-Seva/e-Hundi/e-Donate functionality (currently placeholder)
- [ ] Add ceremony photos to `images/gallery/ceremony/` and update `gallery-data.js`
- [ ] Update gallery photo captions in `gallery-data.js` after reviewing actual images
- [ ] Deploy to GitHub Pages (repo: github.com/arunprab/ssmt)

## Tech Stack

HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS, Font Awesome 6.5, Google Fonts (Playfair Display + Poppins). No build tools or dependencies.

## Cross-Browser Support

Chrome, Firefox, Safari, Edge (desktop + mobile).
Key fixes: `-webkit-sticky`, `-webkit-overflow-scrolling: touch`, CSS keyframe ticker, `IntersectionObserver` guard, `scrollTo` try/catch.

## How to Continue in a New Chat

Paste this at the start:

> Referring to the SSMT temple website at `/Users/arunp/Documents/claude-projects/ssmt/` (GitHub: github.com/arunprab/ssmt), I want to...
