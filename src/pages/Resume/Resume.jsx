import React from 'react';
import { socialLinks } from '../../data/socialLinks';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Download, ExternalLink, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Resume = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Header & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio Home</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
            <FileText className="w-7 h-7 text-brand-500" />
            <span>Curriculum Vitae / Resume</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Read and inspect the official resume of Jagannath Padhi.
          </p>
        </div>

        {/* Download Action Button */}
        <a
          href={socialLinks.resume}
          download="Jagannath_Padhi_Resume.pdf"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-accent hover:from-brand-700 hover:to-indigo-700 shadow-md shadow-brand-500/20 active:scale-95 transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume PDF</span>
        </a>
      </div>

      {/* PDF View Container */}
      <div className="glass-card p-3 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col space-y-4">
        <div className="flex items-center justify-between px-2 text-xs">
          <Badge variant="brand">Jagannath_Padhi_Resume.pdf</Badge>
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-brand-500 font-medium"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open PDF in New Window</span>
          </a>
        </div>

        <div className="w-full h-[75vh] sm:h-[82vh] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
          <iframe
            src={`${socialLinks.resume}#toolbar=1`}
            title="Resume PDF Preview"
            className="w-full h-full rounded-2xl border-0"
          />
        </div>
      </div>

    </div>
  );
};
