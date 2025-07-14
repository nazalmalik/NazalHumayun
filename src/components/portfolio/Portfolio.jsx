import React from 'react';
import './Portfolio.css';

// Import images from assets folder
import skinSerumImg from '../../assets/Skin.JPG';
import Furniture from '../../assets/de2.JPG';
import CakeUI from '../../assets/cake.JPG';
import Pophub from '../../assets/Pophub.JPG';
import Parkify from '../../assets/parkify.JPG'
import InfiniousAuto from '../../assets/infinious.JPG'
import scentsation from '../../assets/scentsation.JPG'

const webProjects = [
   {
    title: 'Parkify',
    img: Parkify,
    link: 'https://parkify-frontend-rouge.vercel.app/',
    techstack: 'React, Node.js, MongoDB',
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
  }
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
  }
  
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-heading">My Portfolio</h2>

      {/* Web Development Projects */}
      <div className="portfolio-category">
        <h3 className="portfolio-subheading">Web Development</h3>
        <div className="portfolio-grid">
          {webProjects.map((proj, index) => (
            <div className="portfolio-card" key={index}>
              <div className="portfolio-img-wrapper">
                <img src={proj.img} alt={proj.title} className="portfolio-img" />
              </div>
              <div className="portfolio-content">
                <h4>{proj.title}</h4>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                  View Project
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UI/UX Design Projects */}
      <div className="portfolio-category">
        <h3 className="portfolio-subheading">UI/UX Design</h3>
        <div className="portfolio-grid">
          {uiuxProjects.map((proj, index) => (
            <div className="portfolio-card" key={index}>
              <div className="portfolio-img-wrapper">
                <img src={proj.img} alt={proj.title} className="portfolio-img" />
              </div>
              <div className="portfolio-content">
                <h4>{proj.title}</h4>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                  View Design
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
