# Quantum Solutions

Visit here: [Quantum Solutions](https://quantum-portfolio-alpha.vercel.app/)

This is my personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It showcases my projects, skills, and experience as a web developer. The site is fully responsive and deployed on **Vercel**.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🖥️ Features

- Modern, responsive design
- Project showcase section
- About me and contact sections
- SEO-friendly with dynamic head tags
- Fast loading and optimized performance

## 📦 Getting Started

To run this project locally:

```bash
git clone https://github.com/quantumcassiopeia/quantum-portfolio.git
cd quantum-portfolio
npm install
npm run dev
```

## 📂 Structure

```
├── .gitignore
├── README.md
├── eslint.config.mjs
├── messages
    ├── en.json
    └── pt-BR.json
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
    ├── animations
    │   ├── check.json
    │   ├── contact.json
    │   ├── crossplatform.json
    │   ├── fast.json
    │   ├── intuitive.json
    │   ├── maintenance.json
    │   ├── search.json
    │   └── team.json
    ├── cases
    │   ├── 1
    │   │   ├── case1.png
    │   │   ├── pageCover.jpeg
    │   │   └── video.webm
    │   ├── 2
    │   │   └── case2.png
    │   ├── 3
    │   │   └── case3.png
    │   └── 4
    │   │   └── case4.png
    ├── fonts
    │   └── switzer
    │   │   ├── Switzer-Medium.woff2
    │   │   ├── Switzer-MediumItalic.woff2
    └── pdfs
    │   ├── curriculo.pdf
    │   └── resume.pdf
├── src
    ├── app
    │   ├── [locale]
    │   │   ├── Providers.tsx
    │   │   ├── about-us
    │   │   │   └── page.tsx
    │   │   ├── cases
    │   │   │   ├── [slugs]
    │   │   │   │   └── page.tsx
    │   │   │   └── page.tsx
    │   │   ├── contact
    │   │   │   └── page.tsx
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   └── favicon.ico
    ├── components
    │   ├── AnimatedLottie.tsx
    │   ├── Button.tsx
    │   ├── CardAdvantages.tsx
    │   ├── CardCreativeCases.tsx
    │   ├── Form.tsx
    │   ├── HamburgerMenu.tsx
    │   ├── LocaleSwitcher.tsx
    │   ├── Navbar.tsx
    │   ├── SocialMediaLinks.tsx
    │   ├── TextAnimation.tsx
    │   ├── ThemeSwitcher.tsx
    │   └── UnderMaintenance.tsx
    ├── i18n
    │   ├── navigation.ts
    │   ├── request.ts
    │   └── routing.ts
    ├── layout
    │   ├── Footer.tsx
    │   └── Header.tsx
    └── middleware.ts
└── tsconfig.json

```
