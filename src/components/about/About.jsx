import React, { useState } from "react";
import "./About.css";
import { FaGraduationCap, FaCertificate, FaCode } from "react-icons/fa";
import agileCert from "../../assets/Introduction to Agile Development and Scrum.JPG";
import webcert from "../../assets/Web Development.jpeg";
import designcert from "../../assets/Fudamentals of Graphic Design.JPG";
import runerup from "../../assets/Runerup In SUPARCO video competition.jpeg";
import excelcert from "../../assets/Excel Skills for Business.JPG";
const About = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // For modal view

  const handleCardClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section id="about" className="about">
      <h2 className="about__heading">About</h2>

      <div className="container about__container">
        <div className="about__content">
          <p className="about__text">
Software Engineering graduate with a strong academic background and hands-on project experience. I
enjoy learning new technologies, solving problems, and working in collaborative environments. Motivated, adaptable,
and eager to begin my professional journey and continuing to grow my skills.
            I’m passionate about learning through hands-on projects and spend my free time reading,
            baking, and traveling.
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
                <strong>Key Projects:</strong> Smart Parking Web App (PARKIFY), Scentsation, Manual Testing of Parkify, Manual Testing of E-commerce Website
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
{ src: agileCert, title: "Introduction to Agile Development and Scrum – Coursera" },
{ src: webcert, title: "Web Development – Navttc" },
{ src: designcert, title: "Fundamentals of Graphic Design – Coursera" },
                 
{ src: runerup, title: "Runnerup in SUPARCO video competition – SUPARCO" },
                 
{ src: excelcert, title: "Excel Skills For Business – Coursera" },
                 

                 
                 
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="certificate__item"
                    onClick={() => setSelectedImage(cert.src)}
                  >
                    <img src={cert.src} alt={cert.title} />
                    <p>{cert.title}</p>
                  </div>
                ))}
              </div>

              {/* Image Modal */}
              {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                  <img src={selectedImage} alt="Full View" className="modal__img" />
                </div>
              )}
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
