import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface WorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onShowAllProjects: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({
  onSelectProject,
  onShowAllProjects,
}) => {
  return (
    <section id="work" className="py-16 md:py-24 border-t border-black/10">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header: Left "work.", Right "Show More" */}
        <div className="flex items-center justify-between pb-8 md:pb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-black">
            work.
          </h2>

          <button
            type="button"
            onClick={onShowAllProjects}
            className="bg-[#F5F5F5] hover:bg-[#EBEBEB] text-black text-xs md:text-sm font-medium px-5 py-2.5 rounded-sm transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>Show More</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </button>
        </div>

        {/* 2-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id}>
              <div
                onClick={() => onSelectProject(project)}
                className="group relative block aspect-[1.12/1] sm:aspect-[1.18/1] overflow-hidden bg-neutral-100 cursor-pointer rounded-none select-none transition-shadow hover:shadow-xl"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay on Hover matching Yuya */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Title and details revealed on hover */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end pointer-events-none">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <span className="inline-block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white tracking-tight leading-tight flex items-center justify-between">
                      <span>{project.shortTitle}</span>
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white ml-2">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Mobile title indicator always accessible on touch devices */}
                <div className="md:hidden absolute bottom-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold rounded-sm">
                  {project.shortTitle}
                </div>
              </div>

              {/* Minimal caption below card on mobile/tablet for accessibility */}
              <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 md:hidden px-1">
                <span className="font-medium text-neutral-900">{project.title}</span>
                <span>Tap to view</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
