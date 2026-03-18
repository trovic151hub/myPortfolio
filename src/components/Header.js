import React, { useState, useEffect } from "react";

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
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s",
        background: scrolled ? "rgba(8,12,20,0.97)" : "rgba(8,12,20,0.7)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(0,255,136,0.1)" : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#hero" style={{ textDecoration: "none" }}>
          <span style={{ color: "#00ff88", fontWeight: 900, fontSize: "1.4rem", letterSpacing: "-0.5px" }}>
            VA<span style={{ color: "#ffffff" }}>_</span>
          </span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              style={{
                color: active === link.id ? "#00ff88" : "#94a3b8",
                fontWeight: active === link.id ? 600 : 400,
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:victoradeyimika0@Gmail.com"
            style={{
              background: "transparent",
              border: "1px solid #00ff88",
              color: "#00ff88",
              padding: "7px 20px",
              borderRadius: "4px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
              letterSpacing: "0.03em",
            }}
          >
            Hire Me
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "8px" }}
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
                  menuOpen && i === 0 ? "rotate(45deg) translateY(7px)"
                  : menuOpen && i === 2 ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: "rgba(8,12,20,0.99)", borderTop: "1px solid rgba(0,255,136,0.1)", padding: "0 24px 16px" }}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
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
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}

export default Header;
