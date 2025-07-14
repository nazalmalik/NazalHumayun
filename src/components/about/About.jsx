import React from "react";
import './About.css';
import { FaGraduationCap, FaCertificate, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about__heading">About</h2>

      <div className="container about__container">
        {/* <div className="about__image-wrapper">
          <img src={me} alt="Nazal Humayun" className="about__image" />
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>BS Software Engineering (2021–2025)</small>
            </article>

            <article className="about__card">
              <FaCertificate className="about__icon" />
              <h5>Certifications</h5>
              <small>5+ Courses Completed</small>
            </article>

            <article className="about__card">
              <FaCode className="about__icon" />
              <h5>Internships</h5>
              <small>Frontend & Web Dev Roles</small>
            </article>
          </div>

          <p className="about__text">
            A web developer enjoy building simple, responsive websites that work well across
            devices.I love building new things, and improving user experiences through thoughtful
            code and modern design practices. I like learning through hands-on projects and 
            enjoy spending my free time reading, baking, and traveling.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
