import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCertificateModal } from '../../store/slices/uiSlice';
import { Badge } from '../ui/Badge';
import { X, Download, ExternalLink, Award, CheckCircle } from 'lucide-react';

export const CertificateModal = () => {
  const dispatch = useDispatch();
  const cert = useSelector((state) => state.ui.activeCertificateModal);

  if (!cert) return null;

  const { title, issuer, issueDate, category, description, image, downloadUrl, skillsLearned } = cert;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-fade-in">
      
      {/* Backdrop overlay click to dismiss */}
      <div className="absolute inset-0" onClick={() => dispatch(closeCertificateModal())} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-brand-500" />
            <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
              Certificate Inspection
            </span>
          </div>
          <button
            onClick={() => dispatch(closeCertificateModal())}
            className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close Certificate Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Certificate Image Preview */}
          <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 aspect-[16/10] flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details Section */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="brand">{category}</Badge>
              <Badge variant="amber">{issueDate}</Badge>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {title}
            </h2>
            <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
              Issued by {issuer}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Skills Learned List */}
          {skillsLearned && skillsLearned.length > 0 && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                Key Competencies Verified
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {skillsLearned.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
          <a
            href={image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-500"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open High-Res Preview</span>
          </a>

          <div className="flex items-center gap-2 ml-auto">
            {(downloadUrl || image) && (
              <a
                href={downloadUrl || image}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-brand-accent hover:from-brand-700 hover:to-indigo-700 shadow-md shadow-brand-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Certificate</span>
              </a>
            )}
            <button
              onClick={() => dispatch(closeCertificateModal())}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
