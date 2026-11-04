import React, { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  FileText,
  CheckCircle2,
  Layers,
  Clock,
  UserCheck,
  Compass,
  ExternalLink,
} from "lucide-react";
import { Project, projects, profile } from "../data/portfolioData";
import { Footer } from "./Footer";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBack,
  onSelectProject,
}) => {
  // Scroll to top smoothly when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project.id]);

  // Find index for next/prev navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  // Process steps array
  const processSteps = project.process
    ? project.process.split("·").map((s) => s.trim())
    : [];

  const isBehancePlaceholder =
    !project.behanceUrl ||
    project.behanceUrl.trim() === "" ||
    project.behanceUrl === "#" ||
    project.behanceUrl.includes("PLACEHOLDER");

  return (
    <div className="min-h-screen w-full bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white animate-in fade-in duration-300">
      {/* Dedicated Sticky Full-Screen Navigation Header */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-black/10 py-3.5 sm:py-4 px-4 sm:px-8 md:px-12 lg:px-16 transition-all shadow-xs">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-4">
          {/* Back to Projects Button */}
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-neutral-900 hover:text-black py-2 px-2.5 sm:px-3 -ml-2 rounded-md hover:bg-black/5 transition-all cursor-pointer"
            aria-label="Back to Projects"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-heading">Back to Projects</span>
          </button>

          {/* Breadcrumb Info (Hidden on very small screens) */}
          <div className="hidden md:flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <span
              onClick={onBack}
              className="hover:text-black cursor-pointer transition-colors"
            >
              Portfolio
            </span>
            <span>/</span>
            <span
              onClick={onBack}
              className="hover:text-black cursor-pointer transition-colors"
            >
              Work
            </span>
            <span>/</span>
            <span className="text-black font-semibold truncate max-w-[200px] lg:max-w-xs">
              {project.shortTitle}
            </span>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {project.pdfUrl && (
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-700 hover:text-black bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded-md transition-colors"
                title="Open PDF Document"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Case Study PDF</span>
              </a>
            )}

            {isBehancePlaceholder ? (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2.5 bg-neutral-200 text-neutral-500 text-xs sm:text-sm font-semibold rounded-md border border-dashed border-neutral-400 cursor-not-allowed"
                title="Behance URL placeholder: please add link in portfolioData.ts"
              >
                <span>Behance (Pending)</span>
              </span>
            ) : (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold rounded-md transition-all shadow-xs group"
                aria-label="View Behance Case Study"
              >
                {/* Behance 'B' Logo SVG */}
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current flex-shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.103 0-6.625-2.738-6.625-6.843 0-4.086 2.502-6.877 6.452-6.877 3.992 0 6.002 2.894 5.751 6.822h-9.141c.143 2.164 1.771 3.518 3.864 3.518 1.636 0 2.766-.828 3.23-1.62h1.569zm-5.46-5.549c-.114-1.634-1.127-2.748-2.76-2.748-1.748 0-2.671 1.139-2.825 2.748h5.585zm-11.266 7.549h-7v-14h7.525c3.088 0 5.475 1.579 5.475 4.382 0 1.642-.962 2.883-2.316 3.49 1.743.606 2.791 2.052 2.791 3.87 0 2.92-2.35 4.258-5.475 4.258zm-4.333-8.232h3.918c1.603 0 2.753-.699 2.753-2.128 0-1.48-1.229-2.001-2.809-2.001h-3.862v4.129zm0 6.137h4.088c1.785 0 3.033-.787 3.033-2.428 0-1.643-1.248-2.361-3.146-2.361h-3.975v4.789z" />
                </svg>
                <span className="hidden sm:inline">View Behance Case Study</span>
                <span className="sm:hidden">Behance Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Main Full-Screen Case Study Content */}
      <main className="flex-1 w-full">
        {/* Project Hero Header Section */}
        <section className="pt-8 sm:pt-12 md:pt-16 pb-10 sm:pb-14 border-b border-black/10 bg-gradient-to-b from-neutral-50/50 to-white">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16">
            {/* Category / Tag */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-black text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-sm">
                {project.category}
              </span>
              {project.duration && (
                <span className="inline-flex items-center gap-1.5 text-xs text-neutral-600 font-medium px-2.5 py-1 bg-neutral-100 rounded-sm">
                  <Clock className="w-3 h-3 text-neutral-500" />
                  <span>{project.duration}</span>
                </span>
              )}
            </div>

            {/* Project Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-black leading-[1.08] font-heading max-w-5xl">
              {project.title}
            </h1>

            {/* Project Introduction / Description */}
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-4xl font-normal">
              {project.description}
            </p>

            {/* PROMINENT BEHANCE CASE STUDY BUTTON (Right below project title & intro) */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-black/10 flex flex-wrap items-center gap-4">
              {isBehancePlaceholder ? (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-900 text-sm flex items-center gap-2">
                  <span>
                    <strong>Behance URL placeholder:</strong> Replace with your Behance URL in{" "}
                    <code>src/data/portfolioData.ts</code>
                  </span>
                </div>
              ) : (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-black hover:bg-neutral-800 text-white text-sm sm:text-base font-semibold rounded-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.103 0-6.625-2.738-6.625-6.843 0-4.086 2.502-6.877 6.452-6.877 3.992 0 6.002 2.894 5.751 6.822h-9.141c.143 2.164 1.771 3.518 3.864 3.518 1.636 0 2.766-.828 3.23-1.62h1.569zm-5.46-5.549c-.114-1.634-1.127-2.748-2.76-2.748-1.748 0-2.671 1.139-2.825 2.748h5.585zm-11.266 7.549h-7v-14h7.525c3.088 0 5.475 1.579 5.475 4.382 0 1.642-.962 2.883-2.316 3.49 1.743.606 2.791 2.052 2.791 3.87 0 2.92-2.35 4.258-5.475 4.258zm-4.333-8.232h3.918c1.603 0 2.753-.699 2.753-2.128 0-1.48-1.229-2.001-2.809-2.001h-3.862v4.129zm0 6.137h4.088c1.785 0 3.033-.787 3.033-2.428 0-1.643-1.248-2.361-3.146-2.361h-3.975v4.789z" />
                  </svg>
                  <span>View Behance Case Study</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              )}

              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 text-sm sm:text-base font-semibold rounded-md transition-colors"
                >
                  <FileText className="w-4 h-4 text-neutral-700" />
                  <span>Open Case Study PDF</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              )}

              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-neutral-600 hover:text-black hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
              >
                <span>Back to All Projects</span>
              </button>
            </div>
          </div>
        </section>

        {/* Project Metadata Strip */}
        <section className="py-8 bg-neutral-50/70 border-b border-black/10">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Role */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-semibold uppercase tracking-wider">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Role</span>
                </div>
                <p className="text-base font-semibold text-black">{project.role}</p>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-semibold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timeline</span>
                </div>
                <p className="text-base font-semibold text-black">
                  {project.duration || "UX Case Study"}
                </p>
              </div>

              {/* Methodology */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-semibold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Methodology</span>
                </div>
                <p className="text-sm font-medium text-neutral-800 leading-snug">
                  {project.process}
                </p>
              </div>

              {/* Direct Links */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-semibold uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  <span>External Links</span>
                </div>
                <div className="flex items-center gap-3 pt-0.5">
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-black hover:underline flex items-center gap-1"
                  >
                    Behance <ArrowUpRight className="w-3 h-3" />
                  </a>
                  {project.pdfUrl && (
                    <>
                      <span className="text-neutral-300">·</span>
                      <a
                        href={project.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-neutral-700 hover:text-black hover:underline flex items-center gap-1"
                      >
                        PDF Document <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Width Showcase Imagery */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xl ring-1 ring-black/5 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 text-center font-medium">
              High-fidelity prototype and case study preview — {project.title}
            </p>
          </div>
        </section>

        {/* Detailed Breakdown: Key Innovations & Process */}
        <section className="py-12 sm:py-16 border-t border-black/10 bg-neutral-50/50">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Innovations & UX Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    Design Highlights
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mt-1 font-heading">
                    Key Innovations & UX Considerations
                  </h2>
                </div>

                <div className="space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-5 sm:p-6 bg-white rounded-lg border border-neutral-200/90 shadow-xs flex items-start gap-4 transition-all hover:border-neutral-400"
                    >
                      <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                        {index + 1}
                      </div>
                      <div className="space-y-1">
                        <p className="text-base font-semibold text-neutral-900 leading-snug">
                          {highlight}
                        </p>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          Carefully iterated through user testing loops, cognitive load evaluations,
                          and interactive touchpoint audits.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Process & Secondary Behance CTA */}
              <div className="lg:col-span-5 space-y-8">
                {/* Process Steps Card */}
                <div className="p-6 sm:p-8 bg-white rounded-lg border border-neutral-200/90 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      Methodology Walkthrough
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-black mt-1 font-heading">
                      Design Execution Pipeline
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {processSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-neutral-50 rounded-md border border-neutral-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm font-semibold text-neutral-800">{step}</span>
                      </div>
                    ))}
                  </div>

                  {project.tools && project.tools.length > 0 && (
                    <div className="pt-4 border-t border-neutral-100">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                        Tools & Artifacts
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Secondary Behance Highlight Box */}
                <div className="p-6 sm:p-8 bg-black text-white rounded-lg shadow-lg space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                      Comprehensive Case Study
                    </span>
                    <h4 className="text-xl font-bold font-heading">
                      Want to see the entire process?
                    </h4>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    View user flows, wireframes, component design systems, and animated interactions
                    published in high resolution on Behance.
                  </p>

                  <div className="pt-2">
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 bg-white hover:bg-neutral-200 text-black text-sm font-semibold rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer group"
                    >
                      <span>View Behance Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous / Next Project Navigation Bar */}
        <section className="py-12 sm:py-16 border-t border-black/10 bg-white">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-200">
              {/* Previous Project */}
              <button
                type="button"
                onClick={() => onSelectProject(prevProject)}
                className="group w-full sm:w-auto flex items-center gap-3 p-4 sm:p-3 rounded-lg hover:bg-neutral-50 transition-colors text-left cursor-pointer border sm:border-0 border-neutral-200"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Previous Project
                  </span>
                  <span className="text-base font-bold text-black group-hover:underline">
                    {prevProject.shortTitle}
                  </span>
                </div>
              </button>

              {/* Center Back to Work Button */}
              <button
                type="button"
                onClick={onBack}
                className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Projects</span>
              </button>

              {/* Next Project */}
              <button
                type="button"
                onClick={() => onSelectProject(nextProject)}
                className="group w-full sm:w-auto flex items-center justify-end gap-3 p-4 sm:p-3 rounded-lg hover:bg-neutral-50 transition-colors text-right cursor-pointer border sm:border-0 border-neutral-200"
              >
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Next Project
                  </span>
                  <span className="text-base font-bold text-black group-hover:underline">
                    {nextProject.shortTitle}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            </div>

            <div className="mt-8 text-center md:hidden">
              <button
                type="button"
                onClick={onBack}
                className="w-full py-3 bg-neutral-100 hover:bg-neutral-200 text-black text-sm font-semibold rounded-md transition-colors cursor-pointer"
              >
                ← Back to All Projects
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
