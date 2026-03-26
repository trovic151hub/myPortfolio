import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./PageLoader.css";

const LETTERS = ["V", "I", "C", ".", "D", "E", "V"];
const LOADER_DURATION = 2200;

function PageLoader({ onComplete }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const letterInterval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= LETTERS.length) {
          clearInterval(letterInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 120);

    const startTime = performance.now();
    const progressFrame = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min((elapsed / LOADER_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(progressFrame);
    };
    rafRef.current = requestAnimationFrame(progressFrame);

    const exitTimer = setTimeout(onComplete, LOADER_DURATION);

    return () => {
      clearInterval(letterInterval);
      clearTimeout(exitTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="page-loader"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="loader-letters">
        {LETTERS.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: 60, opacity: 0 }}
            animate={visibleCount > i ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className={`loader-letter ${letter === "." ? "loader-letter-dot" : ""}`}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: visibleCount >= LETTERS.length ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="loader-sub"
      >
        Full Stack Developer
      </motion.p>

      <div className="loader-progress-track">
        <div className="loader-progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </motion.div>
  );
}

export default PageLoader;
