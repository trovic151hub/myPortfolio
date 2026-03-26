import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    tags: ["React", "TypeScript", "Recharts", "Node.js"],
    title: "FinDash - Financial Dashboard",
    description:
      "A comprehensive real-time financial dashboard with complex data visualizations, transaction tracking, and predictive analytics.",
    demo: "https://example.com/",
    source: "https://github.com/trovic151hub",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 2,
    tags: ["Next.js", "Tailwind", "Stripe", "PostgreSQL"],
    title: "Lumina - E-commerce Platform",
    description:
      "High-performance headless e-commerce storefront with fluid animations, cart management, and seamless checkout flow.",
    demo: "https://example.com/",
    source: "https://github.com/trovic151hub",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 3,
    tags: ["React", "WebSockets", "Supabase", "Tailwind"],
    title: "CollabSpace - Team Workspace",
    description:
      "Real-time collaborative workspace featuring rich text editing, presence indicators, and instant messaging.",
    demo: "https://example.com/",
    source: "https://github.com/trovic151hub",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: 4,
    tags: ["Vue", "TypeScript", "Electron", "Vite"],
    title: "DevFlow - Developer Tools",
    description:
      "A productivity suite for developers including an API tester, regex builder, and JSON formatter.",
    demo: "https://example.com/",
    source: "https://github.com/trovic151hub",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
];

function Projects() {
  return (
    <section className="projects" id="work">
      <div className="projects-inner">
        <span className="section-label">// SELECTED WORKS</span>
        <h2 className="projects-heading">Projects built for performance</h2>
        <p className="projects-sub">
          A selection of my recent work focusing on complex systems, intuitive
          interfaces, and scalable architectures.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-card-top">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                  </a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="project-link">
                    Source Code
                  </a>
                </div>
              </div>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
