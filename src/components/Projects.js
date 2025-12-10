import React, { useEffect, useRef } from "react";
import "./Projects.css";

function Projects() {
  const projectRef = useRef([]);

  const projectList = [
    {
      id: 1,
      title: "Mobile Banking App",
      description: "A responsive Mobile App built with HTML, TAILWIND CSS, JAVASCRIPT and firebase for data storage.",
      image: "https://res.cloudinary.com/dut2dpxuc/image/upload/v1764273676/byte_ppl0dr.png",
      link: "https://byte-pay.vercel.app"
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "An online store interface using HTML, TAILWIND CSS, JAVASCRIPT and firebase for data storage.",
      image: "https://res.cloudinary.com/dut2dpxuc/image/upload/v1764188839/e1232d47-ee66-47c9-97fa-b9b86232fb80_n35lqo.png",
      link: "https://pearl-skin-care.vercel.app"
    },
    {
      id: 3,
      title: "Todo App",
      description: "A simple Todo list app with add, edit, delete functionality.",
      image: "https://s3-alpha.figma.com/hub/file/4209109661/47513870-fe30-46be-9e47-d370e6ac91c5-cover.png",
      link: "https://trovic151hub.github.io/todo/"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRef.current.forEach(el => {
      if (el) observer.observe(el);
    });
  }, []);

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div
            className="project-card"
            key={project.id}
            ref={el => (projectRef.current[index] = el)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;