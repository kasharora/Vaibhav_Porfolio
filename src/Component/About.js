import React from 'react'
import './All.css';
import Navbar from './Navbar.js'
import logoLight from './chakka.svg';
import logoDark from './chakka1.svg';
import arrowLight from './Arrow1.svg';
import arrowDark from './Arrow 2.svg';
import useDarkMode from './useDarkMode.js';


function About() {
  const [theme] = useDarkMode();
  return (
    <div id="About_main_page">
      <div className='AboutPage'>
          <h2> & </h2>
          <h1>TransForm Ideas Into Reality <br/>With Purposeful Branding &<br/> Effective Web Designing</h1>
          <div className='About_logo'>
          <img src={theme === 'light' ? logoLight : logoDark} className="logo_about" alt="Logo" />
          <img src={theme === 'light' ? arrowLight : arrowDark} className="arrow" alt="Logo" />
          </div>
      </div>
    {/* <div className='Bottom_navbar'><Navbar/></div> */}
    </div>
  ) 
}

export default About