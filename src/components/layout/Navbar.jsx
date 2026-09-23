import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu, closeMobileMenu } from '../../store/slices/uiSlice';
import { ThemeToggle } from '../common/ThemeToggle';
import { socialLinks } from '../../data/socialLinks';
import { Menu, X, FileDown, Code2 } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Experience', path: '/experience' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Contact', path: '/contact' }
];

export const Navbar = () => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.ui.isMobileMenuOpen);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    dispatch(closeMobileMenu());
  }, [location, dispatch]);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white group focus:outline-none"
          >
            <div className="p-2 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-accent text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span>
              Jagannath<span className="text-brand-500">.dev</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Resume Button */}
            <a
              href={socialLinks.resume}
              download="Jagannath_Padhi_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-accent hover:from-brand-700 hover:to-indigo-700 shadow-sm shadow-brand-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="xl:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none border border-slate-200 dark:border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] sm:top-[81px] bottom-0 bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-40 p-6 flex flex-col justify-between overflow-y-auto animate-fade-in">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 px-3">
              Navigation
            </p>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                  }`
                }
              >
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <a
              href={socialLinks.resume}
              download="Jagannath_Padhi_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-brand-accent shadow-md shadow-brand-500/20"
            >
              <FileDown className="w-5 h-5" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
