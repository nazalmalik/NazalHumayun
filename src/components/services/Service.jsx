import React from 'react';
import './Service.css';
import { FaLaptopCode, FaPencilRuler, FaPenNib } from 'react-icons/fa';

const Service = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-heading">My Services</h2>
      <div className="services-container">
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Web Development</h3>
          <p>I build fast, responsive websites and web apps using modern JavaScript frameworks like React.js, Node.js, and MongoDB.</p>
        </div>
        <div className="service-card">
          <FaPencilRuler className="service-icon" />
          <h3>UI/UX Design</h3>
          <p>I design seamless and modern interfaces using Figma, focused on enhancing user experience through simplicity and usability.</p>
        </div>
        <div className="service-card">
          <FaPenNib className="service-icon" />
          <h3>Technical Writing</h3>
          <p>I create developer guides, blog posts, and documentation that explain complex topics in a clear and engaging way.</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
