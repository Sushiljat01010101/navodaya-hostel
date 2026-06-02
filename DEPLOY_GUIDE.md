# Navodaya Girls Hostel — Vercel Deployment Guide

## Folder Structure

```
navodaya-hostel-vercel/
├── public/
│   └── images/
│       └── gallery/          ← Hostel photos (already copied)
├── src/
│   ├── components/
│   │   ├── ui/sonner.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── telegram.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Rooms.tsx
│   │   ├── Amenities.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── Booking.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json              ← Handles SPA routing on Vercel
└── .gitignore
```

---

## Step 1: GitHub Account Banao

1. Jao **https://github.com** → "Sign up" karo
2. Username, Email, Password dalo → Account verify karo

---

## Step 2: New Repository Banao

1. GitHub pe login karo
2. Right side pe "+" button → **"New repository"** click karo
3. Repository name: `navodaya-hostel`
4. **Public** select karo
5. **"Create repository"** click karo

---

## Step 3: Files Upload Karo (Sabse Easy Tarika)

### Option A — GitHub Website se Upload (No coding needed)

1. Repository mein "uploading an existing file" click karo
2. `navodaya-hostel-vercel/` folder ki **saari files** drag & drop karo
   - `public/` folder
   - `src/` folder
   - `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`
   - `vercel.json`, `.gitignore`, `index.html`
3. "Commit changes" click karo

### Option B — Git CLI se (Faster)

```bash
# navodaya-hostel-vercel folder mein jao
cd navodaya-hostel-vercel

# Git initialize karo
git init
git add .
git commit -m "Initial commit — Navodaya Girls Hostel"

# GitHub se link karo (apna username dalo)
git remote add origin https://github.com/YOUR_USERNAME/navodaya-hostel.git
git branch -M main
git push -u origin main
```

---

## Step 4: Vercel Account Banao

1. Jao **https://vercel.com** → **"Sign Up"**
2. **"Continue with GitHub"** click karo — GitHub account se login karo
3. Vercel aur GitHub ko connect karne ki permission do

---

## Step 5: Vercel pe Deploy Karo

1. Vercel Dashboard mein **"Add New → Project"** click karo
2. GitHub repositories list mein **`navodaya-hostel`** dhundo → **"Import"** click karo
3. Settings page ayega — sab default rehne do:
   - **Framework Preset**: Vite (automatically detect hoga)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. **"Deploy"** button click karo
5. **2-3 minutes** mein deploy ho jayegi!

---

## Step 6: Website Live!

Deploy hone ke baad Vercel ek URL dega jaise:
```
https://navodaya-hostel.vercel.app
```

Ye URL kisi ko bhi share kar sakte ho!

---

## Custom Domain Lagana (Optional)

Agar tumhare paas `navodayagirlshostel.com` domain hai:

1. Vercel Dashboard → Project → **"Settings"** → **"Domains"**
2. Apna domain type karo → **"Add"**
3. Domain registrar (GoDaddy/Namecheap) mein DNS settings update karo:
   - **Type**: CNAME
   - **Name**: www (ya @)
   - **Value**: `cname.vercel-dns.com`
4. 24 hours mein live ho jayega

---

## Kuch Aur Update Karna Ho?

Jab bhi website mein changes karo:
1. Files update karo
2. GitHub pe push karo / re-upload karo
3. Vercel **automatically** redeploy kar dega!

---

## Telegram Notifications

Jab koi booking ya contact form bharta hai:
- Hostel ko **Telegram pe instant message** aata hai
- Bot Token aur Chat ID `src/lib/telegram.ts` mein already set hai

---

## Local Testing (Development)

```bash
cd navodaya-hostel-vercel
npm install
npm run dev
```

Browser mein khulega: `http://localhost:5173`
