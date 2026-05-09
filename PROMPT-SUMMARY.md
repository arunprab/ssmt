# Project Prompt Summary

**Project:** Sri Samayapuram MahaMariamman Devasthanam — Temple Website
**GitHub:** https://github.com/arunprab/ssmt
**Live URL:** https://www.srisamayapurammariammanspatna.org
**Local Path:** `/Users/arunp/Documents/claude-projects/ssmt/`
**Last Updated:** May 2026

---

## How to Continue in a New Chat

Paste this at the start of any new session:

> Referring to the SSMT temple website at `/Users/arunp/Documents/claude-projects/ssmt/` (GitHub: github.com/arunprab/ssmt, Live: https://www.srisamayapurammariammanspatna.org), I want to...

---

## Pages

| # | File | Nav Label | Description |
|---|------|-----------|-------------|
| 1 | `index.html` | Home | Hero slider, news ticker, highlights, gallery scroll, donation CTA |
| 2 | `pages/goddess.html` | About the Goddess | Goddess intro + Ashtabhuja, legend, Guru bio with quotes |
| 3 | `pages/temple-structure.html` | About the Temple | Vision & Mission, Agama Shastra, Location, Structure scroll + cards, Timelines |
| 4 | `pages/e-seva.html` | Online Service | e-Seva / e-Hundi / e-Donate — coming soon placeholder |
| 5 | `pages/news-events.html` | News & Events | Kumbhabhishekam featured, all events Upcoming |
| 6 | `pages/gallery.html` | Gallery | Tabbed: Photo Gallery, Video Gallery, Past Photos, Albums — dynamic from `gallery-data.js` |
| 7 | `pages/contact.html` | General Information | Address, contact form → Google Sheets, donation details, map |

---

## Core Files

| File | Purpose |
|------|---------|
| `css/styles.css` | All styles — grid, flexbox, responsive at 1024/768/480px, cross-browser |
| `js/main.js` | Nav, slider, contact form (Google Sheets wired), visitor counter, scroll animations |
| `js/gallery.js` | Dynamic gallery renderer — skeletons, filters, lightbox, YouTube + local video modal |
| `gallery-data.js` | **Admin edits this** to add photos/videos/albums. No coding needed. |
| `FEATURE-SPEC.md` | Full spec for all pending features (e-Seva, e-Hundi, Login, POS, Domain) |
| `ADMIN-SETUP-GUIDE.md` | Step-by-step guide for temple admin to set up Google, Firebase, Razorpay accounts |

---

## Completed Items ✅

- [x] 7-page responsive website built and live
- [x] Custom domain `www.srisamayapurammariammanspatna.org` — registered on Hostinger, HTTPS enabled
- [x] GitHub repository — github.com/arunprab/ssmt (public)
- [x] All pages deployed via GitHub Pages
- [x] Real temple photos replacing all placeholders
- [x] Dynamic gallery — 16 photos, 2 local videos, 4 albums, 4 past photos
- [x] Temple milestone timelines — 9 real milestones (Apr 2012 → Dec 2022)
- [x] Contact form → Google Sheets (`SSMT - Website Enquiries`) via Apps Script
- [x] Google Analytics 4 — Measurement ID: `G-4PE1KKZZJ2` (temple account)
- [x] Visitor counter in footer (CounterAPI — free)
- [x] Email unified to `samayapuramtemple.spatna@gmail.com` across all pages
- [x] Goddess name corrected to "Samayapuram MahaMariamman" everywhere
- [x] Banner/hero titles made white and legible over background images
- [x] Logo enlarged — 130px header, 80px footer
- [x] Paragraph text justified throughout
- [x] Cross-browser compatibility (Chrome, Firefox, Safari, Edge — desktop + mobile)
- [x] Mobile responsive — hamburger nav, touch swipe, iOS zoom fix

---

## Pending Items

### Ready to implement (waiting for credentials)
- [ ] **e-Hundi — Online Donations** → needs Razorpay Key ID (`rzp_live_...`) after KYC approval
- [ ] **e-Seva — Seva Booking Phase 1** → needs approved seva catalogue + Razorpay account
- [ ] **Devotee Login** → needs Firebase project config block (7 values)

### Admin actions needed
- [ ] **YouTube** — upload `temple-exterior-walkthrough.mov` + `temple-interior-walkthrough.mov`, share Video IDs → update `gallery-data.js`
- [ ] **Google Business Profile** — claim/verify temple on Google Maps (business.google.com)
- [ ] **Gallery captions** — review photos in `images/gallery/` and update captions in `gallery-data.js`
- [ ] **Ceremony photos** — add to `images/gallery/ceremony/` and update `gallery-data.js`
- [ ] **Kumbhabhishekam date** — update in `pages/news-events.html` and `pages/temple-structure.html` once confirmed

### Future features (see FEATURE-SPEC.md for full details)
- [ ] e-Seva Phase 2 — with Razorpay payment
- [ ] Devotee login + profile page (Firebase Auth)
- [ ] Temple POS — counter collections, receipt printing
- [ ] Seva booking Google Sheet (`SSMT - Seva Bookings`) — follow same Apps Script steps as contact form

---

## Gallery — How to Add Content

**Add a photo** — drop file in `images/gallery/<category>/` then add one line to `gallery-data.js`:
```js
{ file: 'construction/photo.jpg', caption: 'Description', category: 'construction', date: '2026-05' },
```

**Add a YouTube video:**
```js
{ embedId: 'YOUTUBE_VIDEO_ID', title: 'Video Title', category: 'architecture', duration: '5:30', date: '2026-05' },
```

**Add a local video (.mov/.mp4)** — drop in `images/videos/` then:
```js
{ localFile: 'filename.mov', title: 'Video Title', category: 'architecture', date: '2026-05' },
```

---

## Key Credentials & IDs

| Service | Value | Account |
|---------|-------|---------|
| Google Analytics 4 | `G-4PE1KKZZJ2` | samayapuramtemple.spatna@gmail.com |
| Google Sheets (Contact) | Apps Script URL in `js/main.js` | samayapuramtemple.spatna@gmail.com |
| GitHub | github.com/arunprab/ssmt | arunprab |
| Domain registrar | Hostinger | — |
| Razorpay | Pending KYC | samayapuramtemple.spatna@gmail.com |
| Firebase | Not yet created | samayapuramtemple.spatna@gmail.com |

---

## Tech Stack

HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS, Font Awesome 6.5, Google Fonts (Playfair Display + Poppins). No build tools, no frameworks, no dependencies.

---

## Git Push Command

Always use Homebrew git to push (avoids macOS SSL issues):
```
/opt/homebrew/bin/git push origin main
```
