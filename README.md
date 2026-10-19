<div align="center">

# ✨ LUMIO: Modern Landing Page

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-005CFE?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwindcss-36b7f0?style=for-the-badge&logo=tailwindcss&logoColor=white)
![npm](https://img.shields.io/badge/npm-c53535?style=for-the-badge&logo=npm&logoColor=white)

</div>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#started">Getting Started</a> •
 <a href="#stack">Tech Stack</a> •
 <a href="#routes">Routes</a>
</p>

## 📌 About

A clean, minimal and fully responsive landing page built with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS v4**. Styled using **shadcn/ui** components with built-in light/dark theme support.

## ✨ Features

- **Minimal Landing Design** – Sleek hero section with clear call-to-action
- **Responsive UI** – Mobile-first layout that adapts across all screen sizes
- **Dark/Light Mode** – Seamless theme switching powered by `next-themes`
- **Reusable UI Components** – Built with shadcn/ui for consistency and scalability
- **Modern Typography** – Optimized fonts with `next/font`
- **Accessible & Clean** – Focused on UX, readability and performance

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher recommended)
- [Git](https://git-scm.com)
- [npm](https://www.npmjs.com)

### Cloning

```bash
git clone https://github.com/bekzival/lumio.git
```

### Installing & Running

```bash
cd lumio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

| Technology                                                  | Purpose                                    |
| ----------------------------------------------------------- | ------------------------------------------ |
| [Next.js 16](https://nextjs.org/)                           | Full-stack React framework with App Router |
| [React 19](https://react.dev/)                              | UI component library                       |
| [TypeScript](https://www.typescriptlang.org/)               | Static type safety                         |
| [Tailwind CSS v4](https://tailwindcss.com/)                 | Utility-first styling                      |
| [shadcn/ui](https://ui.shadcn.com/)                         | Headless, accessible UI components         |
| [next-themes](https://github.com/pacocoursey/next-themes)   | Theme management (dark/light/system)       |
| [lucide-react](https://lucide.dev/)                         | Icon library                               |
| [clsx](https://github.com/lukeed/clsx)                      | Conditional classNames                     |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Merge Tailwind classes without conflicts   |
| [class-variance-authority](https://cva.style/)              | Component variant styling                  |

## 📍 Routes

| Route | Description       |
| ----- | ----------------- |
| `/`   | Home/Landing page |

## 📂 Project Structure

```text
lumio/
├── app/          # Next.js App Router (layout, page, globals)
├── components/   # Reusable UI components (shadcn/ui)
├── lib/          # Utility functions
└── public/       # Static assets
```
