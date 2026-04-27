# Image Reference Guide

Where each image is used across the website. Place all images in the `images/` folder.
For pages inside `pages/`, paths use `../images/`.

## Recommended Image Sizes

| Usage | Width | Format |
|-------|-------|--------|
| Hero slider / Page banners | 1920px | JPG (compressed) |
| Content sections | 600px | JPG |
| Gallery thumbnails | 400px | JPG |
| Logo | As-is | JPG/PNG |

---

## Home Page (`index.html`)

| Image File | Section | Notes |
|-----------|---------|-------|
| `hero-1.jpg` | Hero Slider — Slide 1 | Background image. Main temple front view |
| `hero-2.jpg` | Hero Slider — Slide 2 | Background image. Gopuram / architecture |
| `hero-3.jpg` | Hero Slider — Slide 3 | Background image. Deity / ceremony |
| `temple-front.jpg` | Welcome section | Temple overview photo |
| `goddess-deity.jpg` | Goddess preview section | Goddess idol/photo |
| `gallery-1.jpg` | Gallery scroll — item 1 | Recent photo |
| `gallery-2.jpg` | Gallery scroll — item 2 | Recent photo |
| `gallery-3.jpg` | Gallery scroll — item 3 | Recent photo |
| `gallery-4.jpg` | Gallery scroll — item 4 | Recent photo |
| `gallery-5.jpg` | Gallery scroll — item 5 | Recent photo |
| `gallery-6.jpg` | Gallery scroll — item 6 | Recent photo |

## About the Goddess (`pages/goddess.html`)

| Image File | Section | Notes |
|-----------|---------|-------|
| `goddess-deity.jpg` | Page banner (background) | Wide shot of deity |
| `goddess-deity.jpg` | Goddess intro image | Goddess idol close-up |
| `guru-swamiji.jpg` | Guru section image | Swamiji photo |

## About the Temple (`pages/temple-structure.html`)

| Image File | Section | Notes |
|-----------|---------|-------|
| `gopuram-main.jpg` | Page banner (background) | Temple architecture wide shot |
| `gopuram-main.jpg` | Agama Shastra section | Dravidian architecture detail |
| `pillar-carving.jpg` | First Pragaram section | Stone pillars / carvings |
| `maha-mandapam.jpg` | Maha Mandapam section | Mandapam structure |
| `construction-progress.jpg` | Second Pragaram section | Construction site view |

## News & Events (`pages/news-events.html`)

| Image File | Section | Notes |
|-----------|---------|-------|
| `pooja-ceremony.jpg` | Page banner (background) | Ceremony / event |
| `pooja-ceremony.jpg` | Featured event image | Kumbhabhishekam related |
| `construction-progress.jpg` | News card 1 | Construction update |
| `pillar-carving.jpg` | News card 2 | Stone carving work |
| `campus-aerial.jpg` | News card 3 | Campus / donation drive |

## Gallery (`pages/gallery.html`)

| Image File | Section | Notes |
|-----------|---------|-------|
| `temple-front.jpg` | Page banner (background) | Temple wide shot |
| `gallery/*.jpg` | Photo Gallery tab | Category filters + lightbox |
| Video thumbnails | Video Gallery tab | Use video screenshots |
| `gallery/past-*.jpg` | Past Photos tab | Historical photos |
| `gallery/album-*.jpg` | Albums tab | Album cover images |

**Gallery card format** — each photo needs:
- `data-category`: `construction`, `ceremony`, `architecture`, or `campus`
- `data-date`: `YYYY-MM` format (e.g. `2026-04`)
- Filename convention: `gallery/event-YYYY-MM-description.jpg`

## Online Service (`pages/e-seva.html`)

| Image File | Section | Notes |
|-----------|---------|-------|
| `pooja-ceremony.jpg` | Page banner (background) | Ceremony / devotion |

## General Information (`pages/contact.html`)

| Image File | Section | Notes |
|-----------|---------|-------|
| `campus-aerial.jpg` | Page banner (background) | Campus / location view |

---

## Summary — Minimum Images Needed

| File Name | Used On |
|-----------|---------|
| `hero-1.jpg` | Home slider |
| `hero-2.jpg` | Home slider |
| `hero-3.jpg` | Home slider |
| `temple-front.jpg` | Home welcome, Photo Gallery banner |
| `goddess-deity.jpg` | Home goddess section, Goddess page (banner + intro) |
| `guru-swamiji.jpg` | Goddess page guru section |
| `gopuram-main.jpg` | Temple page (banner + Agama Shastra) |
| `pillar-carving.jpg` | Temple page 1st Pragaram, News card 2 |
| `maha-mandapam.jpg` | Temple page Mandapam section |
| `construction-progress.jpg` | Temple page 2nd Pragaram, News card 1 |
| `pooja-ceremony.jpg` | News page (banner + featured), Video Gallery banner, e-Seva banner |
| `campus-aerial.jpg` | News card 3, Contact page banner |
| `gallery-1.jpg` to `gallery-6.jpg` | Home gallery scroll |
