import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Victor Adeyimika. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/trovic151hub" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:victoradeyimika0@Gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;