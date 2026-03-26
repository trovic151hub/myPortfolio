import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-overlay"></div>
      <img
        src="https://web-dev-portfolio--victoradeyimika.replit.app/images/hero-bg.png"
        alt="Hero Background"
        className="hero-bg-img"
      />
      <div className="hero-content">
        <span className="section-label">// PORTFOLIO</span>
        <h1>
          Building Flexible Web<br />Applications
        </h1>
        <p>
          Modern software systems built with scalable architecture to help your
          business offer fast and wide service.
        </p>
        <div className="hero-buttons">
          <a href="#work" className="btn btn-primary">View Work</a>
          <a
            href="https://web-dev-portfolio--victoradeyimika.replit.app/images/hero-bg.png"
            className="btn btn-outline"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
