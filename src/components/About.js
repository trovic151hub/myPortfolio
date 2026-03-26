import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { MOCK_DATA } from "../lib/data";
import "./About.css";

const stats = [
  { target: 5,  suffix: "+", label: "Years Experience" },
  { target: 10, suffix: "+", label: "Projects Completed" },
  { target: 32, suffix: "%", label: "Conversion Inc." },
  { target: 24, suffix: "h", label: "Turnaround" },
];

function About() {
  const [text, setText] = useState("");
  const [counts, setCounts] = useState(stats.map(() => 0));
  const fullText = `Hi I'm ${MOCK_DATA.developer.name}`;
  const sectionRef = useRef(null);
  const hasStarted = useRef(false);
  const isInView = useInView(sectionRef, { once: false, margin: "0px" });

  useEffect(() => {
    if (!isInView) {
      setText("");
      setCounts(stats.map(() => 0));
      hasStarted.current = false;
      return;
    }
    if (hasStarted.current) return;
    hasStarted.current = true;

    let index = 0;
    const typeInterval = setInterval(() => {
      index++;
      setText(fullText.slice(0, index));
      if (index >= fullText.length) clearInterval(typeInterval);
    }, 80);

    const countIntervals = stats.map((stat, i) => {
      const duration = 1500;
      const steps = stat.target;
      const stepTime = Math.floor(duration / steps);
      let current = 0;
      const interval = setInterval(() => {
        current++;
        setCounts((prev) => {
          const next = [...prev];
          next[i] = current;
          return next;
        });
        if (current >= stat.target) clearInterval(interval);
      }, stepTime);
      return interval;
    });

    return () => {
      clearInterval(typeInterval);
      countIntervals.forEach(clearInterval);
    };
  }, [isInView, fullText]);

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="about-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="about-tag-wrap"
        >
          <span className="section-tag">{'// ABOUT'}</span>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-image-col"
          >
            <div className="about-image-frame">
              <div className="about-image-border"></div>
              <img
                src="https://web-dev-portfolio--victoradeyimika.replit.app/images/avatar.png"
                alt={MOCK_DATA.developer.name}
                className="about-avatar"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-content-col"
          >
            <h3 className="about-greeting">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="about-cursor"
              >
                |
              </motion.span>
            </h3>

            <h4 className="about-role">A Full Stack Developer</h4>

            <p className="about-bio">
              {MOCK_DATA.developer.about} I specialize in architecting software
              that bridges the gap between complex engineering and beautiful,
              intuitive user experiences.
            </p>

            <div className="about-stats">
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-value">
                    {counts[i]}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
