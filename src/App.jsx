import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills';
import { Projects } from './pages/Projects/Projects';
import { ProjectDetails } from './pages/ProjectDetails/ProjectDetails';
import { Certificates } from './pages/Certificates/Certificates';
import { Experience } from './pages/Experience/Experience';
import { Achievements } from './pages/Achievements/Achievements';
import { Contact } from './pages/Contact/Contact';
import { NotFound } from './pages/NotFound/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<ProjectDetails />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="experience" element={<Experience />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
