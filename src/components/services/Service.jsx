import React from 'react';
import './Service.css';
import { FaLaptopCode, FaPencilRuler, FaBug } from 'react-icons/fa';

const Service = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-heading">My Services</h2>

      <div className="services-container">
        {/* Web Development */}
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Web Development</h3>
          <p>I build fast, responsive websites and web apps using modern JavaScript frameworks like React.js, Node.js, and MongoDB.</p>
        </div>

        {/* UI/UX Design */}
        <div className="service-card">
          <FaPencilRuler className="service-icon" />
          <h3>UI/UX Design</h3>
          <p>I design seamless and modern interfaces using Figma, focused on enhancing user experience through simplicity and usability.</p>
        </div>

        {/* Software Quality Assurance */}
        <div className="service-card">
          <FaBug className="service-icon" />
          <h3>Software Quality Assurance</h3>
          <p>I perform manual testing, create detailed test cases, and ensure product quality through functional and usability testing.</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
