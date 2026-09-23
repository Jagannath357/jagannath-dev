import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProjectCategory } from '../../store/slices/uiSlice';
import { projectsData, projectCategories } from '../../data/projects';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { ProjectCard } from '../../components/projects/ProjectCard';

export const Projects = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.ui.activeProjectCategory);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(activeCategory));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <SectionHeading
        badge="Software Engineering Showcase"
        title="All Projects"
        subtitle="Explore full-stack, frontend, Java, and AI applications built with modern tools and frameworks."
      />

      {/* Filter Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => dispatch(setProjectCategory(cat))}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                isActive
                  ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20'
                  : 'bg-white dark:bg-[#131b2e] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-slate-500 dark:text-slate-400">
          No projects found under category "{activeCategory}".
        </div>
      )}

    </div>
  );
};
