import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Check, Copy, X } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface HeaderProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectProject }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold tracking-tight text-black hover:opacity-70 transition-opacity uppercase"
          >
            {PERSONAL_INFO.firstName}
          </a>

          {/* Minimal 6-dots button matching Yuya */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group relative p-2.5 rounded-lg hover:bg-black/5 transition-all focus:outline-none cursor-pointer"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              {isMenuOpen ? (
                <X className="w-5 h-5 text-black" strokeWidth={2.2} />
              ) : (
                <div className="grid grid-cols-2 gap-[4px] p-0.5">
                  <span className="w-[4.5px] h-[4.5px] bg-black rounded-[0.5px] group-hover:scale-110 transition-transform" />
                  <span className="w-[4.5px] h-[4.5px] bg-black rounded-[0.5px] group-hover:scale-110 transition-transform" />
                  <span className="w-[4.5px] h-[4.5px] bg-black rounded-[0.5px] group-hover:scale-110 transition-transform" />
                  <span className="w-[4.5px] h-[4.5px] bg-black rounded-[0.5px] group-hover:scale-110 transition-transform" />
                  <span className="w-[4.5px] h-[4.5px] bg-black rounded-[0.5px] group-hover:scale-110 transition-transform" />
                  <span className="w-[4.5px] h-[4.5px] bg-black rounded-[0.5px] group-hover:scale-110 transition-transform" />
                </div>
              )}
            </div>
          </button>
        </div>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between p-6 md:p-12 lg:px-16 overflow-y-auto animate-in fade-in duration-200">
          {/* Top Bar inside Menu */}
          <div className="max-w-[1360px] w-full mx-auto flex items-center justify-between pb-8 border-b border-white/10">
            <span className="text-xl md:text-2xl font-bold tracking-tight uppercase">
              {PERSONAL_INFO.firstName}
            </span>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="max-w-[1360px] w-full mx-auto py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Primary Navigation */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Navigation</p>
              <ul className="space-y-4">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo('work')}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold hover:text-neutral-300 transition-colors block text-left cursor-pointer"
                  >
                    work.
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo('about')}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold hover:text-neutral-300 transition-colors block text-left cursor-pointer"
                  >
                    about.
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo('contact')}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold hover:text-neutral-300 transition-colors block text-left cursor-pointer"
                  >
                    contact.
                  </button>
                </li>
              </ul>
            </div>

            {/* Projects List */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Selected Works</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECTS.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => {
                      setIsMenuOpen(false);
                      onSelectProject(project);
                    }}
                    className="group cursor-pointer p-3.5 rounded-lg bg-neutral-900/90 border border-neutral-800 hover:border-neutral-600 transition-all"
                  >
                    <div className="aspect-[4/3] rounded overflow-hidden mb-3 bg-neutral-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-white group-hover:text-neutral-300 flex items-center justify-between text-sm">
                      <span>{project.shortTitle}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">{project.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Contact inside Menu */}
          <div className="max-w-[1360px] w-full mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-neutral-400">Direct Email:</span>
              <span className="text-sm font-medium text-white">{PERSONAL_INFO.email}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-300" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                Behance <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
