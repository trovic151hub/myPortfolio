import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/trovic151hub', icon: 'https://cdn.simpleicons.org/github/FFFFFF' },
  { label: 'LinkedIn', href: '#', icon: 'https://cdn.simpleicons.org/linkedin/0A66C2' },
  { label: 'Twitter', href: '#', icon: 'https://cdn.simpleicons.org/x/FFFFFF' },
];

function Footer() {
  return (
    <footer
      className="bg-dark py-12 px-6"
      style={{ borderTop: '1px solid rgba(0,255,136,0.08)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <a href="#hero" className="no-underline">
          <span className="text-brand font-black text-[1.4rem] tracking-tight font-heading">
            VA<span className="text-white">_</span>
          </span>
        </a>

        <div className="flex gap-5 items-center">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, opacity: 0.8 }}
              className="inline-block"
            >
              <img src={link.icon} alt={link.label} className="w-5 h-5 object-contain opacity-60" />
            </motion.a>
          ))}
        </div>

        <p className="text-slate-700 text-xs text-center">
          © {new Date().getFullYear()} Victor Adeyimika. Built with{' '}
          <span className="text-brand">Replit</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
