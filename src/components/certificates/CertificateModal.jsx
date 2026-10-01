import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCertificateModal } from '../../store/slices/uiSlice';
import { Badge } from '../ui/Badge';
import { X, Download, ExternalLink, Award, CheckCircle, Calendar, Building2, BookOpen, Layers, Code } from 'lucide-react';

export const CertificateModal = () => {
  const dispatch = useDispatch();
  const cert = useSelector((state) => state.ui.activeCertificateModal);

  if (!cert) return null;

  const {
    title,
    issuer,
    organization,
    issueDate,
    duration,
    category,
    type,
    domain,
    courseTitle,
    description,
    image,
    downloadUrl,
    skillsLearned,
    categorizedSkills,
    technologies
  } = cert;

  // Split multi-line descriptions into separate paragraphs
  const descriptionParagraphs = typeof description === 'string'
    ? description.split('\n\n').filter(Boolean)
    : [description];

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

          {/* Title & Metadata Badges */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="brand">{type || category}</Badge>
              {domain && <Badge variant="emerald">{domain}</Badge>}
              <Badge variant="amber">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {duration || issueDate}
                </span>
              </Badge>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {title}
            </h2>

            {/* Organization & Course info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-500 shrink-0" />
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase font-bold">Organization</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{organization || issuer}</span>
                </div>
              </div>

              {courseTitle && (
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-500 shrink-0" />
                  <div>
                    <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase font-bold">Course / Training</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{courseTitle}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-3">
              {descriptionParagraphs.map((para, idx) => (
                <p key={idx} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Categorized Skills Section */}
          {categorizedSkills && Object.keys(categorizedSkills).length > 0 ? (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-500" />
                <span>Skills Learned / Strengthened</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(categorizedSkills).map(([catName, skillsList]) => (
                  <div key={catName} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-2">
                    <h5 className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
                      {catName}
                    </h5>
                    <div className="space-y-1.5">
                      {skillsList.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Flat Skills Learned List fallback for standard certificates */
            skillsLearned && skillsLearned.length > 0 && (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Key Competencies Verified</span>
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
            )
          )}

          {/* Technology Badges List */}
          {technologies && technologies.length > 0 && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-brand-500" />
                <span>Technologies Covered</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech, idx) => (
                  <Badge key={idx} variant="slate" size="sm">
                    {tech}
                  </Badge>
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
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open High-Res Preview</span>
          </a>

          <div className="flex items-center gap-2 ml-auto">
            {(downloadUrl || image) && (
              <a
                href={downloadUrl || image}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-brand-accent hover:from-brand-700 hover:to-indigo-700 shadow-md shadow-brand-500/20 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Certificate</span>
              </a>
            )}
            <button
              onClick={() => dispatch(closeCertificateModal())}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
