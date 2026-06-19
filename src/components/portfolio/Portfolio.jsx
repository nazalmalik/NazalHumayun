import React from 'react';
import './Portfolio.css';

// Import images from assets folder
import skinSerumImg from '../../assets/Skin.JPG';
import Furniture from '../../assets/de2.JPG';
import CakeUI from '../../assets/cake.JPG';
import Pophub from '../../assets/Pophub.JPG';
import Parkify from '../../assets/parkify.JPG';
import InfiniousAuto from '../../assets/infinious.JPG';
import scentsation from '../../assets/scentsation.JPG';
import sqa1 from '../../assets/sqa1.JPG';
import sqa2 from '../../assets/sqa2.JPG';
import tgtrek from '../../assets/tgtrek.JPG';
import odpm from "../../assets/odpm.JPG";

const webProjects = [
  {
    title: 'Octopus Design and Project Management',
    img: odpm,
    link: 'https://octopusdesignandprojectmanagement.com/',
  },
  {
    title: 'TG Trek and Tour',
    img: tgtrek,
    link: 'https://tgtrekandtours.com/',
  },
  {
    title: 'Parkify',
    img: Parkify,
    link: 'https://parkify-frontend-rouge.vercel.app/',
    techstack: 'React · Node.js · MongoDB',
  },
  {
    title: 'ScentSation',
    img: scentsation,
    link: 'https://drive.google.com/drive/folders/11rVnsH_MolTS1_5SdMUh6zldlqNuDPPJ?usp=drive_link',
  },
  {
    title: 'Infinious Automation',
    img: InfiniousAuto,
    link: 'https://infinious.pk/',
  },
  {
    title: 'PopHub',
    img: Pophub,
    link: 'https://tourmaline-banoffee-1204f1.netlify.app/',
  },
];

const uiuxProjects = [
  {
    title: 'Skin Serum Landing Page',
    img: skinSerumImg,
    link: 'https://www.figma.com/proto/xIucDBFPWprHBiCE8YvHBi/Product-Website?node-id=1-2&p=f&t=75ttyMcgLWDITK4l-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
  },
  {
    title: 'UI Design of Quality Furniture',
    img: Furniture,
    link: 'https://www.figma.com/proto/WwGldVXm8TwP4nEe8sngmF/Home-Furniture-UI?t=Qe3DW6M9gJyIF2kF-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2',
  },
  {
    title: 'Pie and Cake UI Animation',
    img: CakeUI,
    link: 'https://www.figma.com/proto/M18P7AE3FPuC4coPpJWIjG/cake-deisgn?node-id=7-30&t=UD3TW3FJQ9NbUQMI-1',
  },
];

const sqaProjects = [
  {
    title: 'Parkify – Smart Parking App',
    description: 'Test cases for booking, payments, and navigation modules.',
    img: sqa1,
    link: 'https://docs.google.com/spreadsheets/d/1nnmvpDMn-sLqAYLxEiDVzkriXhAM7HeBVEftTlKCzko/edit?usp=sharing',
  },
  {
    title: 'E-Commerce Website',
    description: 'Test cases for checkout flow, cart, and payment validation.',
    img: sqa2,
    link: 'https://docs.google.com/spreadsheets/d/1XxQPKkyP5rSUsfMxUxsulrurohtBa9EtP-Fc21qbDQY/edit?usp=sharing',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">

      {/* Header */}
      <div className="portfolio-header">
        <p className="portfolio-eyebrow">Creative Work</p>
        <h2 className="portfolio-heading">My Portfolio</h2>
        <p className="portfolio-subtext">
          A collection of web projects, UI designs, and quality assurance work.
        </p>
      </div>

      {/* Web Development */}
      <div className="portfolio-category">
        <div className="category-label-row">
          <span className="category-tag">01 — Web Dev</span>
          <span className="category-line"></span>
        </div>
        <h3 className="portfolio-subheading">Web Development</h3>
        <div className="portfolio-grid grid-3">
          {webProjects.map((proj, index) => (
            <div className="portfolio-card" key={index}>
              <span className="card-num">0{index + 1}</span>
              <div className="portfolio-img-wrapper">
                <img src={proj.img} alt={proj.title} className="portfolio-img" />
              </div>
              <div className="portfolio-content">
                <h4>{proj.title}</h4>
                {proj.techstack && <p className="card-tech">{proj.techstack}</p>}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-btn"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-divider"></div>

      {/* UI/UX Design */}
      <div className="portfolio-category">
        <div className="category-label-row">
          <span className="category-tag">02 — UI/UX</span>
          <span className="category-line"></span>
        </div>
        <h3 className="portfolio-subheading">UI Design</h3>
        <div className="portfolio-grid grid-3">
          {uiuxProjects.map((proj, index) => (
            <div className="portfolio-card" key={index}>
              <span className="card-num">0{index + 1}</span>
              <div className="portfolio-img-wrapper">
                <img src={proj.img} alt={proj.title} className="portfolio-img" />
              </div>
              <div className="portfolio-content">
                <h4>{proj.title}</h4>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-btn"
                >
                  View Design ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-divider"></div>

      {/* Software QA */}
      <div className="portfolio-category">
        <div className="category-label-row">
          <span className="category-tag">03 — QA</span>
          <span className="category-line"></span>
        </div>
        <h3 className="portfolio-subheading">Test Cases</h3>
        <div className="sqa-list">
          {sqaProjects.map((proj, index) => (
            <div className="sqa-card" key={index}>
              <div className="sqa-img-wrapper">
                <img src={proj.img} alt={proj.title} className="sqa-img" />
              </div>
              <div className="sqa-body">
                <span className="sqa-badge">Software QA</span>
                <h4>{proj.title}</h4>
                <p>{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-btn"
                >
                  View Test Cases ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Portfolio;