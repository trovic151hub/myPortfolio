import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Header.css";

const NAV_LINKS = [
  { name: "About",    id: "about" },
  { name: "Skills",   id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact",  id: "contact" },
];

function smoothTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpenRef.current) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeAndGo = (id) => {
    setMenuOpen(false);
    setTimeout(() => smoothTo(id), 50);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={[
        "navbar",
        scrolled  ? "navbar-scrolled" : "",
        menuOpen  ? "navbar-open"     : "",
      ].filter(Boolean).join(" ")}
    >
      <div className="navbar-inner">
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => { e.preventDefault(); closeAndGo("home"); }}
        >
          Dev<span className="logo-dot">.</span>
        </a>

        <nav className="navbar-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav-link"
              onClick={(e) => { e.preventDefault(); smoothTo(link.id); }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => { e.preventDefault(); smoothTo("contact"); }}
          >
            Start a conversation
          </a>
        </nav>

        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className="mobile-nav-link"
                onClick={(e) => { e.preventDefault(); closeAndGo(link.id); }}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.18 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="nav-cta mobile-cta"
              onClick={(e) => { e.preventDefault(); closeAndGo("contact"); }}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.18 }}
            >
              Start a conversation
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
