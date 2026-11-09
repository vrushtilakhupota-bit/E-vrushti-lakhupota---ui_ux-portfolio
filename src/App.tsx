import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { Project, projects, profile } from "./data/portfolioData";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Initialize and handle browser back/forward navigation
  useEffect(() => {
    const handleUrlState = () => {
      const params = new URLSearchParams(window.location.search);
      const projectId = params.get("project");
      if (projectId) {
        const found = projects.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
          return;
        }
      }
      setSelectedProject(null);
    };

    // Check initial URL
    handleUrlState();

    // Listen to browser popstate (back/forward)
    window.addEventListener("popstate", handleUrlState);
    return () => window.removeEventListener("popstate", handleUrlState);
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    const newUrl = `${window.location.pathname}?project=${project.id}`;
    window.history.pushState({ projectId: project.id }, "", newUrl);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    window.history.pushState(null, "", window.location.pathname);
  };

  const handleShowAllProjects = () => {
    window.open(profile.behance, "_blank", "noopener,noreferrer");
  };

  const handleShowMoreBio = () => {
    window.open(profile.linkedin, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col font-sans">
      <Header
        onSelectProject={handleSelectProject}
        onGoHome={() => {
          if (selectedProject) setSelectedProject(null);
        }}
      />
      <main className="flex-1">
        <Hero />
        <WorkSection
          onSelectProject={handleSelectProject}
          onShowAllProjects={handleShowAllProjects}
        />
        <AboutSection onShowMoreBio={handleShowMoreBio} />
      </main>
      <Footer />

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onBack={handleBackToProjects}
          onSelectProject={handleSelectProject}
        />
      )}
    </div>
  );
}
