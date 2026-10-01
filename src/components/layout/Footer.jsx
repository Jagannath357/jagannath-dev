import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openResumeModal } from '../../store/slices/uiSlice';
import { socialLinks } from '../../data/socialLinks';
import { Github, Linkedin, Mail, FileText, Heart, Code2 } from 'lucide-react';

export const Footer = () => {
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-[#080b12] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 text-xl font-extrabold text-slate-900 dark:text-white">
              <div className="p-1.5 rounded-lg bg-brand-500 text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <span>Jagannath Padhi</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Computer Science & Engineering Student at Silicon University, Bhubaneswar. Aspiring Full Stack & Java Software Engineer crafting modern web applications.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700/60 shadow-xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700/60 shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.email}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700/60 shadow-xs"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <button
                onClick={() => dispatch(openResumeModal())}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700/60 shadow-xs cursor-pointer"
                aria-label="View Resume PDF"
                title="View & Inspect Resume PDF"
              >
                <FileText className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  Skills &amp; Stack
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  Resume / CV
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Credentials
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/certificates" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  Internships & Timeline
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  Achievements & Awards
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {currentYear} Jagannath Padhi. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed &amp; Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> using React, Redux &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
