import React, { useEffect, useRef } from "react";

const projects = [
  {
    tags: ["React", "TypeScript", "Recharts", "Node.js"],
    title: "FinDash - Financial Dashboard",
    description: "A comprehensive real-time financial dashboard with complex data visualizations, transaction tracking, and predictive analytics.",
    demo: "https://example.com/",
    source: "https://github.com/trovic151hub",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    tags: ["Next.js", "Tailwind", "Stripe", "PostgreSQL"],
    title: "Lumina - E-commerce Platform",
    description: "High-performance headless e-commerce storefront with fluid animations, cart management, and seamless checkout flow.",
    demo: "https://example.com/",
    source: "https://github.com/trovic151hub",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    tags: ["React", "WebSockets", "Supabase", "Tailwind"],
    title: "CollabSpace - Team Workspace",
    description: "Real-time collaborative workspace featuring rich text editing, presence indicators, and instant messaging.",
    demo: "https://example.com/",
    source: "https://github.com/trovic151hub",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    tags: ["Vue", "TypeScript", "Electron", "Vite"],
    title: "DevFlow - Developer Tools",
    description: "A productivity suite for developers including an API tester, regex builder, and JSON formatter.",
    demo: "https://example.com/",
    source: "https://github.com/trovic151hub",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "#0d1321",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.5s ease",
        opacity: 0,
        transform: "translateY(30px)",
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid rgba(0,255,136,0.2)";
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(13,19,33,0.8) 100%)" }} />
      </div>
      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "rgba(0,255,136,0.08)",
                color: "#00ff88",
                padding: "3px 10px",
                borderRadius: "99px",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.03em",
                border: "1px solid rgba(0,255,136,0.15)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 style={{ color: "#ffffff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "10px", letterSpacing: "-0.3px" }}>
          {project.title}
        </h3>
        <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "20px" }}>
          {project.description}
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#00ff88",
              fontSize: "0.8rem",
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid rgba(0,255,136,0.3)",
              padding: "6px 16px",
              borderRadius: "4px",
              transition: "all 0.2s",
              letterSpacing: "0.03em",
            }}
            onMouseEnter={(e) => { e.target.style.background = "rgba(0,255,136,0.1)"; }}
            onMouseLeave={(e) => { e.target.style.background = "transparent"; }}
          >
            Live Demo
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#94a3b8",
              fontSize: "0.8rem",
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "6px 16px",
              borderRadius: "4px",
              transition: "all 0.2s",
              letterSpacing: "0.03em",
            }}
            onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.05)"; e.target.style.color = "#ffffff"; }}
            onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#94a3b8"; }}
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ background: "#080c14", padding: "120px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <p style={{ color: "#00ff88", fontFamily: "monospace", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "12px", fontWeight: 500 }}>
          // SELECTED WORKS
        </p>
        <h2 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px" }}>
          Projects built for performance
        </h2>
        <p style={{ color: "#64748b", fontSize: "1rem", marginBottom: "56px", lineHeight: 1.6 }}>
          A selection of my recent work focusing on complex systems, intuitive interfaces, and scalable architectures.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }} className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Projects;
