# Full Stack Developer Portfolio

A stunning, animated portfolio built with React Vite, Tailwind CSS, Framer Motion.

## 🚀 Tech Stack
- **Frontend:** React + Vite, Tailwind CSS, Framer Motion, react-type-animation, lucide-react
- **Backend (connect your own):** Node.js, Express.js, MongoDB

## 📦 Setup

```bash
npm install
npm run dev       # Development server → http://localhost:5173
npm run build     # Production build
npm run preview   # Preview production build
```

## 📁 Project Structure
```
src/
├── components/
│   ├── Navbar.jsx      # Fixed nav with scroll effect
│   ├── Hero.jsx        # Animated hero with typewriter
│   ├── About.jsx       # About + spinning avatar + stats
│   ├── Skills.jsx      # Tech stack cards + scrolling strip
│   ├── Projects.jsx    # Project cards with image upload
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx
├── data/
│   └── index.js        # ← Edit your projects & skills here
├── hooks/
│   └── useIntersection.js
└── index.css
```

## ✏️ Customization

**Update your projects** → edit `src/data/index.js`  
**Update your name/links** → search for `hello@example.com`, `https://github.com`, `https://linkedin.com`  
**Add project screenshots** → click the "📷 Screenshot" button on each project card in the browser

## 🌐 Deployment

Deploy to **Vercel** (recommended):
```bash
npm i -g vercel
vercel
```

Or **Netlify**: connect your GitHub repo and set build command `npm run build`, publish dir `dist`.
