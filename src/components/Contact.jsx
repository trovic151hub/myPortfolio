import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const inputClass = `
  w-full bg-dark rounded-md px-4 py-3 text-white text-[0.9rem] outline-none
  transition-colors duration-200 font-body
`.trim();

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', brief: '' });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', brief: '' });
  };

  const contactInfo = [
    { label: 'Email', value: 'victoradeyimika0@gmail.com', href: 'mailto:victoradeyimika0@Gmail.com' },
    { label: 'Location', value: 'Lagos, Nigeria', href: null },
    { label: 'Phone', value: '+234 (0) 000 0000', href: null },
  ];

  return (
    <section id="contact" ref={ref} className="bg-card py-[120px] relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(0,255,136,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          className="text-brand font-mono text-sm tracking-widest mb-3 font-normal"
        >
          {"// CONTACT"}
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
          className="text-white font-heading font-extrabold tracking-tight mb-3 max-w-[600px]"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
        >
          Let's build something your clients instantly trust
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}
          className="text-slate-500 text-base mb-16 leading-relaxed"
        >
          Fill out the form with a brief description of your project, and I'll get back to you within 24 hours.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16">
          <div>
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3 + i}
                whileHover={{ borderColor: 'rgba(0,255,136,0.3)' }}
                className="bg-dark rounded-lg px-6 py-5 mb-4 transition-colors duration-200"
                style={{ border: '1px solid rgba(0,255,136,0.08)' }}
              >
                <div className="text-brand text-[0.7rem] tracking-[0.15em] font-bold mb-2 uppercase font-mono">
                  {info.label}
                </div>
                {info.href ? (
                  <a href={info.href} className="text-slate-300 text-[0.95rem] font-medium no-underline">
                    {info.value}
                  </a>
                ) : (
                  <div className="text-slate-300 text-[0.95rem] font-medium">{info.value}</div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3}
          >
            <div className="mb-5">
              <label className="block text-slate-400 text-xs mb-2 tracking-wider">Name</label>
              <input
                name="name" value={form.name} onChange={handleChange} required
                placeholder="Your name"
                className={inputClass}
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(0,255,136,0.4)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              />
            </div>
            <div className="mb-5">
              <label className="block text-slate-400 text-xs mb-2 tracking-wider">Email</label>
              <input
                name="email" type="email" value={form.email} onChange={handleChange} required
                placeholder="your@email.com"
                className={inputClass}
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(0,255,136,0.4)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              />
            </div>
            <div className="mb-7">
              <label className="block text-slate-400 text-xs mb-2 tracking-wider">Project Brief</label>
              <textarea
                name="brief" value={form.brief} onChange={handleChange} required rows={5}
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-y`}
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(0,255,136,0.4)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={!sent ? { background: '#00e07a', y: -2 } : {}}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-[14px] rounded font-bold text-[0.9rem] tracking-wider font-heading text-dark border-none cursor-pointer inline-block"
              style={{ background: sent ? '#00cc6a' : '#00ff88' }}
            >
              {sent ? 'Sent!' : 'Send Brief'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
