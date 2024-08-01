import React from 'react';
import './All.css'; 
import { useContext } from 'react'; 
import logo from './logo.svg';
import lightModeImage from './logoo.svg'; // replace with your light mode image path
import darkModeImage from './logo.svg'; // replace with your dark mode image path
import { ThemeContext } from './ThemeContext';

import { FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';


const Footer = () => {
 
    const { theme } = useContext(ThemeContext);
    const imageSrc = theme === 'light' ? lightModeImage : darkModeImage;

  return (
    <div className="footer-container">
      
      
        <img src={imageSrc} alt="Logo" className="footer-logo" />
        {/* <div>
          <p className="footer-main-text">Vaibhav Parihar</p>
          <p className="footer-sub-text">Designs</p>
        </div> */}
      
      
      
        <p className="footer-follow">Follow us on</p>
        <div className="icons-footer">
          <FaInstagram className="icon-f" />
          <FaWhatsapp className="icon-f" />
            <FaLinkedin className="icon-f" />
            {/* <button className="icon-button">Get In Touch</button> */}
          </div>
        <div className="footer-center">
        {/* <p className="footer-contact">Contact</p> */}
        <p className="footer-email">Copyright © 2024 vaibhav. Crafted with ❤️ and copious amounts of cafeen!</p>
        
      </div>
      
    </div>
  );
}

export default Footer;
