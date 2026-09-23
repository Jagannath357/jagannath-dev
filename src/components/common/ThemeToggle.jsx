import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = ({ className = "" }) => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);
  const isDark = themeMode === 'dark';

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 shadow-sm ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-5 h-5 text-amber-500 absolute transition-all duration-500 transform ${
            isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          className={`w-5 h-5 text-indigo-400 absolute transition-all duration-500 transform ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
          }`}
        />
      </div>
    </button>
  );
};
