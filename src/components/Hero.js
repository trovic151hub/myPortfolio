import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import "./Hero.css";

const NOISE_SVG =
  "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";

function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="hero-noise"
        style={{ backgroundImage: `url("${NOISE_SVG}")` }}
      ></div>

      <div className="hero-image-panel">
        <img
          src="https://web-dev-portfolio--victoradeyimika.replit.app/images/hero-bg.png"
          alt="Hero Background"
          className="hero-bg-img"
        />
        <div className="hero-image-gradient"></div>
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-tag-wrap"
        >
          <span className="section-tag">{'// PORTFOLIO'}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-heading"
        >
          Building Flexible Web<br className="hero-br" /> Applications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-sub"
        >
          Modern software systems built with scalable architecture to help your
          business offer fast and wide service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-buttons"
        >
          <a
            href="#projects"
            className="hero-btn hero-btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Work <ArrowRight size={16} />
          </a>
          <button className="hero-btn hero-btn-outline">
            <Download size={16} /> Download CV
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
