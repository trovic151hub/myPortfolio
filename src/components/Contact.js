import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>If you’d like to work together or just say hi, feel free to reach out!</p>

      <div className="contact-links">
        <a href="mailto:victoradeyimika0@Gmail.com" className="contact-btn">Email Me</a>
        <a href="https://github.com/trovic151hub" target="_blank" rel="noopener noreferrer" className="contact-btn">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;