import React from 'react';
import { useDispatch } from 'react-redux';
import { openResumeModal } from '../../store/slices/uiSlice';
import { profileData } from '../../data/profile';
import { educationData } from '../../data/education';
import { socialLinks } from '../../data/socialLinks';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { GraduationCap, Award, BookOpen, Code, FileDown, FileText, CheckCircle2, UserCheck } from 'lucide-react';

export const About = () => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* SECTION HEADING */}
      <SectionHeading
        badge="Personal Profile"
        title="About Jagannath Padhi"
        subtitle="Computer Science & Engineering Student | Aspiring Software Engineer & Full Stack Developer"
      />

      {/* BIO & PICTURE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column Avatar & Quick Overview */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-4 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {profileData.name}
              </h3>
              <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                {profileData.degree}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {profileData.university}
              </p>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="glass-card p-6 rounded-2xl space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Details
            </h4>
            <div className="text-xs space-y-2 text-slate-600 dark:text-slate-300">
              <p><strong className="text-slate-900 dark:text-white">Location:</strong> {profileData.location}</p>
              <p><strong className="text-slate-900 dark:text-white">Status:</strong> {profileData.status}</p>
              <p><strong className="text-slate-900 dark:text-white">Email:</strong> {profileData.email}</p>
            </div>
            <div className="pt-2">
              <Button onClick={() => dispatch(openResumeModal())} variant="primary" size="sm" icon={FileText} className="w-full">
                View Official Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column Detailed Story */}
        <div className="lg:col-span-8 space-y-8">
          
          <div className="glass-card p-8 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-brand-500" />
              <span>Background &amp; Aspirations</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              I am currently pursuing my B.Tech in Computer Science and Engineering at Silicon University, Bhubaneswar. From my early coursework in C and Data Structures to building complex full-stack web applications in Java, Spring Boot, and React, I have cultivated a passion for engineering practical, user-centered software.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Throughout my academic journey and technical internships at Academor, 1Stop, and Silicon University, I have consistently focused on writing clean, maintainable code and solving real-world problems. Whether designing responsive frontend interfaces or developing REST APIs, I aim for optimal performance and high user satisfaction.
            </p>
          </div>

          {/* Core Focus Areas */}
          <div className="glass-card p-8 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-brand-500" />
              <span>Technical Interests &amp; Direction</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {profileData.interests.map((interest, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Breakdown */}
          <div className="glass-card p-8 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-brand-500" />
              <span>Education</span>
            </h3>
            
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <Badge variant="brand">{edu.period}</Badge>
                </div>
                <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                  {edu.institution} — {edu.location}
                </p>
                <Badge variant="emerald" size="sm">{edu.status}</Badge>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 pt-2">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};
