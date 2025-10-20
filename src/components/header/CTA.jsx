import React from 'react'
import CV from '../../assets/Nazal Humayun - SQA.pdf'
import "./Header.css";
const CTA = () => {
  return (
    <div className='cta'>
<a href={CV} download className='btn'>Download CV</a>
<a
  href="https://www.linkedin.com/in/nazal-malik-a7a95a23b/" 
  className="btn "
  target="_blank" 
  rel="noopener noreferrer"
>
  Let's Connect
</a>


    </div>
  )
};

export default CTA