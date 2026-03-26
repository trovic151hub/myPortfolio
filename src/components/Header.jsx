import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Expertise', href: '#expertise', id: 'expertise' },
  { label: 'Works', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

function Header() {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = 'hero';
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,12,20,0.97)' : 'rgba(8,12,20,0.7)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(0,255,136,0.1)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero">
          <motion.span
            whileHover={{ opacity: 0.85 }}
            className="text-brand font-black text-[1.4rem] tracking-tight font-heading inline-block"
          >
            VA<span className="text-white">_</span>
          </motion.span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              whileHover={{ color: '#00ff88' }}
              className="relative text-sm tracking-wider no-underline transition-colors duration-200"
              style={{ color: active === link.id ? '#00ff88' : '#94a3b8', fontWeight: active === link.id ? 600 : 400 }}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-brand"
                />
              )}
            </motion.a>
          ))}
          <motion.a
            href="mailto:victoradeyimika0@Gmail.com"
            whileHover={{ y: -2, background: 'rgba(0,255,136,0.1)' }}
            whileTap={{ scale: 0.97 }}
            className="text-brand border border-brand px-5 py-[7px] rounded text-sm font-semibold tracking-wide font-heading inline-block"
          >
            Hire Me
          </motion.a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-[22px] h-[2px] bg-brand rounded-sm transition-all duration-300"
              style={{
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform:
                  menuOpen && i === 0 ? 'rotate(45deg) translateY(7px)'
                  : menuOpen && i === 2 ? 'rotate(-45deg) translateY(-7px)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
            style={{ background: 'rgba(8,12,20,0.99)', borderTop: '1px solid rgba(0,255,136,0.1)' }}
          >
            <div className="px-6 pb-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="block py-3 text-[0.95rem] no-underline transition-colors duration-200"
                  style={{
                    color: active === link.id ? '#00ff88' : '#94a3b8',
                    fontWeight: active === link.id ? 600 : 400,
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
