# Temple Admin Setup Guide
**Account to use for everything:** `samayapuramtemple.spatna@gmail.com`
**Last Updated:** April 2026

---

## Overview

All temple digital services should be set up under the dedicated temple Google account.
Do NOT use personal accounts. This keeps everything clean and transferable.

Once each item below is completed, share only the specific ID/URL/key mentioned —
never share the Gmail password.

---

## Step 1 — Google Analytics 4 (Website Visitor Tracking)

**Time needed:** 15 minutes
**Cost:** Free

1. Open browser → go to **analytics.google.com**
2. Sign in with `samayapuramtemple.spatna@gmail.com`
3. Click **Start measuring**
4. Account name: `Sri Samayapuram Mahamariamman Devasthanam`
5. Property name: `SSMT Website`
6. Select **India** as country, **Indian Rupee** as currency
7. Select **Web** as platform
8. Website URL: `arunprab.github.io/ssmt` (update to custom domain later)
9. Click **Create stream**
10. Copy the **Measurement ID** — looks like `G-XXXXXXXXXX`

**✅ Share with developer:** Measurement ID (e.g. `G-AB12CD34EF`)

---

## Step 2 — Google Sheets — Contact Form Integration

**Time needed:** 30 minutes
**Cost:** Free

### Part A — Create the Sheet
1. Go to **sheets.google.com**
2. Sign in with temple account
3. Create a new blank spreadsheet
4. Name it: `SSMT - Website Enquiries`
5. In Row 1, add these headers exactly:
   ```
   Timestamp | Name | Email | Phone | Subject | Message
   ```
6. Copy the **Spreadsheet URL** from your browser

### Part B — Set Up Apps Script
1. In the same Google Sheet → click **Extensions → Apps Script**
2. Delete all existing code in the editor
3. Paste the script provided by the developer (will be given separately)
4. Click **Save** (floppy disk icon)
5. Click **Deploy → New deployment**
6. Type: **Web app**
7. Execute as: **Me**
8. Who has access: **Anyone**
9. Click **Deploy** → Authorize when prompted
10. Copy the **Web App URL** — looks like:
    `https://script.google.com/macros/s/XXXXX.../exec`

**✅ Share with developer:** Web App URL

---

## Step 3 — Google Sheets — Seva Booking Form

**Time needed:** 20 minutes
**Cost:** Free

1. Go to **sheets.google.com**
2. Create a new blank spreadsheet
3. Name it: `SSMT - Seva Bookings`
4. In Row 1, add these headers exactly:
   ```
   Timestamp | Name | Phone | Email | Seva Type | Seva Date | Gothram | Star (Nakshatra) | Occasion | Payment Mode | Amount | Status
   ```
5. Repeat Part B above (Apps Script steps) for this sheet
6. Copy the new **Web App URL**

**✅ Share with developer:** Web App URL for Seva Bookings

---

## Step 4 — Firebase (Devotee Login + Database)

**Time needed:** 20 minutes
**Cost:** Free (up to 10,000 users/month)

1. Go to **firebase.google.com**
2. Sign in with temple account
3. Click **Create a project**
4. Project name: `ssmt-temple`
5. Disable Google Analytics for Firebase (we use GA4 separately) → click **Create project**
6. Once created → click **Web** icon (`</>`) to add a web app
7. App nickname: `SSMT Website`
8. Click **Register app**
9. You will see a code block like this — **copy the entire block**:

