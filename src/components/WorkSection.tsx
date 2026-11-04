import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, Project } from "../data/portfolioData";

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
  onShowAllProjects: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({
  onSelectProject,
  onShowAllProjects,
}) => {
  return (
    <section id="work" className="py-16 md:py-24 border-t border-black/10">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between pb-8 md:pb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-black font-heading">
            work.
          </h2>
          <button
            type="button"
            onClick={onShowAllProjects}
            className="bg-[#F5F5F5] hover:bg-[#EBEBEB] text-black text-xs md:text-sm font-medium px-5 py-2.5 rounded-sm transition-colors cursor-pointer inline-flex items-center gap-1.5 group"
          >
            <span>All Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer block select-none"
            >
              <div className="relative group cursor-pointer overflow-hidden rounded-lg bg-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] sm:aspect-[1.18/1]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
                <div className="md:hidden absolute bottom-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold rounded-sm">
                  {project.shortTitle}
                </div>
              </div>

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
