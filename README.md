# 👨‍💻 Manuel Muñoz — Portfolio

Personal portfolio & resume website built with **Astro**, **Three.js**, and **Tailwind CSS**. Features a real-time 3D ASCII render, bilingual content (EN/ES), and a clean, creative layout designed to showcase professional experience and projects.

![Astro](https://img.shields.io/badge/Astro-7.1-FF5D01?logo=astro)
![Three.js](https://img.shields.io/badge/Three.js-0.185-000000?logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-4.x-06B6D4?logo=tailwindcss)
![Intlayer](https://img.shields.io/badge/i18n-Intlayer-7c3aed)

## ✨ Features

- **🎨 3D ASCII Scene** — Custom Three.js scene with real-time ASCII rendering effect, dynamic lighting, and mouse-responsive animation
- **🌐 Bilingual** — Full English/Spanish i18n via Intlayer with URL-based locale routing (`/en`, `/es`)
- **📱 Responsive** — Split layout on desktop (3D scene + content), stacked on mobile
- **📄 Resume Download** — Direct PDF download with real resume content
- **🐙 GitHub Integration** — Live contribution graph and profile link
- **💼 Professional Timeline** — Impact-oriented experience section optimized for hiring
- **🎯 SEO Ready** — Semantic HTML, meta tags, and Open Graph support

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Astro 7, React 19 |
| **3D** | Three.js, custom ASCII effect shader |
| **Styling** | Tailwind CSS 4 |
| **i18n** | Intlayer (content declarations, locale routing) |
| **Language** | TypeScript |
| **Build** | Vite, pnpm |

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The dev server runs at `http://localhost:4321`. Visit `/en` for English or `/es` for Spanish.

## 📁 Project Structure

```
src/
├── components/
│   ├── ThreeScene.astro      # 3D ASCII scene
│   ├── Navbar.astro          # Navigation + language switcher
│   ├── Footer.astro          # Contact section + social links
│   ├── LanguageSwitcher.astro
│   └── effects/
│       └── ascii.js          # ASCII rendering effect
├── layouts/
│   └── Layout.astro          # Base layout with Intlayer
├── pages/
│   └── [...locale]/
│       ├── index.astro       # Main page
│       └── index.content.ts  # Intlayer content declarations
└── styles/
    └── global.css
```

## 🌍 Internationalization

Content is managed through Intlayer `.content.ts` files, with a flat property structure for reliability. All text lives in the content declarations and is resolved at the layout level — never inside components.

```ts
// Example content declaration
about: {
  heading: t({
    en: "Turning ideas into solid code",
    es: "Convirtiendo ideas en código sólido",
  }),
}
```

## 📄 License

MIT © Manuel Muñoz
