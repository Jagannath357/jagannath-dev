import React, { useState } from 'react';
import { socialLinks } from '../../data/socialLinks';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { Mail, Copy, Check, Github, Linkedin, FileDown, MapPin, Send, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.rawEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <SectionHeading
        badge="Get In Touch"
        title="Let's Work Together"
        subtitle="Open for software developer internships, full-stack opportunities, and technical projects."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Direct Email Card */}
        <div className="md:col-span-6 glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-3.5 rounded-2xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 w-fit">
              <Mail className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Direct Email
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Send me an email directly or copy my email address to your clipboard. I typically respond within 24 hours.
            </p>

            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
              <span className="font-mono text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                {socialLinks.rawEmail}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 shadow-xs border border-slate-200 dark:border-slate-700 shrink-0 flex items-center gap-1.5 text-xs font-semibold"
                aria-label="Copy Email to Clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <Button href={socialLinks.email} variant="primary" size="lg" icon={Send} className="w-full">
            Open Mail Client
          </Button>
        </div>

        {/* Professional Profiles */}
        <div className="md:col-span-6 glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 w-fit">
              <MessageSquare className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Professional Networks
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Connect with me on LinkedIn to discuss career opportunities or check out my recent repositories on GitHub.
            </p>

            <div className="space-y-3">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-brand-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-brand-500" />
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">
                    LinkedIn Profile
                  </span>
                </div>
                <span className="text-xs font-semibold text-brand-500 group-hover:translate-x-1 transition-transform">
                  Connect &rarr;
                </span>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-brand-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">
                    GitHub Repositories
                  </span>
                </div>
                <span className="text-xs font-semibold text-brand-500 group-hover:translate-x-1 transition-transform">
                  Explore &rarr;
                </span>
              </a>
            </div>
          </div>

          <Button href={socialLinks.resume} download="Jagannath_Padhi_Resume.pdf" variant="secondary" size="lg" icon={FileDown} className="w-full">
            Download Resume PDF
          </Button>
        </div>

      </div>

      {/* Location Banner */}
      <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
        <MapPin className="w-4 h-4 text-brand-500" />
        <span>Based in <strong>{profileData.location}</strong> — Silicon University</span>
      </div>

    </div>
  );
};
