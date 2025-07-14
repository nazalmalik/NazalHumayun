import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Socials = () => {
  const links = [
    { href: 'https://www.instagram.com/nazal_malik/', icon: <FaInstagram />, label: 'Instagram' },
    { href: 'https://www.facebook.com/nazal.malik.56/', icon: <FaFacebook />, label: 'Facebook' },
    { href: 'https://www.linkedin.com/in/nazal-malik-a7a95a23b/', icon: <FaLinkedin />, label: 'LinkedIn' },
    { href: 'https://github.com/nazalmalik', icon: <FaGithub />, label: 'GitHub' },
    { href: 'mailto:mnazal250@gmail.com', icon: <FaEnvelope />, label: 'Email' },
  ];

  return (
    <div className="socialicons">
      {links.map(({ href, icon, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
