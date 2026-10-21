/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { AboutSection } from './components/AboutSection';
import { FooterCTA } from './components/FooterCTA';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectItem } from './types/portfolio';
import { PROJECTS, PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleShowAllProjects = () => {
    // If user clicks "Show More" on work, open the first project or Behance profile
    window.open(PERSONAL_INFO.behance, '_blank', 'noopener,noreferrer');
  };

  const handleShowMoreBio = () => {
    window.open(PERSONAL_INFO.linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col font-sans">
      {/* Navigation Header */}
      <Header onSelectProject={handleSelectProject} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Work Section */}
        <WorkSection
          onSelectProject={handleSelectProject}
          onShowAllProjects={handleShowAllProjects}
        />

        {/* About Section */}
        <AboutSection onShowMoreBio={handleShowMoreBio} />
      </main>

      {/* Dark Footer CTA Banner */}
      <FooterCTA />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
