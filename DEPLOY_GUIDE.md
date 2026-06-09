# Navodaya Girls Hostel — Vercel Deployment Guide

## What's inside this folder

```
navodaya-hostel/
├── src/
│   ├── pages/        → Home, About, Rooms, Amenities, Gallery, Contact, Booking
│   ├── components/   → Navbar, Footer, all UI components
│   ├── lib/
│   │   └── whatsapp.ts  → Booking & Contact → WhatsApp (+91 98870 66664)
│   └── App.tsx, main.tsx, index.css
├── public/
│   ├── images/gallery/  → 14 hostel photos
│   └── videos/          → 4 video slots (rooms, common-areas, facilities, exterior)
├── vercel.json       → SPA routing (required for page refresh to work)
├── package.json      → All dependencies (no workspace deps)
├── vite.config.ts    → Works on both Replit + Vercel
└── tsconfig.json     → Standalone TypeScript config
```

---

## Step 1 — Install Node.js & Git

Download and install:
- **Node.js v18+**: https://nodejs.org
- **Git**: https://git-scm.com

---

## Step 2 — Test Locally

Open Terminal / Command Prompt in this folder:

```bash
npm install
npm run dev
```

Open browser: **http://localhost:3000** — site should load perfectly!

Build test (same as Vercel runs):
```bash
npm run build
```

If build succeeds, you're ready to deploy.

---

## Step 3 — Add Your Videos (Optional)

Replace placeholder files in `public/videos/` with your real videos:

| Replace this file | With your video of |
|---|---|
| `rooms-tour.mp4` | Room walkthrough |
| `common-areas-tour.mp4` | Study room, dining, lounge |
| `facilities-tour.mp4` | Gym, laundry, security |
| `exterior-tour.mp4` | Building exterior, garden |

**Keep exact file names** — just replace the content.

---

## Step 4 — Push to GitHub

1. Go to **https://github.com** → Sign up / Login
2. Click **"+"** → **"New repository"**
3. Name: `navodaya-hostel` → Click **"Create repository"**
4. Run these commands in Terminal (inside this folder):

```bash
git init
git add .
git commit -m "Navodaya Girls Hostel - Initial deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/navodaya-hostel.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your GitHub username shown on github.com

---

## Step 5 — Deploy on Vercel

1. Go to **https://vercel.com** → Login with GitHub
2. Click **"Add New Project"**
3. Find and click your `navodaya-hostel` repository → **"Import"**
4. Vercel auto-detects Vite — **no settings to change**
5. Click **"Deploy"** → Wait 1-2 minutes

✅ Done! Your site is live at:
**`https://navodaya-hostel.vercel.app`**

---

## Step 6 — Custom Domain (Optional)

If you have a domain like `navodayagirlshostel.com`:

1. Vercel Dashboard → Your Project → **Settings → Domains**
2. Type your domain → **"Add"**
3. Copy the DNS records Vercel gives you
4. Go to your domain registrar (GoDaddy, Namecheap, etc.)
5. Update DNS records as instructed
6. Wait 10-30 minutes → domain goes live!

---

## Updating the Website Later

Any change you make → push to GitHub → Vercel auto-deploys in 1 minute:

```bash
git add .
git commit -m "Updated content"
git push
```

---

## Change WhatsApp Number

Open `src/lib/whatsapp.ts`:
```javascript
const WHATSAPP_NUMBER = "919887066664";
// Change to your number (country code + number, no + sign)
// Example for India: "91XXXXXXXXXX"
```

---

## Vercel Build Settings (Auto-detected)

| Setting | Value |
|---|---|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node.js Version | 18.x or 20.x |
