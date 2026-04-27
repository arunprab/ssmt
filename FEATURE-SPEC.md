# Feature Specification — Sri Samayapuram Mahamariamman Devasthanam
**Status:** Pending Approval
**Last Updated:** April 2026

---

## Feature 1 — Contact Form → Google Sheets Integration

### Overview
Wire up the existing contact form on the General Information page to save submissions into a Google Sheet. The form HTML is already built — only the backend connection is missing.

### User Flow
1. Devotee fills in Name, Email, Phone, Subject, Message
2. Clicks "Send Message"
3. Data is saved to Google Sheet instantly
4. Devotee sees a success confirmation

### Technical Details
- **Method:** Google Apps Script (free, no server needed)
- **Sheet columns:** `Timestamp | Name | Email | Phone | Subject | Message`
- **Code change:** One line in `js/main.js` — replace `GOOGLE_SCRIPT_URL = ''` with the deployed Apps Script URL

### What's Needed from Temple Admin
- A Google account to create the Sheet and Apps Script
- 15 minutes to set up

### Effort
- 1 session, ~30 minutes

---

## Feature 2 — Google Analytics 4

### Overview
Replace the placeholder `G-XXXXXXXXXX` in all 9 HTML pages with the real GA4 Measurement ID to start tracking visitor data.

### What It Tracks
- Number of visitors per page
- Which pages are most visited
- Device types (mobile vs desktop)
- Location of visitors (city/country)
- How long they stay on each page

### What's Needed from Temple Admin
1. Go to analytics.google.com → create a free account
2. Add the site as a property (`arunprab.github.io/ssmt`)
3. Copy the Measurement ID (`G-XXXXXXXXXX`)
4. Share it — we replace in all pages and push to GitHub

### Effort
- 1 session, ~15 minutes

---

## Feature 3 — Devotee Login (Firebase Authentication)

### Overview
Allow devotees to create an account or sign in using their Google account or Email + Phone OTP. Once logged in, their profile (name, email, phone, city) is stored and reused across the site.

### User Flow
1. Devotee clicks **"Sign In / Register"** button in the header
2. Modal appears with options:
   - **Continue with Google** (one click, auto-fills name + email)
   - **Email + Password**
   - **Mobile OTP** (Indian phone numbers)
3. On first login → prompted to complete profile (phone, city, preferences)
4. Profile is saved to Firebase database
5. Subsequent visits → auto-recognised, name shown in header

### Pages Affected
- **All pages** — "Sign In" button in header nav
- **e-Seva page** — pre-fills name/phone on seva booking form
- **Gallery page** — (future) allow devotees to submit photos
- **New page** — "My Profile" — view seva history, donation history

### Data Stored per Devotee
| Field | Source |
|-------|--------|
| Name | Google profile / manual entry |
| Email | Google profile / manual entry |
| Phone | Manual entry / OTP verification |
| City | Manual entry |
| Seva history | Auto-logged on booking |
| Donation history | Auto-logged on payment |
| Registration date | Auto |

### Technical Details
- **Platform:** Firebase Authentication + Firestore Database (Google)
- **Free tier:** Up to 10,000 users/month, 1 GB database storage
- **Login methods:** Google SSO, Email/Password, Phone OTP
- **No backend server required** — Firebase SDK works directly in static HTML

### What's Needed from Temple Admin
1. Create a free Firebase project at firebase.google.com
2. Share the Firebase config keys (7 values)

### Effort
- 2 sessions — Login UI + Profile page

---

## Feature 4 — e-Seva (Online Pooja Booking)

### Overview
Devotees can browse available sevas (poojas, abhishekams), select one, pick a date, and submit a booking request. Bookings are logged and confirmed via email.

### Seva Catalogue (Proposed)

| Seva Name | Description | Suggested Offering |
|-----------|-------------|-------------------|
| Abhishekam | Sacred bath of the deity with milk, honey, etc. | ₹501 |
| Archana | Recitation of 108 names of the Goddess | ₹101 |
| Sahasranama Archana | Recitation of 1,000 names | ₹251 |
| Kumkumarchana | Offering of kumkum to the Goddess | ₹151 |
| Vastram | Offering of sacred cloth to the Goddess | ₹1,001 |
| Annadaan Sponsorship | Sponsor free meals for devotees | ₹2,501+ |
| Special Pooja | Full day dedicated pooja on behalf of family | ₹5,001 |

*Final seva list and amounts to be confirmed by temple administration.*

