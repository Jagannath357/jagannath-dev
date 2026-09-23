# Jagannath Padhi — Personal Portfolio Website

A modern, fast, responsive, and visually stunning **100% frontend personal portfolio website** designed for **Jagannath Padhi** (Computer Science & Engineering Student at Silicon University, Bhubaneswar | Aspiring Software Engineer & Full Stack Developer).

![Portfolio Banner](/assets/images/profile.svg)

---

## 🚀 Key Features

- **100% Frontend Architecture**: Zero backend server or external database dependency. Deployable directly to Netlify, Vercel, or GitHub Pages.
- **Global Theme Management**: Managed via **Redux Toolkit** and `localStorage` persistence for seamless Dark & Light theme switching.
- **Structured Data Layer**: All portfolio content (projects, skills, experiences, certificates, achievements) is managed through central JavaScript modules in `src/data/`.
- **Local Asset Management**: Local resume PDF file, developer avatar, project thumbnails, and certificate previews stored inside the repository.
- **Interactive Project Catalog**: Filtering by category (React, Java, Spring Boot, AI/ML, Full Stack), detailed project modal & deep-dive route (`/projects/:projectId`).
- **Certificate Inspection Modal**: Local modal viewer allowing recruiters to inspect certificate details and download documents directly.
- **Career & Academic Timeline**: Chronological vertical timeline showcasing internships at Academor, 1Stop, and Silicon University.
- **Responsive Navigation**: Glassmorphism navbar with an animated mobile drawer menu and keyboard accessibility.

---

## 🛠 Technology Stack

- **Core Framework**: React 18+ & Vite
- **State Management**: Redux Toolkit & React Redux
- **Styling**: Tailwind CSS (with customized dark/light tokens & utility classes)
- **Routing**: React Router v6
- **Icons**: Lucide React

---

## 📂 Project Structure

```text
portfolio/
├── docs/                      # Permanent Documentation System
│   ├── PROD.md                # Product specifications & features
│   ├── ARCHITECTURE.md        # Technical architecture & data flow
│   ├── RULES.md               # Coding standards & rulebook
│   ├── DESIGN.md              # Visual design system & tokens
│   ├── TASKS.md               # Kanban task tracker
│   └── MEMORY.MD              # Long-term project memory
├── public/                    # Static Assets (favicon, resume PDF, image previews)
│   ├── assets/
│   │   ├── certificates/
│   │   ├── documents/
│   │   ├── images/
│   │   └── projects/
│   └── favicon.svg
├── src/
│   ├── components/            # Reusable UI Primitives & Components
│   │   ├── certificates/      # CertificateModal
│   │   ├── common/            # ThemeToggle
│   │   ├── layout/            # Navbar, Footer
│   │   ├── projects/          # ProjectCard
│   │   └── ui/                # Button, Badge, SectionHeading, StatCard
│   ├── data/                  # Structured Portfolio Content Modules
│   │   ├── achievements.js
│   │   ├── certificates.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── profile.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── socialLinks.js
│   ├── layouts/               # RootLayout wrapper
│   ├── pages/                 # Route Page Components
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
│   ├── store/                 # Redux Store Configuration
│   │   ├── slices/
│   │   │   ├── themeSlice.js
│   │   │   └── uiSlice.js
│   │   └── store.js
│   ├── App.jsx                # React Router setup
│   ├── index.css              # Global Tailwind CSS & glassmorphism directives
│   └── main.jsx               # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚙️ Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Jagannath357/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Output will be compiled into the `dist/` directory.

---

## ✍️ How to Maintain Content

### Adding a New Project
Edit `src/data/projects.js` and append a new object to `projectsData`:
```javascript
{
  id: "my-new-project",
  title: "New Project Title",
  shortDescription: "Short summary...",
  fullDescription: "Detailed overview...",
  category: ["React", "Full Stack"],
  technologies: ["React", "Spring Boot", "MySQL"],
  featured: true,
  status: "Completed",
  date: "2025",
  github: "https://github.com/...",
  liveDemo: "",
  image: "/assets/projects/new-project.svg",
  features: ["Feature 1", "Feature 2"]
}
```

### Adding a Certificate
Edit `src/data/certificates.js` and add an entry:
```javascript
{
  id: "new-certificate",
  title: "Certification Title",
  issuer: "Issuing Organization",
  issueDate: "Month 2025",
  category: "Technical",
  description: "Description...",
  image: "/assets/certificates/new-cert.svg",
  downloadUrl: "/assets/certificates/new-cert.pdf",
  featured: true
}
```

---

## 📑 Documentation Folder (`docs/`)

This project strictly maintains a permanent 6-file documentation hub:
- `docs/PROD.md`: Vision, audience, non-functional requirements.
- `docs/ARCHITECTURE.md`: Stack overview, Redux structure, Mermaid diagrams.
- `docs/RULES.md`: Coding standards, accessibility, zero backend rules.
- `docs/DESIGN.md`: Color tokens, dark/light themes, typography specs.
- `docs/TASKS.md`: Project task tracking board.
- `docs/MEMORY.MD`: Core developer knowledge base & file maps.

---

## 📜 License

Created with ❤️ by Jagannath Padhi. All rights reserved.
