# React App with Tailwind CSS, Redux Toolkit & Axios

Bu loyiha React, Tailwind CSS, Redux Toolkit va Axios bilan yaratilgan.

## O'rnatish

```bash
npm install
```

## Ishga tushirish

Development server:
```bash
npm run dev
```

Production build:
```bash
npm run build
```

## Texnologiyalar

- **React 18** - UI kutubxonasi
- **Vite** - Build tool
- **Tailwind CSS** - CSS framework
- **Redux Toolkit** - State management
- **Axios** - HTTP client

## Loyiha strukturi

```
react-app/
├── src/
│   ├── components/     # React komponentlar
│   ├── store/          # Redux store va slice'lar
│   │   └── slices/     # Redux slice'lar
│   ├── services/       # API xizmatlari
│   ├── utils/          # Utility funksiyalar
│   ├── App.jsx         # Asosiy komponent
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static fayllar
├── package.json
└── vite.config.js
```

## Foydalanish

### Redux Store

Store `/src/store/store.js` faylida sozlangan. Yangi slice qo'shish uchun:

1. `src/store/slices/` papkasida yangi slice yarating
2. `store.js` faylida import qiling va reducer'ga qo'shing

### API Service

Axios instance `/src/services/api.js` faylida sozlangan. API so'rovlarini shu orqali amalga oshiring:

```javascript
import { apiService } from './services/api'

// GET request
const data = await apiService.get('/endpoint')

// POST request
const response = await apiService.post('/endpoint', { data })
```

### Tailwind CSS

Tailwind CSS sozlangan va ishga tayyor. Komponentlarda Tailwind class'larini ishlatishingiz mumkin.
