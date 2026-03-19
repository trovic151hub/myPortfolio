import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-dark flex items-center pt-20 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(0,255,136,0.06) 0%, transparent 60%)' }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ top: '20%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,255,136,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-brand font-mono text-sm tracking-widest mb-5 font-normal"
          >
            {"// PORTFOLIO"}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-white font-heading font-extrabold leading-[1.05] mb-6 tracking-[-2px]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Building Flexible Web{' '}
            <span className="text-brand">Applications</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-slate-400 text-lg leading-[1.7] mb-10 max-w-[480px]"
          >
            Modern software systems built with scalable architecture to help your business offer fast and wide service.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex gap-4 flex-wrap"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -3, background: '#00e07a' }}
              whileTap={{ scale: 0.97 }}
              className="bg-brand text-dark px-8 py-[14px] rounded font-bold text-[0.9rem] tracking-wider font-heading inline-block"
            >
              View Work
            </motion.a>
            <motion.a
              href="https://res.cloudinary.com/dut2dpxuc/image/upload/v1764266975/WhatsApp_Image_2025-11-27_at_18.56.28_4f96f79e_sa58sp.jpg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, background: 'rgba(0,255,136,0.08)' }}
              whileTap={{ scale: 0.97 }}
              className="text-brand px-8 py-[14px] rounded font-semibold text-[0.9rem] tracking-wider font-heading inline-block"
              style={{ border: '1px solid rgba(0,255,136,0.4)' }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="hidden md:block relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="absolute rounded-lg"
            style={{
              top: '-20px', right: '-20px',
              width: '100%', height: '100%',
              border: '1px solid rgba(0,255,136,0.2)',
              transform: 'translate(10px, 10px)',
            }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
            alt="Web Development"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full rounded-lg block relative z-[1]"
            style={{ filter: 'brightness(0.8) saturate(0.9)' }}
          />
          <div
            className="absolute inset-0 rounded-lg z-[2] pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, transparent 60%)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
