import React, { useState } from 'react';
import { skillsData } from '../../data/skills';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Badge } from '../../components/ui/Badge';
import { Search, Code2, Server, Database, Wrench, BookOpen, Terminal, Cpu, Atom, Palette, Layout, Layers, Zap, Globe, HardDrive, GitBranch, Github, Send, FileText, Box, Binary, Table, Monitor, Network, LayoutGrid } from 'lucide-react';

const iconMap = {
  Coffee: Server,
  Code2: Code2,
  Terminal: Terminal,
  Cpu: Cpu,
  Atom: Atom,
  Code: Code2,
  Palette: Palette,
  Layout: Layout,
  Layers: Layers,
  Server: Server,
  Zap: Zap,
  Globe: Globe,
  Database: Database,
  FileCode: FileText,
  HardDrive: HardDrive,
  GitBranch: GitBranch,
  Github: Github,
  Send: Send,
  FileText: FileText,
  Box: Box,
  Binary: Binary,
  Table: Table,
  Monitor: Monitor,
  Network: Network,
  LayoutGrid: LayoutGrid
};

export const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = skillsData.map((category) => {
    const matchingSkills = category.skills.filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, skills: matchingSkills };
  }).filter((category) => category.skills.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <SectionHeading
        badge="Technical Expertise"
        title="Skills &amp; Technology Stack"
        subtitle="Categorized overview of programming languages, frameworks, tools, and computer science fundamentals."
      />

      {/* Search Input Filter */}
      <div className="max-w-md mx-auto relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search skill (e.g. React, Java, MySQL)..."
          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm text-sm"
        />
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredData.map((cat, idx) => (
          <div key={idx} className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {cat.category}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {cat.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {cat.skills.map((skill, sIdx) => {
                const IconComponent = iconMap[skill.icon] || Code2;
                
                const levelVariantMap = {
                  Proficient: 'emerald',
                  'Working Knowledge': 'brand',
                  Familiar: 'slate'
                };

                return (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between hover:border-brand-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className="w-4 h-4 text-brand-500 shrink-0" />
                      <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                        {skill.name}
                      </span>
                    </div>
                    <Badge variant={levelVariantMap[skill.level] || 'slate'} size="sm">
                      {skill.level}
                    </Badge>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12 text-slate-500 dark:text-slate-400">
          No skills match your search term "{searchTerm}".
        </div>
      )}

    </div>
  );
};