```javascript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

### Enable Authentication
1. In Firebase console → left sidebar → **Authentication**
2. Click **Get started**
3. Enable the following sign-in methods:
   - **Google** → toggle ON → support email: `samayapuramtemple.spatna@gmail.com` → Save
   - **Email/Password** → toggle ON → Save
   - **Phone** → toggle ON → Save

### Enable Firestore Database
1. Left sidebar → **Firestore Database**
2. Click **Create database**
3. Select **Start in test mode** → Next
4. Choose region: **asia-south1 (Mumbai)** → Enable

**✅ Share with developer:** The entire `firebaseConfig` block (9 values)

---

## Step 5 — YouTube Channel (Temple Videos)

**Time needed:** 15 minutes
**Cost:** Free

1. Go to **youtube.com**
2. Sign in with temple account
3. Click profile icon → **Create a channel**
4. Channel name: `Sri Samayapuram Mahamariamman Devasthanam`
5. Upload the two walkthrough videos:
   - `temple-exterior-walkthrough.mov`
   - `temple-interior-walkthrough.mov`
6. For each video:
   - Title: `Temple Exterior Walkthrough` / `Temple Interior Walkthrough`
   - Visibility: **Unlisted** (only people with link can watch)
7. After upload → open each video → copy the **Video ID** from the URL
   - URL looks like: `youtube.com/watch?v=XXXXXXXXXXX`
   - Video ID is the part after `?v=` (e.g. `dQw4w9WgXcQ`)

**✅ Share with developer:** Both Video IDs

---

## Step 6 — Google Business Profile (Temple on Google Maps)

**Time needed:** 30 minutes + verification (2–7 days)
**Cost:** Free

1. Go to **business.google.com**
2. Sign in with temple account
3. Search: `Sri Samayapuram Mahamariamman Devasthanam`
4. If found → click **Claim this business**
5. If not found → click **Add your business**
6. Fill in details:
   - Business name: `Sri Samayapuram Mahamariamman Devasthanam`
   - Category: `Hindu Temple`
   - Address: `No.163 & 166, Kirangur Post, Baburayanakoppalu, Srirangapatna, Mandya District – 571807`
   - Phone: `+91 97911 67265`
   - Website: `https://arunprab.github.io/ssmt`
   - Hours: Add temple timings
7. Verify ownership — Google will offer options:
   - Postcard to address (most common — takes 5–7 days)
   - Phone call verification
   - Email verification
8. Once verified → add temple photos, description

**✅ No action needed from developer — this is fully self-contained**

---

## Step 7 — Razorpay Account (Online Donations + Temple POS)

**Time needed:** 1–2 days (KYC verification)
**Cost:** Free to create; 2% transaction fee per payment

1. Go to **razorpay.com**
2. Click **Sign Up**
3. Use temple email: `samayapuramtemple.spatna@gmail.com`
4. Business type: **NGO / Trust**
5. Complete KYC — keep these documents ready:
   - Temple Trust **PAN card**
   - Temple Trust **bank account details** (account number + IFSC)
   - Trust **registration certificate**
   - **80G certificate** (if available — enables tax-exempt donation receipts)
6. Once approved → go to **Settings → API Keys**
7. Generate **Key ID** and **Key Secret**

**✅ Share with developer:** Key ID only (starts with `rzp_live_...`)
*(Never share the Key Secret)*

---

## Step 8 — Custom Domain Setup

**Time needed:** 1 session + up to 24 hours DNS propagation
**Cost:** ~₹800–1,200/year for `.org` domain

1. Purchase `srisamayapurammariammanspatna.org` from:
   - **Hostinger** (recommended — cheaper) → hostinger.in
   - or **GoDaddy** → godaddy.com
2. Log in to your domain registrar
3. Go to **DNS Settings** for the domain
4. Share **login access to DNS settings** with developer OR follow the steps provided
5. Developer will add the required DNS records pointing to GitHub Pages
6. In GitHub repo Settings → Pages → add custom domain
7. Enable **Enforce HTTPS**

**✅ Share with developer:** Access to DNS settings or the domain registrar login (temporary)

---

## Quick Reference Checklist

| # | Task | Status | What to Share |
|---|------|--------|--------------|
| 1 | Google Analytics 4 | ⬜ Pending | Measurement ID (`G-XXXXXXXXXX`) |
| 2 | Google Sheets — Contact Form | ⬜ Pending | Apps Script Web App URL |
| 3 | Google Sheets — Seva Booking | ⬜ Pending | Apps Script Web App URL |
| 4 | Firebase Setup | ⬜ Pending | `firebaseConfig` block |
| 5 | YouTube Channel + Videos | ⬜ Pending | Two Video IDs |
| 6 | Google Business Profile | ⬜ Pending | Nothing (self-contained) |
| 7 | Razorpay Account | ⬜ Pending | Key ID (`rzp_live_...`) |
| 8 | Custom Domain | ⬜ Pending | DNS settings access |

---

## Important Notes

- ✅ Use `samayapuramtemple.spatna@gmail.com` for **everything**
- ❌ Never use a personal Gmail account for temple services
- ❌ Never share the Gmail password — only share specific IDs and URLs listed above
- ✅ Firebase config values are safe to share — they are designed to be in website code
- ✅ Razorpay Key ID is safe to share — never share the Key Secret
- ✅ All free services listed above remain free at the scale of a temple website
