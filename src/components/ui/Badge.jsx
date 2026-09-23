import React from 'react';

export const Badge = ({
  children,
  variant = 'brand',
  size = 'md',
  className = ''
}) => {
  const variants = {
    brand: "bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50",
    emerald: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50",
    amber: "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50",
    slate: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
    outline: "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[11px] font-medium rounded-md",
    md: "px-2.5 py-1 text-xs font-semibold rounded-lg",
    lg: "px-3 py-1.5 text-sm font-semibold rounded-xl"
  };

  return (
    <span className={`inline-flex items-center gap-1 transition-colors ${variants[variant] || variants.brand} ${sizes[size] || sizes.md} ${className}`}>
      {children}
    </span>
  );
};
