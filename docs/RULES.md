# Project Rules & Development Standards — Jagannath Padhi Portfolio Website

## 1. Zero Backend Requirement
- **RULE 1.1**: The website MUST be 100% frontend-only. Never introduce Express, Spring Boot backends, Node servers, or databases (Firebase, MongoDB, SQL) for website execution.
- **RULE 1.2**: All portfolio data (projects, skills, experiences, certifications) MUST be defined in structured local JavaScript files in `src/data/`.
- **RULE 1.3**: All media assets (resume PDF, avatar, project thumbnails, certificate preview files) MUST be stored inside `public/assets/`. External CDN URLs must be avoided for core assets.

## 2. React & Redux Coding Standards
- **RULE 2.1**: Use React functional components with named exports or explicit default page exports.
- **RULE 2.2**: Use Redux Toolkit (`createSlice`, `configureStore`) for global application state (`themeSlice`, `uiSlice`).
- **RULE 2.3**: Component-specific temporary state (e.g., search box input, hover active index) MUST stay in local component React state (`useState`). Do not clutter Redux.
- **RULE 2.4**: No inline functions inside high-frequency mapped render loops without necessity. Keep component renders clean and deterministic.

## 3. Background System & Design Rules
- **RULE 3.1**: The background system MUST be non-intrusive, subtle, and theme-aware. It must never distract from content or reduce text contrast.
- **RULE 3.2**: Decorative background layers MUST use `pointer-events-none` and `z-[-1]` fixed positioning so they never block user interactions or create horizontal scrollbars.
- **RULE 3.3**: Background animations MUST use GPU-accelerated CSS properties (`transform`, `opacity`, `filter: blur()`). Avoid heavy JS particle engines that cause render lag.
- **RULE 3.4**: Background animations MUST respect `@media (prefers-reduced-motion: reduce)` by freezing continuous CSS motion while preserving static blurred glows.

## 4. Documentation Maintenance
- **RULE 4.1**: Whenever architectural, feature, or design decisions change, update the corresponding markdown file in `docs/` (`PROD.md`, `ARCHITECTURE.md`, `RULES.md`, `DESIGN.md`, `TASKS.md`, `MEMORY.MD`).
- **RULE 4.2**: Keep `docs/TASKS.md` synchronized after completing features.
- **RULE 4.3**: Do not leave stale documentation describing non-existent or deleted features.

## 5. Accessibility & Responsiveness
- **RULE 5.1**: All interactive elements (buttons, links, toggles) MUST have accessible labels (`aria-label`) or clear text.
- **RULE 5.2**: Keyboard navigation MUST function across all interactive elements (focus visible rings).
- **RULE 5.3**: Viewport horizontal scrolling (`overflow-x`) is strictly forbidden on mobile breakpoints.
