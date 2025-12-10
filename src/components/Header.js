import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"];
      let current = "hero";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          if (window.scrollY >= top) current = section;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="logo">Victor Adeyimika</div>
      <div className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#hero" className={active === "hero" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" className={active === "about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" className={active === "projects" ? "active" : ""} onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#skills" className={active === "skills" ? "active" : ""} onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#contact" className={active === "contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;