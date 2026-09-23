import React from 'react';
import { Code2, Coffee, Atom, Terminal, Layers, Cpu, Database, Zap } from 'lucide-react';

export const ThreeDObjects = ({ isDark }) => {
  return (
    <div className="absolute inset-0 perspective-container pointer-events-none overflow-hidden z-[0]">
      
      {/* 3D OBJECT 1: Floating Glowing Translucent Glass Cube (Top Right) */}
      <div className="absolute top-[12%] right-[8%] sm:right-[12%] w-[70px] h-[70px] preserve-3d animate-rotate-3d-1 opacity-80 sm:opacity-90">
        <div className="cube-face cube-front flex items-center justify-center">
          <Atom className="w-6 h-6 text-brand-500 animate-pulse-subtle" />
        </div>
        <div className="cube-face cube-back flex items-center justify-center">
          <Code2 className="w-6 h-6 text-brand-accent animate-pulse-subtle" />
        </div>
        <div className="cube-face cube-right flex items-center justify-center">
          <Coffee className="w-6 h-6 text-amber-500 animate-pulse-subtle" />
        </div>
        <div className="cube-face cube-left flex items-center justify-center">
          <Terminal className="w-6 h-6 text-emerald-500 animate-pulse-subtle" />
        </div>
        <div className="cube-face cube-top flex items-center justify-center">
          <Layers className="w-6 h-6 text-indigo-400" />
        </div>
        <div className="cube-face cube-bottom flex items-center justify-center">
          <span className="text-xs font-mono font-bold text-brand-500">3D</span>
        </div>
      </div>

      {/* 3D OBJECT 2: Mini Rotating 3D Glass Cube (Bottom Left) */}
      <div className="absolute bottom-[20%] left-[6%] sm:left-[10%] w-[45px] h-[45px] preserve-3d animate-rotate-3d-2 opacity-75">
        <div className="cube-face mini-cube-front flex items-center justify-center">
          <Cpu className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="cube-face mini-cube-back flex items-center justify-center">
          <Database className="w-4 h-4 text-brand-accent" />
        </div>
        <div className="cube-face mini-cube-right flex items-center justify-center">
          <Zap className="w-4 h-4 text-amber-400" />
        </div>
        <div className="cube-face mini-cube-left flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-indigo-400" />
        </div>
        <div className="cube-face mini-cube-top" />
        <div className="cube-face mini-cube-bottom" />
      </div>

      {/* 3D OBJECT 3: 3D Holographic Concentric Tech Ring (Top Left) */}
      <div className="absolute top-[8%] left-[5%] sm:left-[8%] w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] preserve-3d animate-spin-3d-ring opacity-40 sm:opacity-60">
        <div className="w-full h-full rounded-full border-2 border-dashed border-brand-500/60 shadow-[0_0_20px_rgba(99,102,241,0.2)]" />
        <div className="absolute inset-4 rounded-full border border-dotted border-brand-accent/50" />
        <div className="absolute inset-10 rounded-full border border-emerald-500/40" />
      </div>

      {/* 3D OBJECT 4: 3D Levitating Floating Code & Skill Badges */}
      {/* Floating Badge 1 - Top Left */}
      <div className="absolute top-[28%] left-[12%] hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl glass-card border border-brand-500/30 text-xs font-semibold text-brand-600 dark:text-brand-300 shadow-xl shadow-brand-500/10 animate-float-3d">
        <Atom className="w-4 h-4 text-brand-500 animate-spin" style={{ animationDuration: '10s' }} />
        <span>React.js &amp; Frontend</span>
      </div>

      {/* Floating Badge 2 - Middle Right */}
      <div className="absolute top-[48%] right-[8%] hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl glass-card border border-brand-accent/30 text-xs font-semibold text-brand-accent dark:text-brand-400 shadow-xl shadow-brand-accent/10 animate-float-3d [animation-delay:2s]">
        <Coffee className="w-4 h-4 text-amber-500" />
        <span>Java &amp; Spring Boot</span>
      </div>

      {/* Floating Badge 3 - Bottom Left */}
      <div className="absolute bottom-[35%] left-[8%] hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl glass-card border border-emerald-500/30 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-xl shadow-emerald-500/10 animate-float-3d [animation-delay:4s]">
        <Code2 className="w-4 h-4 text-emerald-500" />
        <span>150+ LeetCode DSA</span>
      </div>

      {/* 3D Floating Code Symbols (Z-Perspective Levitating Code Icons) */}
      <div className="absolute top-[18%] right-[32%] hidden sm:block font-mono text-sm font-bold text-brand-500/30 dark:text-brand-400/30 animate-float-3d [animation-delay:1s]">
        &#123; &#125;
      </div>
      <div className="absolute top-[62%] left-[22%] hidden sm:block font-mono text-sm font-bold text-emerald-500/30 dark:text-emerald-400/30 animate-float-3d [animation-delay:3s]">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-[18%] right-[35%] hidden sm:block font-mono text-sm font-bold text-amber-500/30 dark:text-amber-400/30 animate-float-3d [animation-delay:5s]">
        =&gt;
      </div>

      {/* 3D OBJECT 5: 3D Orbital Glow Sphere (Bottom Right) */}
      <div className="absolute bottom-[14%] right-[15%] w-[160px] h-[160px] preserve-3d animate-spin-3d-ring opacity-40">
        <div className="w-full h-full rounded-full border border-dashed border-indigo-400/50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-500 shadow-[0_0_12px_#6366f1]" />
      </div>

    </div>
  );
};
