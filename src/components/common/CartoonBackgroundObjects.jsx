import React from 'react';

export const CartoonBackgroundObjects = ({ isDark }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[0]">
      
      {/* CARTOON 1: Cute Developer Robot Mascot (Top Right) */}
      <div className="absolute top-[15%] right-[5%] sm:right-[10%] w-24 h-24 sm:w-32 sm:h-32 opacity-75 sm:opacity-85 animate-cartoon-float-1">
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">
          {/* Antenna */}
          <line x1="60" y1="20" x2="60" y2="35" stroke="#6366F1" strokeWidth="4" strokeLinecap="round" />
          <circle cx="60" cy="16" r="6" fill="#10B981" className="animate-pulse" />
          
          {/* Head */}
          <rect x="30" y="35" width="60" height="45" rx="14" fill={isDark ? "#131B2E" : "#FFFFFF"} stroke="#6366F1" strokeWidth="4" />
          
          {/* Eyes (Glowing Screen) */}
          <rect x="40" y="45" width="40" height="20" rx="6" fill="#0B0F19" />
          <circle cx="48" cy="55" r="4" fill="#6366F1" />
          <circle cx="72" cy="55" r="4" fill="#6366F1" />
          
          {/* Cute Smile */}
          <path d="M52 70 Q60 76 68 70" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" fill="none" />
          
          {/* Body & Laptop */}
          <path d="M40 82 C40 82 45 105 60 105 C75 105 80 82 80 82 Z" fill="#4F46E5" />
          <rect x="42" y="88" width="36" height="18" rx="4" fill={isDark ? "#1E293B" : "#F3F4F6"} stroke="#10B981" strokeWidth="2" />
          <text x="60" y="100" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#10B981" textAnchor="middle">&lt;/&gt;</text>
        </svg>
      </div>

      {/* CARTOON 2: Flying Space Rocket (Middle Left) */}
      <div className="absolute top-[38%] left-[4%] sm:left-[7%] w-20 h-20 sm:w-28 sm:h-28 opacity-70 sm:opacity-85 animate-cartoon-rocket">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_12px_rgba(244,114,182,0.3)]">
          {/* Flame Exhaust */}
          <path d="M25 75 Q15 85 22 95 Q30 85 25 75 Z" fill="#F59E0B" className="animate-pulse" />
          <path d="M23 77 Q18 85 23 90 Q28 85 23 77 Z" fill="#EF4444" />
          
          {/* Rocket Body */}
          <path d="M25 70 C25 70 20 40 50 15 C80 40 75 70 75 70 L25 70 Z" fill={isDark ? "#1E1B4B" : "#EEF2FF"} stroke="#EC4899" strokeWidth="3" />
          
          {/* Fins */}
          <path d="M25 60 L10 75 L25 70 Z" fill="#EC4899" />
          <path d="M75 60 L90 75 L75 70 Z" fill="#EC4899" />
          
          {/* Porthole Window */}
          <circle cx="50" cy="45" r="10" fill="#0B0F19" stroke="#6366F1" strokeWidth="3" />
          <circle cx="50" cy="45" r="5" fill="#38BDF8" />
        </svg>
      </div>

      {/* CARTOON 3: Steaming Developer Coffee Cup (Bottom Left) */}
      <div className="absolute bottom-[18%] left-[12%] sm:left-[15%] w-16 h-16 sm:w-24 sm:h-24 opacity-75 sm:opacity-85 animate-cartoon-float-2">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_12px_rgba(245,158,11,0.3)]">
          {/* Steam Clouds */}
          <path d="M35 25 Q40 15 35 5" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-pulse" />
          <path d="M50 22 Q55 12 50 2" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-pulse [animation-delay:0.5s]" />
          <path d="M65 25 Q70 15 65 5" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-pulse [animation-delay:1s]" />
          
          {/* Cup Body */}
          <rect x="25" y="30" width="50" height="50" rx="12" fill={isDark ? "#131B2E" : "#FFFFFF"} stroke="#F59E0B" strokeWidth="4" />
          
          {/* Cup Handle */}
          <path d="M75 40 C85 40 85 65 75 65" stroke="#F59E0B" strokeWidth="4" fill="none" strokeLinecap="round" />
          
          {/* Smile on Cup */}
          <circle cx="40" cy="50" r="3" fill="#F59E0B" />
          <circle cx="60" cy="50" r="3" fill="#F59E0B" />
          <path d="M44 60 Q50 66 56 60" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* CARTOON 4: Cartoon Saturn Planet & Sparkle Stars (Bottom Right) */}
      <div className="absolute bottom-[12%] right-[8%] sm:right-[12%] w-20 h-20 sm:w-28 sm:h-28 opacity-75 sm:opacity-85 animate-cartoon-float-3">
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
          {/* Ring Behind Planet */}
          <ellipse cx="60" cy="60" rx="45" ry="14" fill="none" stroke="#F59E0B" strokeWidth="5" transform="rotate(-20 60 60)" />
          
          {/* Planet Body */}
          <circle cx="60" cy="60" r="28" fill="url(#planet-grad)" stroke="#8B5CF6" strokeWidth="3" />
          
          {/* Ring Front */}
          <path d="M18 68 C25 78 70 82 102 52" stroke="#F59E0B" strokeWidth="5" fill="none" strokeLinecap="round" />
          
          {/* Cute Eyes */}
          <circle cx="52" cy="56" r="3.5" fill="#FFFFFF" />
          <circle cx="68" cy="56" r="3.5" fill="#FFFFFF" />
          
          {/* Sparkle Star */}
          <path d="M95 20 L98 28 L106 31 L98 34 L95 42 L92 34 L84 31 L92 28 Z" fill="#F59E0B" className="animate-pulse" />
          
          <defs>
            <linearGradient id="planet-grad" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CARTOON 5: Cute Bug Zapped to Checkmark (Middle Right) */}
      <div className="absolute top-[60%] right-[18%] hidden lg:block w-16 h-16 opacity-70 animate-cartoon-float-1 [animation-delay:3s]">
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          {/* Bug Body */}
          <circle cx="40" cy="45" r="16" fill="#EF4444" opacity="0.8" />
          <circle cx="40" cy="25" r="10" fill="#1E293B" />
          {/* Bug Legs */}
          <path d="M22 40 L12 35 M22 45 L10 45 M22 50 L12 55" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          <path d="M58 40 L68 35 M58 45 L70 45 M58 50 L68 55" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          {/* Green Fixed Shield */}
          <circle cx="58" cy="22" r="12" fill="#10B981" />
          <path d="M52 22 L56 26 L64 18" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>

    </div>
  );
};
