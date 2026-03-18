import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#080c14",
        borderTop: "1px solid rgba(0,255,136,0.08)",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#334155", fontSize: "0.875rem", margin: 0 }}>
        Made with <span style={{ color: "#00ff88" }}>Replit</span>
      </p>
    </footer>
  );
}

export default Footer;
