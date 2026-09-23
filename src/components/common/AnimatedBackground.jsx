import React from 'react';
import { useSelector } from 'react-redux';
import { ThreeDObjects } from './ThreeDObjects';
import { CartoonBackgroundObjects } from './CartoonBackgroundObjects';

export const AnimatedBackground = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  const isDark = themeMode === 'dark';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none transition-colors duration-500"
    >
      {/* Base Background Tint */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#0b0f19] transition-colors duration-500" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 dark:opacity-60 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_90%)]" />

      {/* 3D Floating Objects Layer */}
      <ThreeDObjects isDark={isDark} />

      {/* Cartoon Moving Objects Layer */}
      <CartoonBackgroundObjects isDark={isDark} />

      {/* Blob 1: Top Left Ambient Glow */}
      <div
        className={`absolute -top-32 -left-32 w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] rounded-full blur-[100px] sm:blur-[130px] animate-blob-1 transition-all duration-700 ${
          isDark
            ? 'bg-brand-500/18 text-brand-500'
            : 'bg-indigo-300/35 text-indigo-400'
        }`}
      />

      {/* Blob 2: Middle Right Accent Glow */}
      <div
        className={`absolute top-1/3 -right-32 w-[400px] h-[400px] sm:w-[650px] sm:h-[650px] rounded-full blur-[110px] sm:blur-[140px] animate-blob-2 transition-all duration-700 ${
          isDark
            ? 'bg-brand-accent/15 text-brand-accent'
            : 'bg-purple-300/30 text-purple-400'
        }`}
      />

      {/* Blob 3: Bottom Left Emerald/Sky Glow */}
      <div
        className={`absolute -bottom-40 -left-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[120px] animate-blob-3 transition-all duration-700 ${
          isDark
            ? 'bg-emerald-500/12 text-emerald-500'
            : 'bg-sky-200/40 text-sky-400'
        }`}
      />

      {/* Ambient Center Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[700px] sm:h-[700px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ${
          isDark
            ? 'bg-indigo-900/10'
            : 'bg-indigo-100/40'
        }`}
      />

      {/* Subtle Floating Ambient Light Dots */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-brand-500/30 dark:bg-brand-400/40 blur-[1px] animate-pulse-subtle" />
      <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-brand-accent/25 dark:bg-brand-accent/35 blur-[1px] animate-pulse-subtle [animation-delay:1.5s]" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-emerald-500/30 dark:bg-emerald-400/40 blur-[1px] animate-pulse-subtle [animation-delay:2.5s]" />
    </div>
  );
};
