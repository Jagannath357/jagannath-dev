import React from 'react';
import { Button } from '../../components/ui/Button';
import { Home, AlertCircle } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="glass-card p-10 sm:p-16 rounded-3xl border border-slate-200 dark:border-slate-800 text-center max-w-lg space-y-6">
        
        <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/60 text-red-500 mx-auto flex items-center justify-center">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div>
          <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-500 to-brand-accent bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2">
          <Button to="/" variant="primary" size="lg" icon={Home}>
            Back to Home
          </Button>
        </div>

      </div>
    </div>
  );
};
