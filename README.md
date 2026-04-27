# Sri Samayapuram Mahamariamman Devasthanam — Website

Official website for the Sri Samayapuram Mahamariamman Devasthanam temple project at Srirangapatna, Mandya District, Karnataka.

---

## Quick Start

No build tools needed. Open directly in a browser or serve locally:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000`

> **Note:** The gallery page requires a local server (not `file://`) because it loads `gallery-data.js` dynamically. All other pages work with direct file open.

---

## Project Structure

```
ssmt/
├── index.html                    # Home page
├── ssmt-logo.jpg                 # Temple logo
├── gallery-data.js               # Gallery content — edit to add photos/videos
├── IMAGE-GUIDE.md                # Image file naming reference
├── PROMPT-SUMMARY.md             # AI session context for future iterations
├── README.md                     # This file
├── Temple-Info.docx              # Source content (temple brochure)
│
├── css/
│   └── styles.css                # All styles (~1,400 lines, fully responsive)
│
├── js/
│   ├── main.js                   # Core JS — slider, nav, scroll animations
│   └── gallery.js                # Gallery renderer — reads gallery-data.js
│
├── pages/
│   ├── goddess.html              # About the Goddess
│   ├── temple-structure.html     # About the Temple (Vision, Agama Shastra, Structure)
│   ├── e-seva.html               # Online Service (coming soon)
│   ├── news-events.html          # News & Events
│   ├── gallery.html              # Gallery (dynamic, powered by gallery-data.js)
│   ├── contact.html              # General Information + Map + Contact Form
│   ├── photo-gallery.html        # Legacy standalone photo gallery
│   └── video-gallery.html        # Legacy standalone video gallery
│
└── images/
    ├── hero-1.jpg                # Home page slider images
    ├── hero-2.jpg
    ├── hero-3.jpg
    ├── goddess-deity.jpg
    ├── guru-swamiji.jpg
    ├── gopuram-main.jpg
    ├── temple-front.jpg
    ├── pillar-carving.jpg
    ├── maha-mandapam.jpg
    ├── construction-progress.jpg
    ├── pooja-ceremony.jpg
    ├── campus-aerial.jpg
    ├── gallery-1.jpg → gallery-6.jpg  # Home page gallery scroll
    ├── structure-1.jpg → structure-7.jpg  # Temple structure page scroll (add when ready)
    │
    ├── gallery/                  # Gallery page photos (organised by category)
    │   ├── construction/         # Drop construction photos here
    │   ├── ceremony/             # Drop ceremony photos here
    │   ├── architecture/         # Drop architecture photos here
    │   ├── campus/               # Drop campus/location photos here
    │   └── past/                 # Historical/archival photos
    │
    └── videos/
        └── thumbnails/           # Video thumbnail images
```

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Semantic markup, accessibility |
| CSS3 | Custom properties, Grid, Flexbox, `@keyframes`, responsive breakpoints |
| Vanilla JS | Slider, gallery renderer, lightbox, filters, animations (no frameworks) |
| Font Awesome 6.5 | Icons (CDN) |
| Google Fonts | Playfair Display + Poppins (CDN) |

---

## Features

- **Responsive** — breakpoints at 1024px, 768px, 480px + mobile nav
- **Hero Slider** — Auto-play, dots, prev/next arrows
- **Dynamic Gallery** — Reads `gallery-data.js`; skeleton loaders, staggered animations, search, filters, touch-swipe lightbox, YouTube embed
- **News Ticker** — CSS `@keyframes` animation (cross-browser, no `<marquee>`)
- **Scroll Animations** — Cards animate in on scroll (IntersectionObserver with fallback)
- **Sticky Header + Sub-nav** — Stays visible on scroll (`-webkit-sticky` prefixed)
- **Back to Top** — Appears after scrolling 400px
- **Contact Form** — With Google Sheets integration placeholder
- **Google Maps** — Embedded with exact temple coordinates (12.4216, 76.7141)
- **Cross-browser** — Chrome, Firefox, Safari, Edge (desktop + mobile/iOS)

---

## Managing Gallery Content

All gallery content is managed through one file: **`gallery-data.js`**

### Adding a Photo

1. Drop the image into the correct subfolder:
   ```
   images/gallery/construction/my-photo.jpg
   ```
2. Add one line to the `photos` array in `gallery-data.js`:
   ```js
   { file: 'construction/my-photo.jpg', caption: 'Foundation work', category: 'construction', date: '2026-04' },
   ```

**Categories:** `construction` | `ceremony` | `architecture` | `campus`

### Adding a Video

1. Upload a thumbnail to `images/videos/thumbnails/`
2. Get the YouTube video ID from the URL (e.g. `youtube.com/watch?v=XXXXX` → ID is `XXXXX`)
3. Add to the `videos` array in `gallery-data.js`:
   ```js
   { thumbnail: 'thumbnails/my-thumb.jpg', embedId: 'XXXXX', title: 'Temple Tour', category: 'construction', duration: '5:30', date: '2026-04' },
   ```

### Adding an Album

Add to both `albums` and `past` arrays in `gallery-data.js`:
```js
// In albums:
{ id: 'navaratri-2025', name: 'Navaratri 2025', cover: 'past/cover.jpg', count: 12, year: '2025' },

// In past:
{ file: 'past/photo1.jpg', caption: 'Navaratri evening', year: '2025', category: 'ceremony' },
```

---

## Theme Colors

Edit CSS variables at the top of `css/styles.css`:

```css
:root {
    --primary:      #b8860b;   /* Gold */
    --primary-dark: #8b6508;
    --secondary:    #8b0000;   /* Dark Red */
    --accent:       #d4af37;   /* Bright Gold */
    --bg:           #fdf8f0;   /* Warm White */
    --bg-alt:       #f5ede0;
}
```

---

## Updating News & Events

Edit `pages/news-events.html` directly:
- Add new `.timeline-item` blocks for upcoming events
- Add new `.news-card` blocks for news articles

---

## Contact Form Setup (Google Sheets)

1. Create a Google Sheet with columns: `timestamp`, `name`, `email`, `phone`, `subject`, `message`
2. Open Apps Script (Extensions → Apps Script) and deploy as a web app
3. Set `Execute as: Me`, `Access: Anyone`
4. Copy the web app URL into `js/main.js`:
   ```js
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
   ```

---

## Deployment

Static site — deploy anywhere:

```bash
# Netlify (drag & drop the folder, or via CLI)
netlify deploy --dir=. --prod

# GitHub Pages
git init && git add . && git commit -m "Initial commit"
# Push to GitHub → Settings → Pages → Deploy from branch

# Any web host
# Upload all files to the web root via FTP/cPanel
```

---

## License

Built for Sri Samayapuram Mariamman Temple Trust (NGO). All rights reserved.
