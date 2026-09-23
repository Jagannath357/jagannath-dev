import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  external = false,
  download = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-600 to-brand-accent hover:from-brand-700 hover:to-indigo-700 text-white shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 focus:ring-brand-500 active:scale-[0.98]",
    secondary: "bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 focus:ring-slate-400 active:scale-[0.98]",
    outline: "border border-brand-500/40 text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-500/10 focus:ring-brand-500 active:scale-[0.98]",
    ghost: "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-400",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5 font-semibold",
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`group ${combinedClasses}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`group ${combinedClasses}`} {...props}>
      {content}
    </button>
  );
};
