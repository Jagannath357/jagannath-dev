import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeResumeModal } from '../../store/slices/uiSlice';
import { socialLinks } from '../../data/socialLinks';
import { Badge } from '../ui/Badge';
import { X, Download, FileText, ExternalLink, Eye } from 'lucide-react';

export const ResumeModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isResumeModalOpen);

  // Lock body scroll when resume modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        dispatch(closeResumeModal());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      
      {/* Backdrop overlay click to close */}
      <div 
        className="absolute inset-0" 
        onClick={() => dispatch(closeResumeModal())} 
        aria-hidden="true"
      />

      {/* Dialog Window */}
      <div 
        className="relative w-full max-w-5xl h-[92vh] bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col transition-colors duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        
        {/* Dialog Header */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand-500/10 text-brand-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="resume-modal-title" className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
                  Jagannath Padhi — Resume
                </h2>
                <Badge variant="brand" size="xs">PDF Preview</Badge>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Official Curriculum Vitae &amp; Qualifications
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Download Resume Action Button (Intentional Download) */}
            <a
              href={socialLinks.resume}
              download="Jagannath_Padhi_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-brand-accent hover:from-brand-700 hover:to-indigo-700 shadow-md shadow-brand-500/20 active:scale-95 transition-all"
              title="Download Resume PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* Close Button */}
            <button
              onClick={() => dispatch(closeResumeModal())}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close Resume Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dialog Main PDF Frame Container */}
        <div className="flex-1 p-2 sm:p-4 bg-slate-100 dark:bg-slate-950 flex flex-col justify-between overflow-hidden">
          <iframe
            src={`${socialLinks.resume}#toolbar=1`}
            title="Resume PDF Preview"
            className="w-full h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0f19] shadow-inner"
          />
        </div>

        {/* Dialog Footer Actions */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between text-xs">
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-brand-500 font-medium"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open PDF in New Window</span>
          </a>

          <div className="flex items-center gap-3">
            <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">
              Jagannath_Padhi_Resume.pdf
            </span>
            <button
              onClick={() => dispatch(closeResumeModal())}
              className="px-3.5 py-1.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
