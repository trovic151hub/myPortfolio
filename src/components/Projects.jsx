import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    tags: ['React', 'TypeScript', 'Recharts', 'Node.js'],
    title: 'FinDash - Financial Dashboard',
    description: 'A comprehensive real-time financial dashboard with complex data visualizations, transaction tracking, and predictive analytics.',
    demo: 'https://example.com/',
    source: 'https://github.com/trovic151hub',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    tags: ['Next.js', 'Tailwind', 'Stripe', 'PostgreSQL'],
    title: 'Lumina - E-commerce Platform',
    description: 'High-performance headless e-commerce storefront with fluid animations, cart management, and seamless checkout flow.',
    demo: 'https://example.com/',
    source: 'https://github.com/trovic151hub',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    tags: ['React', 'WebSockets', 'Supabase', 'Tailwind'],
    title: 'CollabSpace - Team Workspace',
    description: 'Real-time collaborative workspace featuring rich text editing, presence indicators, and instant messaging.',
    demo: 'https://example.com/',
    source: 'https://github.com/trovic151hub',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    tags: ['Vue', 'TypeScript', 'Electron', 'Vite'],
    title: 'DevFlow - Developer Tools',
    description: 'A productivity suite for developers including an API tester, regex builder, and JSON formatter.',
    demo: 'https://example.com/',
    source: 'https://github.com/trovic151hub',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 2) * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.35)' }}
      className="bg-card rounded-xl overflow-hidden transition-colors duration-300"
      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,255,136,0.25)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
    >
      <div className="relative overflow-hidden h-[200px]">
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover block"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(13,19,33,0.85) 100%)' }}
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-brand text-xs font-semibold tracking-wide px-[10px] py-[3px] rounded-full"
              style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.15)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-white font-heading font-bold text-[1.15rem] mb-[10px] tracking-tight">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-[1.65] mb-5">{project.description}</p>

        <div className="flex gap-3">
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ background: 'rgba(0,255,136,0.12)' }}
            className="text-brand text-xs font-semibold tracking-wide px-4 py-[6px] rounded inline-block"
            style={{ border: '1px solid rgba(0,255,136,0.3)' }}
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ background: 'rgba(255,255,255,0.06)', color: '#ffffff' }}
            className="text-slate-400 text-xs font-semibold tracking-wide px-4 py-[6px] rounded inline-block"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="bg-dark py-[120px]">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-brand font-mono text-sm tracking-widest mb-3 font-normal"
        >
          {"// SELECTED WORKS"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-heading font-extrabold tracking-tight mb-3"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
        >
          Projects built for performance
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-500 text-base mb-14 leading-relaxed"
        >
          A selection of my recent work focusing on complex systems, intuitive interfaces, and scalable architectures.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
