import React from 'react';
import './Contact.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contactus">
        <h2>Contact Me</h2>
        <p>Feel free to reach out through any of the platforms below.</p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/nazal-malik-a7a95a23b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/nazal-malik
          </a>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h4>Email</h4>
          <a href="mailto:mnazal250@gmail.com">mnazal250@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
