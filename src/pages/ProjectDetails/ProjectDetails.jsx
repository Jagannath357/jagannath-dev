import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Code2, Calendar } from 'lucide-react';

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Project Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400">The project you are looking for does not exist.</p>
        <Button to="/projects" variant="primary" icon={ArrowLeft}>
          Back to Projects
        </Button>
      </div>
    );
  }

  const { title, fullDescription, category, technologies, image, github, liveDemo, status, date, features, challenges, solution } = project;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects</span>
      </button>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {category.map((cat, i) => (
            <Badge key={i} variant="brand">{cat}</Badge>
          ))}
          <Badge variant="emerald">{status}</Badge>
          <Badge variant="amber" className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {date}
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {fullDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          {github && (
            <Button href={github} external variant="primary" icon={Github}>
              View Source Code on GitHub
            </Button>
          )}
          {liveDemo && (
            <Button href={liveDemo} external variant="secondary" icon={ExternalLink}>
              Live Demo
            </Button>
          )}
        </div>
      </div>

      {/* Main Feature Screenshot Container */}
      <div className="w-full aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grid Specs */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column Features & Challenges */}
        <div className="md:col-span-8 space-y-8">
          
          {/* Key Features */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Key Features &amp; Capabilities</span>
            </h3>
            <ul className="space-y-3">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="p-1 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenges & Solutions */}
          {challenges && solution && (
            <div className="grid grid-cols-1 gap-6">
              <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-base font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Engineering Challenge</span>
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {challenges}
                </p>
              </div>

              <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-base font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Implemented Solution</span>
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {solution}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Right Column Tech Stack Breakdown */}
        <div className="md:col-span-4 space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-brand-500" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
