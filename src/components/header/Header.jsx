import React from 'react';
import './Header.css';
import CTA from './CTA';
import me from '../../assets/me.png';
import Socials from './Socials';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <section id="home" className="header">
      <div className="container header__container">
        <div className="header__content">
          <h5>Hello, I'm</h5>
          <h1>Nazal Humayun</h1>

          <h4 className="typewriter">
            <Typewriter
              options={{
                strings: ['Software Engineer', 'Frontend Developer'],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
              }}
            />
          </h4>

          <CTA />

          {/* Social icons moved below CTA */}
          <div className="socialicons">
            <Socials />
          </div>
        </div>

        <div className="header__image-glow">
          <div className="header__image">
            <img src={me} alt="Nazal Humayun" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
