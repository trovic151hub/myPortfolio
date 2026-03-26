import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Victor Adeyimika, a passionate frontend developer skilled in React, JavaScript, and CSS. 
            I love creating responsive and modern websites that provide great user experiences.
          </p>
          <p>
            My goal is to build applications that are not only functional but also visually appealing and user-friendly.
          </p>
        </div>
        <div className="about-image">
          <img src="https://res.cloudinary.com/dut2dpxuc/image/upload/v1764266975/WhatsApp_Image_2025-11-27_at_18.56.28_4f96f79e_sa58sp.jpg" alt="Victor Adeyimika" />
        </div>
      </div>
    </section>
  );
}

export default About;