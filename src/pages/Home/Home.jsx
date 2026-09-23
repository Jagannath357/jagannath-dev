import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openCertificateModal } from '../../store/slices/uiSlice';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';
import { certificatesData } from '../../data/certificates';
import { skillsData } from '../../data/skills';
import { experienceData } from '../../data/experience';
import { achievementsData } from '../../data/achievements';
import { socialLinks } from '../../data/socialLinks';

import { StatCard } from '../../components/ui/StatCard';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { HeroRoleSwitcher } from '../../components/common/HeroRoleSwitcher';

import {
  ArrowRight,
  FileDown,
  Mail,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Terminal,
  Sparkles,
  CheckCircle2,
  Trophy
} from 'lucide-react';

export const Home = () => {
  const dispatch = useDispatch();
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);
  const featuredCertificates = certificatesData.filter((c) => c.featured).slice(0, 3);
  const coreSkills = skillsData.flatMap((cat) => cat.skills).slice(0, 8);

  return (
    <div className="space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-12 overflow-hidden">
        
        {/* Subtle Background Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Intro Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-500/20 text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-brand-500" />
                <span>Computer Science &amp; Engineering Undergraduate</span>
              </div>

              <div>
                <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-400">
                  Hi, I'm
                </p>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                  {profileData.name}
                </h1>
                <div className="mt-2 min-h-[3rem]">
                  <HeroRoleSwitcher roles={profileData.roles} />
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {profileData.bio}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button to="/projects" variant="primary" size="lg" icon={ArrowRight}>
                  View My Projects
                </Button>
                
                <Button href={socialLinks.resume} download="Jagannath_Padhi_Resume.pdf" variant="secondary" size="lg" icon={FileDown}>
                  Download Resume
                </Button>
                
                <Button to="/contact" variant="outline" size="lg" icon={Mail}>
                  Contact Me
                </Button>
              </div>

              {/* Quick Tech Badges */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>Core Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Java</span>
                  <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Spring Boot</span>
                  <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">React</span>
                  <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Tailwind CSS</span>
                </div>
              </div>

            </div>

            {/* Right Column Profile Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl p-3 bg-gradient-to-tr from-brand-500/30 via-brand-accent/20 to-emerald-500/30 backdrop-blur-xl border border-white/20 shadow-2xl group">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center relative">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Highlight Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs text-slate-200 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium">
                      <GraduationCap className="w-4 h-4 text-brand-400" />
                      Silicon University
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-[10px]">
                      3rd Year CSE
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* QUICK STATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <StatCard label="Internships" value="3+" icon={Briefcase} />
          <StatCard label="Projects Built" value="10+" icon={Code2} />
          <StatCard label="Certifications" value="6+" icon={Award} />
          <StatCard label="Degree Standing" value="CSE 3rd Year" icon={GraduationCap} />
        </div>
      </section>


      {/* ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                About Me
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Building scalable full-stack web applications with modern Java and React architectures.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                I am a 3rd Year Computer Science &amp; Engineering student at Silicon University, Bhubaneswar. My focus is on creating clean, intuitive frontend interfaces combined with performant backend systems. I am actively seeking software development engineer internships and entry-level positions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Full Stack Java &amp; React Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Strong Data Structures &amp; OOP Foundations</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>3+ Practical Industry Internships</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Verified Certifications &amp; Hackathons</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-8">
              <Button to="/about" variant="primary" size="md" icon={ArrowRight}>
                Read Full Bio
              </Button>
            </div>

          </div>
        </div>
      </section>


      {/* FEATURED PROJECTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio Highlights"
          title="Featured Projects"
          subtitle="A selection of full-stack and web applications I've designed and built recently."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/projects" variant="secondary" size="lg" icon={ArrowRight}>
            View All Projects ({projectsData.length})
          </Button>
        </div>
      </section>


      {/* SKILLS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills &amp; Technology Stack"
          subtitle="Key languages, frameworks, databases, and core computer science subjects."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {coreSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-xl flex items-center justify-between hover:border-brand-500/40 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Code2 className="w-4 h-4 text-brand-500" />
                <span className="font-semibold text-sm text-slate-900 dark:text-white">
                  {skill.name}
                </span>
              </div>
              <Badge variant="slate" size="sm">
                {skill.level}
              </Badge>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button to="/skills" variant="outline" size="md" icon={ArrowRight}>
            Explore All Skill Categories
          </Button>
        </div>
      </section>


      {/* EXPERIENCE TIMELINE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Internship &amp; Experience Timeline"
          subtitle="Real-world industry experience and frontend development engagements."
        />

        <div className="space-y-6 max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <div key={exp.id} className="glass-card p-6 rounded-2xl relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <Badge variant="brand">{exp.period}</Badge>
              </div>
              <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">
                {exp.company} — {exp.location}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((t, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button to="/experience" variant="secondary" size="md" icon={ArrowRight}>
            View Detailed Timeline
          </Button>
        </div>
      </section>


      {/* CERTIFICATES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Credentials"
          title="Featured Certifications"
          subtitle="Verified internship certificates, workshops, and technical credentials."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => dispatch(openCertificateModal(cert))}
              className="glass-card p-5 rounded-2xl cursor-pointer hover:border-brand-500/50 hover:shadow-lg transition-all group"
            >
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 mb-4 border border-slate-200 dark:border-slate-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Badge variant="brand" size="sm" className="mb-2">
                {cert.category}
              </Badge>
              <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors line-clamp-1">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {cert.issuer} • {cert.issueDate}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button to="/certificates" variant="outline" size="md" icon={ArrowRight}>
            View All Certificates
          </Button>
        </div>
      </section>


      {/* CONTACT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-brand-600 to-brand-accent text-white shadow-xl shadow-brand-500/20 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Interested in working together or hiring me?
          </h2>
          <p className="text-brand-100 max-w-2xl mx-auto text-base sm:text-lg">
            I am available for software development internships, full-stack roles, and technical project collaborations. Let's get in touch!
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="secondary" size="lg" icon={Mail}>
              Let's Connect
            </Button>
            <Button href={socialLinks.resume} download="Jagannath_Padhi_Resume.pdf" variant="outline" size="lg" className="border-white text-white hover:bg-white/10" icon={FileDown}>
              Download Resume
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
