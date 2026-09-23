# System Architecture — Jagannath Padhi Portfolio Website

## 1. Stack Overview
- **Build Tool**: Vite (Lightning-fast HMR and bundle compilation)
- **Frontend Framework**: React 18+ (Functional components, custom hooks, standard hooks)
- **State Management**: Redux Toolkit & React-Redux (Global theme state & UI overlay triggers)
- **Styling**: Tailwind CSS (Utility-first with customized color primitives and `darkMode: 'class'`)
- **Background System**: `AnimatedBackground.jsx` (Theme-aware ambient CSS keyframe glow blobs + grid pattern overlay + GPU accelerated transforms)
- **Icons**: Lucide React (Clean, accessible SVG icon primitives)
- **Routing**: React Router v6 (`BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate`, `useParams`)

## 2. Directory Structure

```text
portfolio/
├── docs/
│   ├── PROD.md
│   ├── ARCHITECTURE.md
│   ├── RULES.md
│   ├── DESIGN.md
│   ├── TASKS.md
│   └── MEMORY.MD
├── public/
│   ├── assets/
│   │   ├── certificates/
│   │   ├── documents/
│   │   ├── images/
│   │   └── projects/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── certificates/
│   │   │   └── CertificateModal.jsx
│   │   ├── common/
│   │   │   ├── AnimatedBackground.jsx
│   │   │   ├── CartoonBackgroundObjects.jsx
│   │   │   ├── HeroRoleSwitcher.jsx
│   │   │   ├── ThreeDObjects.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── projects/
│   │   │   └── ProjectCard.jsx
│   │   └── ui/
│   │       ├── Badge.jsx
│   │       ├── Button.jsx
│   │       ├── SectionHeading.jsx
│   │       └── StatCard.jsx
│   ├── data/
│   │   ├── achievements.js
│   │   ├── certificates.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── profile.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── socialLinks.js
│   ├── layouts/
│   │   └── RootLayout.jsx
│   ├── pages/
│   │   ├── About/
│   │   ├── Achievements/
│   │   ├── Certificates/
│   │   ├── Contact/
│   │   ├── Experience/
│   │   ├── Home/
│   │   ├── NotFound/
│   │   ├── ProjectDetails/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── store/
│   │   ├── slices/
│   │   │   ├── themeSlice.js
│   │   │   └── uiSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 3. Data Flow & Background Architecture

```mermaid
flowchart TD
    User([Browser User]) --> Navbar[Navbar / Mobile Menu]
    User --> PageRoutes[React Router / Routes]
    
    subgraph State Management
        ReduxStore[(Redux Store)]
        ThemeSlice[themeSlice: dark/light]
        UiSlice[uiSlice: modal/mobileMenu]
        LocalStorage[(localStorage: portfolio-theme)]
        
        ReduxStore --- ThemeSlice
        ReduxStore --- UiSlice
        ThemeSlice <--> LocalStorage
    end

    subgraph Layout & Visual Layer
        App[App Container] --> RootLayout[RootLayout Wrapper]
        RootLayout --> Background[AnimatedBackground Component]
        RootLayout --> Navbar
        RootLayout --> PageRoutes
        RootLayout --> Footer
        
        ThemeSlice -->|Subscribes to mode| Background
        Background -->|Renders Theme Glow & Grid| DOMBackground[Fixed Layer z-[-1]]
    end

    subgraph Data & Local Assets
        StaticData[(Local JS Data Files)]
        LocalAssets[(Local Assets: PNG / PDF / SVG)]
        
        PageRoutes --> StaticData
        PageRoutes --> LocalAssets
    end

    Navbar -->|Dispatch toggleTheme| ThemeSlice
    ThemeSlice -->|DOM Class Mutation| DocumentElement[document.documentElement class='dark']
```

## 4. Animated Background Integration
- **Component**: `src/components/common/AnimatedBackground.jsx`
- **Positioning**: `fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none`
- **Theme Reactivity**: Connects directly to Redux `state.theme.mode`. Toggles glowing orb colors between soft pastel tints (Light Mode) and deep vibrant ambient glows (Dark Mode).
- **CSS Performance**: GPU-accelerated keyframes (`transform`, `opacity`, `filter: blur()`).
- **Accessibility**: Includes `@media (prefers-reduced-motion: reduce)` overrides to freeze continuous CSS motion.

## 5. Deployment Pipeline
Static compilation output targeted to `dist/`.
Zero server runtime required. Fully compatible with static hosting (Vercel, Netlify, GitHub Pages).
