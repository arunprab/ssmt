# CLAUDE.md — Sri Samayapuram MahaMariamman Devasthanam Website

## Project Overview

Static temple website — HTML5, CSS3, vanilla JS. No build tools, no frameworks, no npm.

- **Live site:** https://www.srisamayapurammariammanspatna.org
- **GitHub:** https://github.com/arunprab/ssmt
- **Deployed via:** GitHub Pages (push to `main` = live)

## Running Locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

> The gallery page requires a local server — it won't work via `file://` URL.

## Key Files

| File | Role |
|------|------|
| `index.html` | Home page |
| `pages/` | All other pages (goddess, temple-structure, e-seva, news-events, gallery, contact) |
| `css/styles.css` | All styles — ~1,400 lines, single file |
| `js/main.js` | Nav, hero slider, contact form (Google Sheets), visitor counter, scroll animations |
| `js/gallery.js` | Dynamic gallery renderer (skeleton loaders, filters, lightbox, YouTube embeds) |
| `gallery-data.js` | **Only file the temple admin edits** — add photos/videos/albums here |
| `FEATURE-SPEC.md` | Spec for pending features (e-Seva, e-Hundi, Devotee Login) |
| `ADMIN-SETUP-GUIDE.md` | Setup guide for temple admin accounts |
| `PROMPT-SUMMARY.md` | Full project context including pending items and credentials table |

## Conventions

- **No frameworks, no npm** — keep it pure HTML/CSS/JS so the temple admin can maintain it without tooling
- **Single CSS file** — all styles live in `css/styles.css`; do not create separate stylesheets
- **gallery-data.js is the content API** — never hardcode gallery items in HTML; always route through this file
- **Responsive breakpoints:** 1024px, 768px, 480px (already established in styles.css)
- **Theme colors** are CSS variables in `css/styles.css` at `:root` — always use variables, not hex values directly
- **Git push:** Use `/opt/homebrew/bin/git push origin main` (avoids macOS SSL issues with system git)

## What's Pending (don't implement without credentials)

- **e-Hundi / Razorpay** — waiting for Razorpay KYC approval (`rzp_live_...` key)
- **e-Seva booking** — waiting for seva catalogue from temple committee
- **Devotee Login** — waiting for Firebase project config (7 values)

## Temple Email

`samayapuramtemple.spatna@gmail.com` — used across all contact pages; keep consistent.

## Google Analytics

Measurement ID: `G-4PE1KKZZJ2` — already wired in all pages; do not remove.
