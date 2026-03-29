# 🚀 Narasingh S Jadhav — Developer Portfolio

A **modern, interactive, and visually stunning** personal portfolio built with
React, Three.js, Framer Motion, and Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/1200x630/0a192f/64ffda?text=Portfolio+Preview)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 Dark theme with neon accents | Premium dark navy palette with cyan / purple glow |
| 🌐 3D interactive element | Floating wireframe icosahedron powered by Three.js |
| ✨ Particle background | Lightweight canvas-based particle system with mouse interaction |
| 🖱️ Custom cursor | Dot + ring cursor with hover-aware scaling (desktop only) |
| 💫 Smooth animations | Scroll-triggered animations with Framer Motion |
| 📱 Fully responsive | Mobile-first design, works beautifully on all screen sizes |
| 🔗 GitHub API integration | Dynamically fetches and displays repositories |
| 📊 LeetCode stats | Animated counters and difficulty breakdown bars |
| ✉️ Contact form | Mailto-based form with toast notifications |
| ⚡ Blazing fast | Vite build, code-split 3D, optimized assets |

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11
- **3D Graphics:** Three.js + React Three Fiber + Drei
- **Icons:** React Icons
- **Typing Effect:** react-type-animation
- **Notifications:** react-hot-toast

---

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Aspirations.jsx
│   ├── CodingProfiles.jsx
│   ├── Contact.jsx
│   ├── CustomCursor.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── ParticleCanvas.jsx
│   ├── Projects.jsx
│   ├── Scene3D.jsx
│   ├── SectionHeading.jsx
│   ├── Skills.jsx
│   └── SocialSidebar.jsx
├── data/
│   └── constants.js
├── hooks/
│   └── useGithubRepos.js
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/Nara-BIT/nara-portfolio.git
cd nara-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com), import the repository.
3. Framework preset: **Vite**.
4. Click **Deploy**.

### Netlify

1. Push the repo to GitHub.
2. Go to [netlify.com](https://netlify.com), import the repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy**.

### GitHub Pages

```bash
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

---

## 📸 Screenshots

| Hero Section | Projects |
|:---:|:---:|
| ![Hero](https://via.placeholder.com/600x400/0a192f/64ffda?text=Hero+Section) | ![Projects](https://via.placeholder.com/600x400/0a192f/64ffda?text=Projects) |

| Skills | Coding Profiles |
|:---:|:---:|
| ![Skills](https://via.placeholder.com/600x400/0a192f/64ffda?text=Skills) | ![Coding](https://via.placeholder.com/600x400/0a192f/64ffda?text=LeetCode+Stats) |

---

## ⚙️ Customization

| What to change | Where |
|---|---|
| Personal info, skills, stats | `src/data/constants.js` |
| GitHub username | `src/hooks/useGithubRepos.js` |
| Email address | `src/components/SocialSidebar.jsx` & `Contact.jsx` |
| Colors & fonts | `tailwind.config.js` & `src/index.css` |
| 3D geometry | `src/components/Scene3D.jsx` |
| Resume PDF | `public/resume.pdf` |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contact

- **GitHub:** [Nara-BIT](https://github.com/Nara-BIT)
- **LinkedIn:** [Narasingh S Jadhav](https://www.linkedin.com/in/narasingh-s-jadhav-0031a7245/)
- **LeetCode:** [BrawlyNara007](https://leetcode.com/u/BrawlyNara007/)
- **Instagram:** [@narasinghjadhav03](https://www.instagram.com/narasinghjadhav03/)
- **Portfolio Repo:** [nara-portfolio](https://github.com/Nara-BIT/nara-portfolio)

---

<p align="center">
  Built with 💚 by <strong>Narasingh S Jadhav</strong>
</p>