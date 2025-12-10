import React, { useEffect, useRef } from "react";
import "./Skills.css";

function Skills() {
  const skillsRef = useRef([]);

  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Git", level: "70%" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelector(".skill-level").style.width =
              entry.target.querySelector(".skill-level").dataset.level;
          }
        });
      },
      { threshold: 0.5 }
    );

    skillsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index} ref={el => (skillsRef.current[index] = el)}>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div className="skill-level" data-level={skill.level}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;