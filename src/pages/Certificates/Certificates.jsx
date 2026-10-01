import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openCertificateModal } from '../../store/slices/uiSlice';
import { certificatesData, certificateCategories } from '../../data/certificates';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Eye, Download, Award, Calendar } from 'lucide-react';

export const Certificates = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertificates = activeCategory === 'All'
    ? certificatesData
    : certificatesData.filter((c) => c.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <SectionHeading
        badge="Verified Qualifications"
        title="Certifications &amp; Training"
        subtitle="Explore verified internship credentials, technical workshops, and competitive hackathon awards."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
        {certificateCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                isActive
                  ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20'
                  : 'bg-white dark:bg-[#131b2e] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Certificate Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCertificates.map((cert) => {
          const { id, title, issuer, issueDate, category, description, image, downloadUrl } = cert;

          return (
            <div
              key={id}
              className="glass-card group overflow-hidden flex flex-col justify-between hover:border-brand-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Image Preview */}
                <div
                  onClick={() => dispatch(openCertificateModal(cert))}
                  className="aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 cursor-pointer relative"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="px-3 py-1.5 rounded-xl bg-white/90 text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-4 h-4" />
                      Inspect Certificate
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="brand" size="sm">{category}</Badge>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {issueDate}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors line-clamp-1">
                    {title}
                  </h3>

                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                    {cert.organization || issuer}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {description}
                  </p>

                  {/* Technology Badges */}
                  {(cert.skillsLearned || cert.technologies) && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {(cert.skillsLearned || cert.technologies).slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant="slate" size="xs">
                          {tech}
                        </Badge>
                      ))}
                      {(cert.skillsLearned || cert.technologies).length > 4 && (
                        <Badge variant="brand" size="xs">
                          +{(cert.skillsLearned || cert.technologies).length - 4} more
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/50 mt-2">
                <Button
                  onClick={() => dispatch(openCertificateModal(cert))}
                  variant="outline"
                  size="sm"
                  icon={Eye}
                >
                  Inspect
                </Button>

                {(downloadUrl || image) && (
                  <Button
                    href={downloadUrl || image}
                    download
                    variant="ghost"
                    size="sm"
                    icon={Download}
                  >
                    Download
                  </Button>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {filteredCertificates.length === 0 && (
        <div className="text-center py-12 text-slate-500 dark:text-slate-400">
          No certificates found for category "{activeCategory}".
        </div>
      )}

    </div>
  );
};
