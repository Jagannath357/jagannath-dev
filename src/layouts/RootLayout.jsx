import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CertificateModal } from '../components/certificates/CertificateModal';
import { AnimatedBackground } from '../components/common/AnimatedBackground';

export const RootLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col justify-between text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      <AnimatedBackground />
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
      <CertificateModal />
    </div>
  );
};
