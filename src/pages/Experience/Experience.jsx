import React from 'react';
import { experienceData } from '../../data/experience';
import { educationData } from '../../data/education';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Badge } from '../../components/ui/Badge';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      <SectionHeading
        badge="Career & Academic Journey"
        title="Experience &amp; Education"
        subtitle="Chronological timeline of developer internships, academic milestones, and technical achievements."
      />

      {/* INTERNSHIP EXPERIENCE TIMELINE */}
      <div className="space-y-8">
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
          <Briefcase className="w-6 h-6 text-brand-500" />
          <span>Industry Internships</span>
        </h3>

        <div className="relative border-l-2 border-brand-500/30 pl-6 sm:pl-8 space-y-10 ml-3 sm:ml-4">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-6 h-6 rounded-full bg-brand-500 border-4 border-white dark:border-[#0b0f19] shadow-md group-hover:scale-125 transition-transform" />

              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h4>
                  <Badge variant="brand" className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-normal">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 pt-2">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ACADEMIC EDUCATION */}
      <div className="space-y-8 pt-6">
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
          <GraduationCap className="w-6 h-6 text-brand-500" />
          <span>Academic Background</span>
        </h3>

        <div className="relative border-l-2 border-brand-accent/30 pl-6 sm:pl-8 space-y-10 ml-3 sm:ml-4">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-6 h-6 rounded-full bg-brand-accent border-4 border-white dark:border-[#0b0f19] shadow-md group-hover:scale-125 transition-transform" />

              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <Badge variant="amber">{edu.period}</Badge>
                </div>

                <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                  {edu.institution} — {edu.location}
                </p>

                <Badge variant="emerald">{edu.status}</Badge>

                <ul className="space-y-2 pt-2">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-brand-500 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
