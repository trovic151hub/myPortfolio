import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/trovic151hub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
  { label: "LinkedIn", href: "#", icon: "https://cdn.simpleicons.org/linkedin/0A66C2" },
  { label: "Twitter", href: "#", icon: "https://cdn.simpleicons.org/x/FFFFFF" },
];

function Footer() {
  return (
    <footer
      style={{
        background: "#080c14",
        borderTop: "1px solid rgba(0,255,136,0.08)",
        padding: "48px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <a href="#hero" style={{ textDecoration: "none" }}>
          <span
            style={{
              color: "#00ff88",
              fontWeight: 900,
              fontSize: "1.4rem",
              letterSpacing: "-0.5px",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            VA<span style={{ color: "#ffffff" }}>_</span>
          </span>
        </a>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, opacity: 0.8 }}
              style={{ display: "inline-block" }}
            >
              <img src={link.icon} alt={link.label} style={{ width: "20px", height: "20px", objectFit: "contain", filter: "opacity(0.6)" }} />
            </motion.a>
          ))}
        </div>

        <p style={{ color: "#334155", fontSize: "0.8rem", margin: 0, textAlign: "center" }}>
          © {new Date().getFullYear()} Victor Adeyimika. Built with{" "}
          <span style={{ color: "#00ff88" }}>Replit</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
