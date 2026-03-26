import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Hi, I'm Victor Adeyimika</h1>
        <p>Frontend Developer | React Enthusiast | Creative Problem Solver</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;