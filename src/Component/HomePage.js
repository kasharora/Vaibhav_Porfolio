import React from 'react';
import logo from './MainVplogo.png'; // Make sure you have a logo.png in the src folder
import movingImage from './Vaibhav01.svg'; 

import './All.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomCursor from './Customcursor.js';
import Navbar from './Navbar.js';
import Figma_logo from './Figma_logo.svg';
import Logo from './Logo.js';
import Logomobileview from './LogomobileView.js';
import './AllMobileview.css';
import react1 from './react.png';
import logo1 from './chakka.svg';
import arrow from './arrowNew.svg';
import './Div.css';
import { FaMailBulk, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo_1 from './logo.svg';

function HomePage() {
  return (
    <div id="App">
      <div className='cursor'><CustomCursor/></div>
      
      <div className="container">
        <div className="left-div">
          <div className="header">
            <img src={logo_1} alt="Logo" className="logo" />
            <span className="header-text">Hey, I’m Vaibhav.<br/><span className='header-text1'>UI/UX Designer</span></span>
            <div className="icons">
              <a href="tel:+9261177537" className="icon-link">
                <FaPhone className="icon" />
              </a>
              <a href="https://wa.me/9261177537" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaWhatsapp className="icon" />
              </a>
              <a href="mailto:ranyparihar@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaMailBulk className="icon" />
              </a>

              {/* <button className="icon-button">Get In Touch</button> */}
            </div>
          </div>
          <h1 className="h-title">Obsessed with Crafting <span className='h-subtitle'>Seamless </span> Digital Experiences</h1>
          <p className="description">I create intuitive digital experiences that delight users and drive results for businesses. Let's turn your vision into reality.</p>
        </div>
      
        <div className="image-container"> 
          <div className="main_image-flip-card">
            <div className="main_image-flip-card-inner">
              <div className="main_image-flip-card-front">
                <img src={movingImage} alt="Flippable" className="main_image-flip-card-image" />
              </div>
              <div className="main_image-flip-card-back">
                <div className="main_image-flip-card-data">
                  <div className='About_logo'>
                    <img src={logo1} className="logo_about" alt="Logo" />
                    <img src={arrow} className="arrow" alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="overlay-text">Transform ideas Into Reality With <br/> Purposeful Branding and Effective<br/> Web Designing </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
