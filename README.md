# WebX Tasarım

Modern React + Vite portföy ve müşteri kazanım sitesi.

## Kurulum

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # dist/ klasörü oluşur
npm run preview    # production önizleme
```

## Tech Stack

- **React 18** – UI
- **Vite 5** – Build tool (CRA'dan ~10x hızlı)
- **React Router v6** – Client-side routing
- **CSS Modules / Global CSS** – Styling

## İçerik Güncelleme

Tüm içerik `src/data/index.js` içinde:

```js
export const WA_NUMBER   = '905319621482';
export const PHONE_DISPLAY = '+90 531 962 14 82';
export const EMAIL       = 'yldzzmustafaa.98@gmail.com';
```

## Deployment

```bash
npm run build
# dist/ → Vercel / Netlify / cPanel
```
