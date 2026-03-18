import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Expertise", href: "#expertise", id: "expertise" },
  { label: "Works", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Header() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.id);
      let current = "hero";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) current = section;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(8,12,20,0.97)" : "rgba(8,12,20,0.7)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(0,255,136,0.1)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#hero" style={{ textDecoration: "none" }}>
          <motion.span
            whileHover={{ opacity: 0.85 }}
            style={{
              color: "#00ff88",
              fontWeight: 900,
              fontSize: "1.4rem",
              letterSpacing: "-0.5px",
              fontFamily: "'Syne', sans-serif",
              display: "inline-block",
            }}
          >
            VA<span style={{ color: "#ffffff" }}>_</span>
          </motion.span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              whileHover={{ color: "#00ff88" }}
              style={{
                color: active === link.id ? "#00ff88" : "#94a3b8",
                fontWeight: active === link.id ? 600 : 400,
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                textDecoration: "none",
                transition: "color 0.2s",
                position: "relative",
              }}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "#00ff88",
                  }}
                />
              )}
            </motion.a>
          ))}
          <motion.a
            href="mailto:victoradeyimika0@Gmail.com"
            whileHover={{ background: "rgba(0,255,136,0.1)", y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "transparent",
              border: "1px solid #00ff88",
              color: "#00ff88",
              padding: "7px 20px",
              borderRadius: "4px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.03em",
              display: "inline-block",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Hire Me
          </motion.a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "8px",
          }}
          className="mobile-menu-btn"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "#00ff88",
                borderRadius: "2px",
                transition: "all 0.3s",
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translateY(7px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translateY(-7px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: "rgba(8,12,20,0.99)",
              borderTop: "1px solid rgba(0,255,136,0.1)",
              padding: "0 24px 16px",
              overflow: "hidden",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  display: "block",
                  color: active === link.id ? "#00ff88" : "#94a3b8",
                  padding: "12px 0",
                  fontSize: "0.95rem",
                  fontWeight: active === link.id ? 600 : 400,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}

export default Header;
