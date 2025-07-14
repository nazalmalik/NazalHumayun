import React, { useState } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPhp,
  SiMicrosoftsqlserver,
  SiAdobephotoshop
} from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div className="skills__container">
            <div className="icon-row">
              <FaHtml5 className="html-icon" />
              <FaCss3Alt className="css-icon" />
              <SiJavascript className="js-icon" />
              <FaReact className="react-icon" />
            </div>
            <div className="icon-row">
              <FaBootstrap className="bootstrap-icon" />
              <SiTailwindcss className="tailwind-icon" />
              <FaNodeJs className="nodejs-icon" />
              <SiPhp className="php-icon" />
            </div>
            <div className="icon-row">
              <SiMysql className="mysql-icon" />
              <SiMongodb className="mongodb-icon" />
              <SiMicrosoftsqlserver className="sql-icon" />
              <FiFigma className="figma-icon" />
              <SiAdobephotoshop className="photoshop-icon" />
            </div>
          </div>
        );
    
      case 'experience':
        return (
          <div className="edu-exp-card">
            <h4>Web Developer</h4>
            <small>Freelance</small>
            <hr />
            <h4>Frontend Development Intern</h4>
            <small>Internee.pk</small>
            <hr />
            <h4>Web Development Intern</h4>
            <small>CodSoft</small>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </h2>
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button
          className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </section>
  );
};

export default Skills;
