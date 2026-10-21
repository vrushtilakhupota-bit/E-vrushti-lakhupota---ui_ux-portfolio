import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

interface AboutSectionProps {
  onShowMoreBio: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onShowMoreBio }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-16 md:py-24 border-t border-black/10">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header: Left "about.", Right "Show More" */}
        <div className="flex items-center justify-between pb-8 md:pb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-black">
            about.
          </h2>

          <button
            type="button"
            onClick={onShowMoreBio}
            className="bg-[#F5F5F5] hover:bg-[#EBEBEB] text-black text-xs md:text-sm font-medium px-5 py-2.5 rounded-sm transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>Show More</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </button>
        </div>

        {/* Big Headline Statement matching Yuya's bold display */}
        <div className="my-8 md:my-14">
          <p className="text-3xl sm:text-4xl md:text-[46px] lg:text-[56px] font-bold text-black tracking-tight leading-[1.12] max-w-5xl">
            I craft intuitive digital products and research-grounded experiences, bridging analytical code logic with empathetic human design.
          </p>
        </div>

        {/* 2-Column Split: Editorial Image on Left, Deep Dive Narrative on Right */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Editorial Portrait */}
          <div className="lg:col-span-6">
            <div className="aspect-[3/4] bg-neutral-100 overflow-hidden relative shadow-sm">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-[center_25%] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

          {/* Detailed Narrative & Skills */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight mb-4">
                Philosophy & Background
              </h3>
              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                {PERSONAL_INFO.aboutStory}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">
                Current Focus & Academic Journey
              </h4>
              <p className="text-base text-neutral-800 leading-relaxed">
                Currently pursuing a <span className="font-semibold text-black">Master of Design (M.Des)</span> specializing in UI/UX. My design practice focuses on eliminating cognitive friction, structuring complex data hierarchies, and creating accessible interfaces across mobile apps and tangible service experiences.
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">
                Core Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PERSONAL_INFO.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-neutral-800 py-1 border-b border-neutral-100"
                  >
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Row matching Yuya's text links */}
            <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center gap-8 text-sm font-semibold text-black">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 hover:opacity-60 transition-opacity"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity cursor-pointer text-left"
              >
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-neutral-500 group-hover:text-black transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
