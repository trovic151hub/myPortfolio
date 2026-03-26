import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

const tabs = [
  {
    id: "frontend",
    label: "Frontend",
    description:
      "Building responsive, accessible, and performant user interfaces with modern web technologies.",
    skills: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", level: 90 },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", level: 85 },
      { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", level: 80 },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", level: 75 },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", level: 70 },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", level: 95 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description:
      "Designing and building robust server-side applications, APIs, and database architectures.",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", level: 85 },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/FFFFFF", level: 80 },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", level: 75 },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", level: 70 },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", level: 65 },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098", level: 60 },
    ],
  },
  {
    id: "tools",
    label: "Services & Tools",
    description:
      "Leveraging industry-standard tools and platforms to build, ship, and maintain production-grade software.",
    skills: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", level: 90 },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", level: 70 },
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900", level: 65 },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", level: 75 },
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624", level: 70 },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37", level: 80 },
    ],
  },
];

function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const barRefs = useRef([]);

  const currentTab = tabs.find((t) => t.id === activeTab);

  useEffect(() => {
    barRefs.current.forEach((el) => {
      if (el) {
        el.style.width = "0%";
        setTimeout(() => {
          el.style.width = el.dataset.level + "%";
        }, 100);
      }
    });
  }, [activeTab]);

  return (
    <section className="expertise" id="skills">
      <div className="expertise-inner">
        <span className="section-tag">// EXPERTISE</span>
        <h2 className="expertise-heading">Technologies &amp; Services</h2>

        <div className="expertise-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <p className="expertise-desc">{currentTab.description}</p>

        <div className="expertise-grid">
          {currentTab.skills.map((skill, index) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-header">
                <div className="skill-info">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-bar"
                  data-level={skill.level}
                  ref={(el) => (barRefs.current[index] = el)}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
