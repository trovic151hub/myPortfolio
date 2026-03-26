import React from "react";
import "./About.css";

const stats = [
  { value: "0+", label: "Years Experience" },
  { value: "3+", label: "Projects Completed" },
  { value: "10%", label: "Conversion Inc." },
  { value: "7h", label: "Turnaround" },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <span className="section-label">// ABOUT</span>
        <div className="about-container">
          <div className="about-image-wrap">
            <img
              src="https://web-dev-portfolio--victoradeyimika.replit.app/images/avatar.png"
              alt="Ogedengbe Victor"
              className="about-avatar"
            />
          </div>
          <div className="about-content">
            <h3 className="about-greeting">
              Hi I'm<span className="cursor">|</span>
            </h3>
            <h4 className="about-role">A Full Stack Developer</h4>
            <p className="about-bio">
              I'm a passionate Full Stack Developer with over 5 years of
              experience building modern, high-performing web applications. I
              love writing clean code, designing intuitive user interfaces, and
              solving complex problems with elegant solutions. With an eye for
              detail and creativity at the core of my process, I combine clean
              architecture, scalable backends, and immersive front-end design to
              create products that function flawlessly and inspire confidence. My
              goal is simple — turn bold ideas into powerful digital realities. I
              specialize in architecting software that bridges the gap between
              complex engineering and beautiful, intuitive user experiences.
            </p>
            <div className="about-stats">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
