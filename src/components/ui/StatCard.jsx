import React from 'react';

export const StatCard = ({ label, value, icon: Icon, className = "" }) => {
  return (
    <div className={`p-6 rounded-2xl glass-card hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-300 group flex items-center justify-between ${className}`}>
      <div>
        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-brand-500 to-brand-accent bg-clip-text text-transparent">
          {value}
        </span>
        <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
          {label}
        </p>
      </div>
      {Icon && (
        <div className="p-3.5 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};
