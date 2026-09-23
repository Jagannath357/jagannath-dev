import React from 'react';
import { achievementsData } from '../../data/achievements';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Badge } from '../../components/ui/Badge';
import { Trophy, Award, Users, BookOpen, Star } from 'lucide-react';

const iconMap = {
  Trophy: Trophy,
  Award: Award,
  Users: Users,
  BookOpen: BookOpen
};

export const Achievements = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <SectionHeading
        badge="Recognitions &amp; Milestones"
        title="Achievements &amp; Activities"
        subtitle="Verified hackathon participation, community leadership roles, and technical milestones."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievementsData.map((ach) => {
          const IconComp = iconMap[ach.icon] || Star;

          return (
            <div
              key={ach.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 hover:shadow-xl transition-all duration-300 flex items-start gap-5"
            >
              <div className="p-4 rounded-2xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 shrink-0">
                <IconComp className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="brand" size="sm">{ach.category}</Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {ach.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {ach.title}
                </h3>

                <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                  {ach.organization}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  {ach.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
