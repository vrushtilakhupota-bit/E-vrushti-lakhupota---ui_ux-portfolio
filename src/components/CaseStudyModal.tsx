import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { ArrowUpRight, CheckCircle2, FileText, X } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Window */}
      <div className="relative w-full max-w-4xl bg-white text-black rounded-lg shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto border border-neutral-200 animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-white sticky top-0 z-20">
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              {project.category}
            </span>
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-black">
              {project.shortTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-700"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Visual Preview */}
          <div className="aspect-[16/9] w-full rounded-md overflow-hidden bg-neutral-100 ring-1 ring-black/5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Overview & Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-4">
              <h4 className="text-2xl font-bold tracking-tight text-black">
                {project.title}
              </h4>
              <p className="text-base text-neutral-700 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="pt-2">
                <h5 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">
                  Key Innovations & UX Considerations
                </h5>
                <ul className="space-y-2.5">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Project Meta Column */}
            <div className="md:col-span-4 bg-neutral-50 p-5 rounded-md space-y-4 border border-neutral-100">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                  Role
                </span>
                <span className="text-sm font-semibold text-black">{project.role}</span>
              </div>

              {project.duration && (
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Timeline
                  </span>
                  <span className="text-sm font-medium text-neutral-800">{project.duration}</span>
                </div>
              )}

              {project.process && (
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Methodology
                  </span>
                  <span className="text-xs text-neutral-700 leading-relaxed">{project.process}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 space-y-2 border-t border-neutral-200">
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-black hover:bg-neutral-800 text-white text-xs font-semibold rounded flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View on Behance</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-neutral-200 hover:bg-neutral-300 text-neutral-900 text-xs font-semibold rounded flex items-center justify-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Open Case Study PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
