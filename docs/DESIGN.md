# Visual Design System — Jagannath Padhi Portfolio Website

## 1. Design Philosophy
The portfolio design combines **Modern Software Engineer Portfolio + Premium SaaS UI + Clean Personal Branding**. It emphasizes high visual quality, crisp typography, dark mode glassmorphism, subtle micro-interactions, accessible light mode contrast, and a **theme-aware animated ambient background system**.

## 2. Color Tokens & Theme Palettes

### Dark Theme Palette (Default)
- **Primary Background Base**: `#0b0f19` (Deep Charcoal Blue)
- **Card Background**: `#131b2e` / `rgba(19, 27, 46, 0.9)` (Elevated Translucent Slate Blue)
- **Border Tone**: `rgba(255, 255, 255, 0.08)` / `slate-800`
- **Primary Text**: `#f8fafc` (`slate-50`)
- **Secondary Text**: `#94a3b8` (`slate-400`)
- **Accent Primary**: `#6366f1` (Indigo 500) → `#8b5cf6` (Violet 500) Gradient
- **Accent Secondary**: `#10b981` (Emerald 500) for success/status indicators
- **Ambient Glow 1 (Top-Left)**: `bg-brand-500/18` (`blur-[130px]`)
- **Ambient Glow 2 (Center-Right)**: `bg-brand-accent/15` (`blur-[140px]`)
- **Ambient Glow 3 (Bottom-Left)**: `bg-emerald-500/12` (`blur-[120px]`)
- **Grid Pattern**: Light white grid overlay at `opacity-60` with radial vignette mask

### Light Theme Palette
- **Primary Background Base**: `#f8fafc` (Soft Slate Gray)
- **Card Background**: `#ffffff` / `rgba(255, 255, 255, 0.9)` (Pure Translucent White)
- **Border Tone**: `#e2e8f0` (`slate-200`)
- **Primary Text**: `#0f172a` (`slate-900`)
- **Secondary Text**: `#475569` (`slate-600`)
- **Accent Primary**: `#4f46e5` (Indigo 600) → `#7c3aed` (Violet 600) Gradient
- **Accent Secondary**: `#059669` (Emerald 600)
- **Ambient Glow 1 (Top-Left)**: `bg-indigo-300/35` (`blur-[130px]`)
- **Ambient Glow 2 (Center-Right)**: `bg-purple-300/30` (`blur-[140px]`)
- **Ambient Glow 3 (Bottom-Left)**: `bg-sky-200/40` (`blur-[120px]`)
- **Grid Pattern**: Soft slate grid overlay at `opacity-70` with radial vignette mask

## 3. Animated Background & Cartoon Objects Architecture
- **Layering**: `fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none`
- **Components**: `AnimatedBackground.jsx`, `ThreeDObjects.jsx` & `CartoonBackgroundObjects.jsx`
- **Cartoon Developer Background Objects**:
  - **Developer Robot Mascot**: Cute 2D/3D cartoon robot with glowing antenna, eyes, and laptop (`animate-cartoon-float-1`).
  - **Flying Launch Rocket**: Cartoon space rocket with pulsing flame exhaust flying on a path (`animate-cartoon-rocket`).
  - **Steaming Developer Coffee Cup**: Cute cartoon mug with smiling face and animated rising steam clouds (`animate-cartoon-float-2`).
  - **Cartoon Saturn Planet & Star**: Glowing purple/indigo planet with Saturn rings and sparkling stars (`animate-cartoon-float-3`).
  - **Cartoon Code Bug & Zap Shield**: Cute little bug character with green checkmark shield.
- **3D Animated Geometric Objects**:
  - **3D Translucent Glass Cube (70px x 70px)**: 6 glass faces with glowing brand/indigo borders, continuously rotating in 3D (`animate-rotate-3d-1`).
  - **Mini 3D Glass Cube (45px x 45px)**: 6 glass faces with CPU/Database icons, rotating in 3D (`animate-rotate-3d-2`).
  - **3D Holographic Concentric Tech Rings**: 3D tilted concentric rings (`rotateX(68deg)`), spinning in 3D (`animate-spin-3d-ring`).
  - **3D Levitating Skill Badges & Code Particles**: Floating tech pills and code symbols (`{ }`, `</>`, `=>`).
- **Reduced Motion Behavior**: Automatically disables keyframe transforms and floating animations for users with `@media (prefers-reduced-motion: reduce)`.

## 4. Typography Hierarchy
- **Font Stack**: System UI / Inter / Outfit (`font-sans`)
- **Hero Title**: `text-4xl sm:text-6xl font-extrabold tracking-tight`
- **Section Heading**: `text-3xl font-bold tracking-tight`
- **Subheading**: `text-lg font-medium text-indigo-600 dark:text-indigo-400`
- **Body Text**: `text-base text-slate-600 dark:text-slate-300 leading-relaxed`
- **Small Badge**: `text-xs font-semibold uppercase tracking-wider`

## 5. UI Components & Micro-Interactions

### Navbar
- Glassmorphism backdrop filter (`backdrop-blur-md bg-white/75 dark:bg-slate-900/75`)
- Sticky positioning (`sticky top-0 z-50`)
- Active link pill indicator with smooth transition

### Theme Toggle
- Animated switch button with Sun/Moon icon swap
- Springy scale on hover (`hover:scale-105 transition-all`)

### Project Cards
- Elevated surface with subtle gradient border on hover (`glass-card`)
- Technology badges with category colors
- Action buttons for GitHub & Live Demo / Details modal

### Certificate Cards
- Image/preview container with hover zoom effect (`group-hover:scale-105`)
- Category badge and issuer pill
- Quick action for full modal preview & direct document download

### Timeline Items
- Vertical connector line (`bg-indigo-500/30`)
- Glowing node dot with role title, date badge, and bullet points

## 6. Responsive Breakpoints
- `sm`: `640px` (Mobile landscape)
- `md`: `768px` (Tablets)
- `lg`: `1024px` (Small laptops / desktops)
- `xl`: `1280px` (Full desktop view)
