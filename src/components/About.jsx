import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 3, suffix: '+', label: 'Years Exp' },
  { value: 25, suffix: '+', label: 'Projects' },
  { value: 32, suffix: '%', label: 'Conversion Inc.' },
  { value: 24, suffix: 'h', label: 'Turnaround' },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, 1800 / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-dark py-[120px] relative"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(0,255,136,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          className="relative"
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
        >
          <div
            className="absolute rounded-lg"
            style={{
              top: 0, left: 0, right: '20px', bottom: '20px',
              border: '1px solid rgba(0,255,136,0.25)',
              transform: 'translate(-12px, 12px)',
            }}
          />
          <motion.img
            src="https://res.cloudinary.com/dut2dpxuc/image/upload/v1764266975/WhatsApp_Image_2025-11-27_at_18.56.28_4f96f79e_sa58sp.jpg"
            alt="Victor Adeyimika"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full rounded-lg block relative z-[1] max-h-[500px] object-cover"
            style={{ filter: 'brightness(0.9)' }}
          />
        </motion.div>

        <div>
          <motion.p
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
            className="text-brand font-mono text-sm tracking-widest mb-4 font-normal"
          >
            {"// ABOUT"}
          </motion.p>

          <motion.h3
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}
            className="text-slate-400 text-[1.1rem] mb-2 font-normal"
          >
            Hi<span className="cursor-blink text-brand font-bold">|</span>
          </motion.h3>

          <motion.h2
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3}
            className="text-white font-heading font-extrabold mb-5 tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
          >
            A Full Stack Developer
          </motion.h2>

          <motion.p
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={4}
            className="text-slate-400 text-base leading-[1.8] mb-10"
          >
            With over 3 years of experience in building modern web applications, I specialize in the React
            ecosystem and scalable frontend architectures. I'm passionate about clean code, intuitive user
            interfaces, and solving complex problems with elegant solutions. I specialize in bridging the gap
            between complex engineering and beautiful, intuitive user experiences.
          </motion.p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={5 + i}
                whileHover={{ borderColor: 'rgba(0,255,136,0.35)' }}
                className="bg-card rounded-lg p-5 transition-colors duration-200"
                style={{ border: '1px solid rgba(0,255,136,0.1)' }}
              >
                <div className="text-brand text-[1.75rem] font-black mb-1 font-heading">
                  <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <div className="text-slate-500 text-xs tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