### User Flow
1. Devotee goes to **Online Service** page
2. Browses seva catalogue with descriptions and offerings
3. Selects a seva → picks a date from calendar
4. Fills in Name, Phone, Gothram, Star (Nakshatra), occasion
5. Proceeds to payment (Razorpay) OR submits booking request (manual confirmation)
6. Receives confirmation on screen + email

### Phase 1 (No Payment — Booking Request Only)
- Booking form → saved to Google Sheet
- Admin manually confirms via phone/email
- Simple to implement, no payment gateway KYC needed

### Phase 2 (With Razorpay Payment)
- Devotee pays online at time of booking
- Auto-confirmation sent after payment
- Requires Razorpay account + KYC

### Technical Details
- **Phase 1:** Google Sheets via Apps Script (same as contact form)
- **Phase 2:** Razorpay Payment JS SDK
- **Email confirmation:** EmailJS (free, 200 emails/month) or Firebase + SendGrid

### What's Needed from Temple Admin
- Approved seva list with names, descriptions, and offering amounts
- For Phase 2: Razorpay account (razorpay.com) with temple trust KYC completed

### Effort
- Phase 1: 1 session
- Phase 2: 2 sessions (after Razorpay account is ready)

---

## Feature 5 — e-Hundi (Online Donations)

### Overview
Devotees can make a one-time or recurring donation to the temple trust online using UPI, cards, or net banking.

### Donation Categories (Proposed)

| Category | Description |
|----------|-------------|
| General Donation | Towards temple construction and maintenance |
| Raja Gopuram Fund | Dedicated to 108 ft Gopuram construction (Phase 2) |
| Annadaan Fund | For free community meals |
| Goshala Fund | For cow shelter maintenance |
| Education Fund | For spreading Vedic knowledge |

### User Flow
1. Devotee clicks **"Donate"** button (available on Home, e-Seva, and footer)
2. Selects donation category and enters amount (or picks preset: ₹101 / ₹501 / ₹1,001 / Custom)
3. Enters name and email for receipt
4. Pays via Razorpay (UPI / Card / Net Banking / Wallet)
5. Receives digital receipt via email
6. Name optionally shown on **Donor Wall** on the website

### Technical Details
- **Payment Gateway:** Razorpay Donations (razorpay.com/donations)
- **Receipt:** Auto-generated by Razorpay
- **80G Tax Exemption:** If temple trust has 80G registration, Razorpay can issue 80G receipts automatically
- **No backend server required**

### What's Needed from Temple Admin
- Razorpay account with temple trust KYC (PAN, bank account)
- Confirmed donation categories and amounts
- 80G registration certificate (if applicable)

### Effort
- 1–2 sessions after Razorpay account is ready

---

## Feature 6 — Domain & Deployment

### Overview
Point the custom domain `www.srisamayapurammariammanspatna.org` to the GitHub Pages site so the website is accessible at the proper URL instead of `arunprab.github.io/ssmt`.

