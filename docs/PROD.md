# Product Specification — Jagannath Padhi Portfolio Website

## 1. Product Vision
To showcase **Jagannath Padhi**, a Computer Science and Engineering student at Silicon University (Bhubaneswar), as a professional, full-stack, and software engineering candidate through a modern, fast, responsive, and visually stunning personal portfolio.

## 2. Target Users & Audience
- **Tech Recruiters & Talent Acquisition Specialists**: Seeking CSE undergraduates with strong frontend, Java, Spring Boot, and React skills.
- **Engineering Managers & Tech Leads**: Evaluating code structure, project complexity, problem-solving, and practical technical execution.
- **College Faculty & Mentors**: Evaluating academic projects, internships, hackathon achievements, and technical certifications.
- **Peer Developers & Collaborators**: Exploring open-source projects and professional networking.

## 3. Core Objectives
- Present a **100% frontend-only static web application** with zero backend dependency.
- Offer **instant local loading** of all project details, certificate view/downloads, and resume access.
- Provide a **seamless Dark & Light theme experience** persisted globally via Redux Toolkit and `localStorage`.
- Feature a **premium, theme-aware animated background system** with ambient glowing blobs, grid overlay, and GPU-accelerated motion.
- Highlight key full-stack and CSE competencies across Java, Spring Boot, React.js, Angular, MySQL, MongoDB, and Python.

## 4. Feature Matrix
| Feature | Description | Status |
| :--- | :--- | :--- |
| **Hero & Branding** | Modern greeting, tagline, profile image, quick CTA buttons (Projects, Resume, Contact) | Implemented |
| **Animated Background** | Theme-aware ambient glowing blobs, subtle grid pattern, floating light dots & reduced-motion support | Implemented |
| **Quick Stats** | Highlighting key milestones: 9.71 CGPA, 150+ LeetCode DSA, 3+ Internships, Top Hackathon Ranks | Implemented |
| **Theme System** | Redux-backed global Dark/Light toggle with instant sync and local storage persistence | Implemented |
| **Projects Showcase** | Interactive filtering (All, React, Java, Spring Boot, AI/ML, Full Stack), detail modal & routes | Implemented |
| **Certificate Viewer** | Filterable catalog with high-resolution modal preview and direct local download | Implemented |
| **Experience Timeline** | Chronological timeline of internships (Silicon University, 1Stop, Academor) | Implemented |
| **Categorized Skills** | Structured layout covering Languages, Frontend, Backend, Databases, Tools, CS Core | Implemented |
| **Direct Contact** | One-click copy email, mailto link, LinkedIn, GitHub, downloadable PDF resume | Implemented |
| **Responsive Nav** | Glassmorphism sticky navbar with animated mobile drawer menu | Implemented |
| **404 Page** | Dynamic theme-aware page not found fallback | Implemented |

## 5. Non-Functional Requirements
- **Performance**: 95+ Lighthouse score, sub-second route transitions, GPU-accelerated CSS animations (`transform`, `opacity`, `blur`).
- **Accessibility**: Keyboard navigable, clear focus rings, WCAG AAA color contrast ratios, `prefers-reduced-motion` animation freezes.
- **SEO**: Semantic HTML5 tags (`header`, `main`, `section`, `footer`), descriptive meta tags, OpenGraph structured headers.
- **Maintainability**: Centralized data modules in `src/data/` allowing new projects/certificates to be added by updating simple JS files.

## 6. Asset Management Strategy
- Resume PDF stored at `public/assets/documents/Jagannath_Padhi_Resume.pdf`.
- Images & Certificate previews stored locally under `public/assets/`.
- Zero dependence on external media CDN or cloud storage buckets.
