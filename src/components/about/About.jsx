import React, { useState } from "react";
import "./About.css";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

import agileCert from "../../assets/Introduction to Agile Development and Scrum.JPG";
import webcert from "../../assets/Web Development.jpeg";
import designcert from "../../assets/Fudamentals of Graphic Design.JPG";
import runerup from "../../assets/Runerup In SUPARCO video competition.jpeg";
import excelcert from "../../assets/Excel Skills for Business.JPG";

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleCardClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section id="about" className="about">
      <h2 className="about__heading">About</h2>

      <div className="container about__container">
        <div className="about__content">
          <p className="about__text">
            Software Engineering graduate with a strong academic background and hands-on project experience...
          </p>

          {/* Cards */}
          <div className="about__cards">
            <article
              className={`about__card ${activeSection === "education" ? "active" : ""}`}
              onClick={() => handleCardClick("education")}
            >
              <FaGraduationCap className="about__icon" />
              <h4>Education</h4>
            </article>

            <article
              className={`about__card ${activeSection === "certifications" ? "active" : ""}`}
              onClick={() => handleCardClick("certifications")}
            >
              <FaCertificate className="about__icon" />
              <h4>Certifications</h4>
            </article>
          </div>

          {/* Education Section */}
          {activeSection === "education" && (
            <div className="about__details">
              <p>
                <strong>BS Software Engineering (2021–2025)</strong><br />
                <strong>Lahore College for Women University</strong><br />
                <strong>Relevant Coursework:</strong> OOP, DSA, Software Testing, Software Project Management,
                Requirement Engineering, Reengineering, SDLC<br />
                <strong>Key Projects:</strong> Smart Parking Web App (PARKIFY), Scentsation
              </p>

              <p>
                <strong>I.C.S (2019–2021)</strong><br />
                <strong>Aspire Group of Colleges, Lahore</strong>
              </p>
            </div>
          )}

          {/* Certifications Section */}
          {activeSection === "certifications" && (
            <div className="about__details">
              <div className="certifications__gallery">
                {[
                  { src: agileCert, issuer: "IBM · Coursera", title: "Introduction to Agile Development and Scrum" },
                  { src: webcert, issuer: "NAVTTC", title: "Web Development" },
                  { src: designcert, issuer: "CalArts · Coursera", title: "Fundamentals of Graphic Design" },
                  { src: runerup, issuer: "SUPARCO", title: "Runner-up, SDG Video Contest" },
                  { src: excelcert, issuer: "Macquarie · Coursera", title: "Excel Skills for Business" },
                ].map((cert, index) => (
                  <a
                    key={index}
                    className="certificate__item"
                    href={cert.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="cert-frame">
                      <img src={cert.src} alt={cert.title} />
                      <span className="cert-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 14.27l-4.8 2.49.92-5.34-3.88-3.78 5.36-.78L12 2z" />
                        </svg>
                      </span>
                      <span className="cert-hint">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <path d="M15 3h6v6" />
                          <path d="M10 14L21 3" />
                        </svg>
                        Open certificate
                      </span>
                    </div>

                    <div className="cert-info">
                      <p className="cert-issuer">{cert.issuer}</p>
                      <p className="cert-title">{cert.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;