### Steps
1. Purchase domain from a registrar (GoDaddy / Namecheap / Google Domains)
2. Add 4 DNS A-records pointing to GitHub's IP addresses
3. Add CNAME record: `www` → `arunprab.github.io`
4. In GitHub repo Settings → Pages → add custom domain
5. Enable **Enforce HTTPS** (free SSL via Let's Encrypt)

### Cost
- Domain: ~₹800–1,200/year (`.org` domain)
- Hosting: Free (GitHub Pages)

### Effort
- 1 session (DNS propagation takes up to 24 hours)

---

## Feature 7 — Temple Point of Sale (Counter Collections)

### Overview
A tablet-based POS system at the temple counter to collect cash and UPI payments from walk-in devotees, print receipts, and automatically sync all transactions into a unified accounting ledger alongside online donations.

### Hardware Required

| Item | Recommended | Approx Cost |
|------|-------------|-------------|
| Tablet | Any Android tablet or iPad | ₹8,000–15,000 |
| Bluetooth Thermal Printer | 58mm receipt printer | ₹2,000–4,000 |
| UPI QR Standee | Printed static QR code | ₹200–500 |
| Cash Drawer (optional) | Small lockable cash box | ₹1,500–3,000 |

### Payment Methods at Counter

**Cash** — cashier enters amount manually, prints receipt.

**UPI (Static QR)** — printed QR code on standee; devotee scans and pays; cashier verifies on phone and prints receipt. Free, no setup needed.

**UPI (Dynamic QR via Razorpay POS)** — cashier enters amount on tablet; unique QR generated per transaction; auto-confirmed on payment. Recommended for higher volumes.

### Software Options

**Option 1 — Google Forms + Google Sheets (Free, immediate)**
- Cashier fills a Google Form per transaction (Name, Phone, Seva, Amount, Payment mode)
- Responses auto-saved to Google Sheet
- Print receipt via a simple Bluetooth printer app
- Best for: getting started quickly with zero cost

**Option 2 — Razorpay POS App (Recommended for Phase 1)**
- Free app on Android/iOS tablet
- Accepts UPI, cards, cash entries
- Auto-generates and sends digital receipts via SMS/email
- All counter transactions appear in the same Razorpay dashboard as online donations
- Works offline; syncs when internet is available

**Option 3 — Custom Temple POS (Phase 2)**
- Tablet interface built specifically for the temple
- Full seva catalogue with prices pre-loaded
- Cash + UPI tracking with running daily totals
- Prints branded receipts via Bluetooth
- Syncs to Firebase / Google Sheets — same database as website and devotee login
- Most control; moderate development effort

### Receipt Format

```
Sri Samayapuram Mahamariamman Devasthanam
Srirangapatna, Mandya District — 571807
------------------------------------------
Receipt No  : TMP-2026-00123
Date & Time : 26-Apr-2026  11:30 AM
------------------------------------------
Devotee     : Arun Kumar
Phone       : +91 97911 XXXXX
Seva        : Abhishekam
Date of Seva: 27-Apr-2026
------------------------------------------
Amount      : ₹501
Payment     : UPI / Cash
------------------------------------------
Om Shakti. Jai Mata Di.
Thank you for your offering 🙏
samayapuramtemple.spatna@gmail.com
```

### Unified Accounting Integration

| Transaction Source | Where It Goes |
|-------------------|--------------|
| Online e-Hundi donations | Razorpay dashboard → Google Sheets |
| Online seva bookings | Google Sheets (Apps Script) |
| Counter UPI (Razorpay POS) | Same Razorpay dashboard |
| Counter cash | Manual entry → Google Sheets |
| **All combined** | Single Google Sheet — daily / monthly reports |

### Reports Available Automatically
- Daily cash vs UPI split
- Seva-wise revenue (Abhishekam, Archana, Annadaan etc.)
- Monthly and annual totals
- Donor/devotee list with contact details
- Accessible from any device via Google account

### Recommended Stack

```
Online (Website)             Temple Counter
────────────────             ──────────────────────
Razorpay e-Hundi    ──┐      Razorpay POS App (tablet)
e-Seva booking      ──┼──→   Google Sheets (unified ledger)
Contact form        ──┘      ↓
                             Monthly report → Gmail / Admin
```

### Implementation Phases

| Phase | Scope | Effort |
|-------|-------|--------|
| Phase 1 | Static UPI QR + Google Form + Sheets | 1 session |
| Phase 2 | Razorpay POS on tablet + receipt printing | 1 session |
| Phase 3 | Custom POS integrated with website + devotee login | 2–3 sessions |

### What's Needed from Temple Admin
- Android tablet or iPad at the counter
- Bluetooth thermal printer (58mm)
- Razorpay account (shared with e-Hundi — same account)
- Approved seva catalogue with prices (shared with e-Seva feature)

---

## Implementation Order (Recommended)

| Priority | Feature | Dependency | Effort |
|----------|---------|------------|--------|
| 1 | Google Analytics 4 | GA4 account | 15 min |
| 2 | Contact Form → Google Sheets | Google account | 30 min |
| 3 | e-Seva Phase 1 (Booking only) | Seva list from admin | 1 session |
| 4 | e-Hundi (Donations) | Razorpay account + KYC | 1–2 sessions |
| 5 | Devotee Login | Firebase project | 2 sessions |
| 6 | e-Seva Phase 2 (With Payment) | Razorpay + Login done | 1 session |
| 7 | Custom Domain | Domain purchase | 1 session |
| 8 | Temple POS Phase 1 | Tablet + printer | 1 session |
| 9 | Temple POS Phase 2 | Razorpay account | 1 session |
| 10 | Temple POS Phase 3 (Custom) | After Login + e-Seva done | 2–3 sessions |

---

## Approvals Required Before Implementation

- [ ] Seva catalogue — names, descriptions, offering amounts *(temple admin)*
- [ ] Donation categories confirmed *(temple admin)*
- [ ] Razorpay account created and KYC completed *(temple trust)*
- [ ] Firebase project created and config keys shared *(tech admin)*
- [ ] Google Analytics account created and ID shared *(tech admin)*
- [ ] Domain `www.srisamayapurammariammanspatna.org` purchased *(admin)*
- [ ] 80G registration certificate available for donation receipts *(temple trust)*
- [ ] Tablet and Bluetooth thermal printer procured for temple counter *(temple admin)*
- [ ] UPI QR code (static) printed and placed at counter *(temple admin)*
