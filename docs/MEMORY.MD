# Project Memory — Jagannath Padhi Portfolio Website

## 1. Executive Summary
- **Owner**: Jagannath Padhi
- **Education**: B.Tech in Computer Science & Engineering, Silicon University, Bhubaneswar (CGPA: 9.71/10).
- **Target Role**: Software Engineer / Full Stack Developer (Java, Spring Boot, React.js, Angular, JavaScript, Python, SQL/NoSQL).
- **Architecture**: 100% Frontend React + Vite + Tailwind CSS + Redux Toolkit + React Router. Zero backend server or database dependency.

## 2. Key Paths & Conventions
- **Documentation Hub**: `docs/` (`PROD.md`, `ARCHITECTURE.md`, `RULES.md`, `DESIGN.md`, `TASKS.md`, `MEMORY.MD`)
- **Background Component**: `src/components/common/AnimatedBackground.jsx` (Theme-aware ambient CSS keyframe glow blobs + grid pattern overlay + GPU accelerated transforms)
- **Data Modules**: `src/data/` (`profile.js`, `projects.js`, `certificates.js`, `skills.js`, `experience.js`, `education.js`, `achievements.js`, `socialLinks.js`)
- **Profile Image**: `public/assets/images/profile.jpg`
- **Project Assets**: `public/assets/projects/` (`ClimateTwinAI.png`, `connectx.png`, `ai-study-buddy.png`, `post-web-app.png`, `student-progress-tracker.png`, `rappidnet.png`, `bhunexis.png`)
- **Certificate Assets**: `public/assets/certificates/` (`1stop-certificate.png`, `academor-certificate.png`, `silicon-certificate.png`, `aiml-certificate.png`, `codeverse-certificate.png`, `java-spring-certificate.svg`)
- **Resume Location**: `public/assets/documents/Jagannath_Padhi_Resume.pdf`
- **Store Location**: `src/store/store.js`
- **Theme Storage Key**: `portfolio-theme` (values: `'dark'` | `'light'`)

## 3. Core Decisions & Enhancements
- **Redux Usage**: Used strictly for global application preferences (`themeSlice` and `uiSlice`). Static data lives in structured JS data modules to keep store lean and maintainable.
- **Local Assets Strategy**: All resume downloads, project images, and certificate previews use local imported assets.
- **Background System**: Uses CSS GPU-accelerated keyframe transforms (`blobFloat1`, `blobFloat2`, `blobFloat3`, `rotate3D1`, `spin3DRing`, `cartoonFloat1`, `cartoonRocket`) with a subtle grid overlay, 3D floating geometric objects (`ThreeDObjects.jsx`), and animated cartoon background objects (`CartoonBackgroundObjects.jsx`). Includes a floating cartoon developer robot mascot, a launching space rocket with flame exhaust, a steaming coffee mug, a cartoon Saturn planet, rotating translucent 3D glass cubes, and 3D levitating skill badges (`<React.js />`, `Java & Spring Boot`, `150+ LeetCode DSA`). In Dark Mode, renders deep charcoal `#0b0f19` with indigo/violet/emerald ambient glows. In Light Mode, renders soft slate `#f8fafc` with subtle pastel glow tints.
- [x] Responsive Navbar Architecture: Desktop view (lg: 1024px+) displays full horizontal glassmorphic header bar with links, resume button, and theme switcher. Mobile & Tablet view (<1024px) displays a responsive header with logo, theme switcher, resume download button, and a dynamic Menu toggle button. When clicked, the Menu button switches in-place to a red Cross (X) Close button while opening a slide-over sidebar drawer (`aside`) with a backdrop blur overlay, locking body scroll, rendering section icons for all navigation items, and featuring a direct PDF resume download and quick social links.
- **Accessibility & Safety**: Non-intrusive fixed positioning `z-[-1]` with `pointer-events-none`. `@media (prefers-reduced-motion: reduce)` automatically disables ambient CSS motion.

## 4. Portfolio Content Entries
- **Projects**: ClimateTwin-AI (ISRO Hackathon Digital Twin), AI Study Buddy (Streamlit & Gemini API), Online Product Order Management System (Angular & Spring Boot), Customer Lead CRM System (Angular & Spring Boot), ConnectX (Java Servlets & JSP), RappidNet (React & Supabase).
- **Experiences**: Java Full Stack Developer (Silicon University - 05/2026), Frontend Developer Intern (Silicon University - 06/2025), Frontend Developer (1Stop - 02/2025).
- **Education**: Silicon University (B.Tech CSE - 07/2024 Present, CGPA: 9.71/10), Jhadeswar +2 Science Residential Higher Secondary School (Balasore, PCM - 86%).
