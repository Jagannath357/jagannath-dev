import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../ui/Badge';
import { Github, ExternalLink, ArrowRight, Code } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const { id, title, shortDescription, category, technologies, image, github, liveDemo, status } = project;

  return (
    <div className="glass-card group overflow-hidden flex flex-col justify-between hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
      
      {/* Header Image Container */}
      <div>
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 right-3">
            <Badge variant={status === 'Completed' ? 'emerald' : 'amber'} size="sm">
              {status}
            </Badge>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {category.map((cat, idx) => (
              <Badge key={idx} variant="brand" size="sm">
                {cat}
              </Badge>
            ))}
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors line-clamp-1">
            {title}
          </h3>

          <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {shortDescription}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/50 mt-2">
        <Link
          to={`/projects/${id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group/link"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>

        <div className="flex items-center gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label={`View ${title} code on GitHub`}
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label={`Open ${title} live demo`}
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};
