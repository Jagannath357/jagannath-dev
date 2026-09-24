import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu, closeMobileMenu } from '../../store/slices/uiSlice';
import { ThemeToggle } from '../common/ThemeToggle';
import { socialLinks } from '../../data/socialLinks';
import { 
  Menu, 
  X, 
  FileDown, 
  Code2, 
  Home, 
  User, 
  Briefcase, 
  Award, 
  Building2, 
  Trophy, 
  Mail,
  Github,
  Linkedin,
  ChevronRight
} from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'Skills', path: '/skills', icon: Code2 },
  { name: 'Projects', path: '/projects', icon: Briefcase },
  { name: 'Certificates', path: '/certificates', icon: Award },
  { name: 'Experience', path: '/experience', icon: Building2 },
  { name: 'Achievements', path: '/achievements', icon: Trophy },
  { name: 'Contact', path: '/contact', icon: Mail }
];

export const Navbar = () => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.ui.isMobileMenuOpen);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    dispatch(closeMobileMenu());
  }, [location.pathname, dispatch]);

  // Lock body scroll when mobile sidebar drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        dispatch(closeMobileMenu());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, dispatch]);

  return (
    <>
      {/* Fixed Sticky Header Navigation Bar */}
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

            {/* Desktop Navigation Links (Visible on Large screens lg: 1024px+) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 xl:px-3.5 xl:py-2 rounded-xl text-xs xl:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4 opacity-70" />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </nav>

            {/* Right Side Action Controls */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Desktop Resume Download Button */}
              <a
                href={socialLinks.resume}
                download="Jagannath_Padhi_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-accent hover:from-brand-700 hover:to-indigo-700 shadow-sm shadow-brand-500/20 transition-all hover:scale-[1.02] active:scale-95"
                title="Download Resume PDF"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
              </a>

              {/* Theme Switcher Toggle Button */}
              <ThemeToggle />

              {/* Mobile / Tablet Menu & Cross Toggle Button (Visible on screens < lg) */}
              <button
                onClick={() => dispatch(toggleMobileMenu())}
                className={`lg:hidden flex items-center gap-2 px-3 py-2 rounded-xl font-semibold text-sm transition-all duration-300 border focus:outline-none ${
                  isMobileMenuOpen
                    ? 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <>
                    <X className="w-5 h-5 text-red-500 animate-spin-once" />
                    <span className="text-xs sm:text-sm font-bold text-red-500">Close</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-5 h-5 text-brand-500" />
                    <span className="text-xs sm:text-sm font-bold">Menu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay for Mobile / Tablet Sidebar Drawer */}
      {isMobileMenuOpen && (
        <div
          onClick={() => dispatch(closeMobileMenu())}
          className="lg:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 transition-opacity duration-300 animate-fade-in"
          aria-hidden="true"
        />
      )}

      {/* Slide-over Responsive Sidebar Drawer for Mobile & Tablet */}
      <aside
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[85%] sm:w-[380px] max-w-full bg-white dark:bg-[#0b0f19] border-l border-slate-200 dark:border-slate-800 shadow-2xl z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        aria-label="Mobile Navigation Sidebar"
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
          <NavLink
            to="/"
            onClick={() => dispatch(closeMobileMenu())}
            className="flex items-center gap-2 font-extrabold text-lg text-slate-900 dark:text-white"
          >
            <div className="p-1.5 rounded-lg bg-gradient-to-tr from-brand-600 to-brand-accent text-white">
              <Code2 className="w-5 h-5" />
            </div>
            <span>
              Jagannath<span className="text-brand-500">.dev</span>
            </span>
          </NavLink>

          {/* Dedicated Close (Cross) Button in Sidebar Header */}
          <button
            onClick={() => dispatch(closeMobileMenu())}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Navigation Items */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 px-3">
            Menu Navigation
          </p>

          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => dispatch(closeMobileMenu())}
                className={({ isActive }) =>
                  `group flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-500 text-white font-semibold shadow-md shadow-brand-500/25'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-brand-600 dark:hover:text-brand-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500 group-hover:text-brand-500'}`} />
                      <span>{item.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-white translate-x-0.5' : 'text-slate-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5'}`} />
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Sidebar Footer Action Controls */}
        <div className="p-5 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 space-y-4">
          {/* Download Resume Button inside Sidebar */}
          <a
            href={socialLinks.resume}
            download="Jagannath_Padhi_Resume.pdf"
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-accent hover:from-brand-700 hover:to-indigo-700 shadow-md shadow-brand-500/20 active:scale-98 transition-all"
          >
            <FileDown className="w-5 h-5" />
            <span>Download Resume PDF</span>
          </a>

          {/* Quick Social Icons inside Sidebar */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.email}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors"
              title="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

