# 🍽️ Noory — A Modern Food Brand Landing Page

Noory is a modern, minimalistic landing page inspired by [eatnourie.com](https://www.eatnourie.com/) — rebuilt from scratch using **React**, **TypeScript**, and **Tailwind CSS**.

The project features:

- A clean, responsive layout
- Opposite color scheme to the original site
- Smooth animations and transitions
- Light & Dark mode support
- Component-driven architecture

---

## 🖼️ Color Scheme

| Element             | Original (Nourie)   | Noory (Light)        | Noory (Dark)         |
| ------------------- | ------------------- | -------------------- | -------------------- |
| Background          | White / Light Cream | #111827 (Near Black) | #F8F9FA (Light Gray) |
| Primary Text        | Black               | #F8F9FA (White)      | #111827 (Black)      |
| Accent / Highlight  | Soft Beige / Nude   | #6EE7B7 (Mint Green) | #10B981 (Emerald)    |
| CTA Buttons / Links | Black               | #6EE7B7              | #10B981              |
| Subtle Backgrounds  | Off White           | #1F2937              | #E5E7EB              |

> ✨ The color scheme is inverted to give **Noory** a modern, high-contrast aesthetic.

---

## 🛠️ Tech Stack

- ⚛️ **React** — Frontend framework
- 🟦 **TypeScript** — Strong typing
- 🎨 **Tailwind CSS** — Styling and responsive design
- 🌙 **Dark Mode Toggle** — via Tailwind’s dark variant
- ✨ **Framer Motion** _(optional)_ — for smooth animations

---

## 📁 Project Structure

```bash
noory/
├── src/
│ ├── assets/ # Images, icons, and illustrations
│ ├── components/ # Reusable UI components
│ ├── sections/ # Page sections (Hero, About, etc.)
│ ├── hooks/ # Custom React hooks
│ ├── context/ # Theme and state context
│ ├── pages/ # Page components
│ ├── styles/ # Global styles (if needed)
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── public/
│ └── favicon.ico
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/noory.git
cd noory
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:5173 to view the app.

<!-- ## 🧰 Features to Implement

- [ ] Hero section with opposite color palette
- [ ] About / Story section
- [ ] Product showcase grid
- [ ] Contact / Newsletter form
- [ ] Responsive Navbar & Footer
- [ ] Light / Dark mode toggle
- [ ] Scroll animations with Framer Motion
- [ ] SEO-friendly meta tags

--- -->

## 🌓 Dark Mode Support

Dark mode is handled via Tailwind’s `dark:` variant.  
You can toggle themes using context or a simple state toggle.

Example usage:

```tsx
<div className="bg-white text-black dark:bg-gray-900 dark:text-white">
  Hello Noory!
</div>
```

## How it works:

- Tailwind detects the dark class on the root element (<html> or <body>).
- You can use a toggle button to switch themes.
- The user’s preference can be saved in localStorage for persistence.

## 🪄 Customization

1. ### Update Colors

   Edit tailwind.config.js to set your own theme.extend.colors.

2. ### Fonts & Typography
   Add fonts in index.css or import from Google Fonts.
3. ### Images
   Replace placeholder assets in src/assets/ with your real images.
4. ### Layout Tweaks
   Modify spacing, breakpoints, or animations as needed.

## 🧭 Deployment

You can deploy this project easily using modern hosting services:

### 🚀 Vercel

- Push your code to GitHub.
- Go to vercel.com

### 🌿 Netlify

- Push your code to GitHub.
- Go to netlify.com

### 🐙 GitHub Pages

1. Build the project:

```bash
npm run build
```

2. Deploy the dist/ folder using GitHub Pages or a GitHub Action.

## 🧪 Recommended Libraries

- Framer Motion - for smooth animations
- React Icons - for icons
- Headless UI- for accessible UI components

## 📜 License

This project is open source and available under the MIT License

## 👨‍💻 Author

Built with ❤️ by [Enda Rae]
