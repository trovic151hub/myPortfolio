import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MOCK_DATA } from "../lib/data";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="projects-header"
        >
          <div className="projects-header-left">
            <span className="section-tag projects-tag">{'// SELECTED WORKS'}</span>
            <h2 className="projects-heading">Projects built for performance</h2>
          </div>
          <p className="projects-sub">
            A selection of my recent work focusing on complex systems, intuitive
            interfaces, and scalable architectures.
          </p>
        </motion.div>

        <div className="projects-list">
          {MOCK_DATA.projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="project-row"
            >
              <div className="project-row-line"></div>
              <div className="project-row-line-active"></div>

              <div className="project-row-inner">
                <div className="project-info">
                  <div className="project-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tag">{tech}</span>
                    ))}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-links">
                    {project.comingSoon ? (
                      <span className="project-coming-soon">
                        <span className="coming-soon-dot"></span>
                        Coming Soon
                      </span>
                    ) : (
                      <>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link project-link-primary"
                        >
                          Live Demo <ArrowUpRight size={14} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link project-link-muted"
                        >
                          Source Code <ArrowUpRight size={14} />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                <div className="project-image-col">
                  <div className="project-image-wrap">
                    <div className="project-image-overlay"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
