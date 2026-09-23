import React, { useState, useEffect } from 'react';

export const HeroRoleSwitcher = ({ roles }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="h-10 sm:h-12 overflow-hidden relative inline-block text-left align-middle">
      {roles.map((role, idx) => {
        const isCurrent = idx === index;
        return (
          <div
            key={idx}
            className={`absolute left-0 top-0 w-full text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-500 via-brand-accent to-emerald-500 bg-clip-text text-transparent transition-all duration-700 transform ${
              isCurrent
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
            }`}
          >
            {role}
          </div>
        );
      })}
    </div>
  );
};
