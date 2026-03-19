import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const tabs = ['Frontend', 'Backend', 'Services & Tools'];

const skills = {
  Frontend: [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', level: 92 },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', level: 95 },
    { name: 'TailwindCSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', level: 92 },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', level: 72 },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', level: 85 },
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26', level: 98 },
  ],
  Backend: [
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', level: 88 },
    { name: 'Express', icon: 'https://cdn.simpleicons.org/express/FFFFFF', level: 85 },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', level: 78 },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', level: 72 },
    { name: 'REST APIs', icon: 'https://cdn.simpleicons.org/fastapi/009688', level: 90 },
    { name: 'GraphQL', icon: 'https://cdn.simpleicons.org/graphql/E10098', level: 65 },
  ],
  'Services & Tools': [
    { name: 'Git / GitHub', icon: 'https://cdn.simpleicons.org/github/FFFFFF', level: 92 },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', level: 70 },
    { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonwebservices/FF9900', level: 65 },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E', level: 75 },
    { name: 'VS Code', icon: 'https://cdn.simpleicons.org/visualstudiocode/007ACC', level: 98 },
    { name: 'CI/CD', icon: 'https://cdn.simpleicons.org/githubactions/2088FF', level: 72 },
  ],
};

const tabDescriptions = {
  Frontend: 'Building responsive, accessible, and performant user interfaces with modern web technologies.',
  Backend: 'Designing and building robust server-side systems, APIs, and databases for scalable applications.',
  'Services & Tools': 'Leveraging industry-standard tools and cloud services to streamline development and deployment.',
};

function SkillBar({ name, icon, level, animate, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-center gap-[14px] py-3"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
    >
      <img src={icon} alt={name} className="w-[22px] h-[22px] object-contain shrink-0" />
      <span className="text-slate-300 text-[0.9rem] font-medium min-w-[120px]">{name}</span>
      <div
        className="flex-1 rounded-full h-[6px] overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={animate ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.08 + 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #00ff88, #00cc6a)' }}
        />
      </div>
      <span className="text-brand text-xs font-bold min-w-[36px] text-right font-mono">{level}%</span>
    </motion.div>
  );
}

function Expertise() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, [activeTab]);

  return (
    <section id="expertise" ref={sectionRef} className="bg-card py-[120px] relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(0,255,136,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-brand font-mono text-sm tracking-widest mb-3 font-normal"
        >
          {"// EXPERTISE"}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-heading font-extrabold tracking-tight mb-10"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
        >
          Technologies &amp; Services
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex mb-8 rounded-lg p-1 w-fit"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-[10px] rounded-md text-sm font-heading tracking-wide border-none cursor-pointer transition-all duration-200"
              style={{
                background: activeTab === tab ? '#00ff88' : 'transparent',
                color: activeTab === tab ? '#080c14' : '#94a3b8',
                fontWeight: activeTab === tab ? 700 : 500,
              }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-slate-500 text-[0.95rem] mb-8 leading-relaxed"
          >
            {tabDescriptions[activeTab]}
          </motion.p>
        </AnimatePresence>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
          {skills[activeTab].map((skill, i) => (
            <SkillBar key={`${activeTab}-${skill.name}`} {...skill} animate={animate} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
