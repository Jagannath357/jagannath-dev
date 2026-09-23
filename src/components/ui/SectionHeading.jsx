import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const alignmentClasses = {
    center: 'text-center mx-auto max-w-3xl',
    left: 'text-left max-w-2xl',
    right: 'text-right ml-auto max-w-2xl'
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align] || alignmentClasses.center} ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest uppercase rounded-full bg-brand-100 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
