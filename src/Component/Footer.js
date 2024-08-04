import React from 'react';
import './All.css'; 
import { useContext } from 'react'; 
import lightModeImage from './logoo.svg';
import darkModeImage from './logo.svg';
import { ThemeContext } from './ThemeContext';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const imageSrc = theme === 'light' ? lightModeImage : darkModeImage;

  // Dummy social media links
  const socialLinks = {
    instagram: "https://www.instagram.com/https://www.instagram.com/ranyparihar?igsh=Nzk1Ym82d2hvZHdi",
    whatsapp: "https://wa.me/9261177537",
    linkedin: "https://www.linkedin.com/in/https://www.linkedin.com/in/vaibhav-parihar-8000582a2/"
  };

  return (
    <div className="footer-container">
      <img src={imageSrc} alt="Logo" className="footer-logo" />
      
      <p className="footer-follow">Follow us on</p>
      <div className="icons-footer">
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon-f" />
        </a>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon-f" />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon-f" />
        </a>
      </div>
      <div className="footer-center">
        <p className="footer-email">Copyright © 2024 vaibhav. Crafted with ❤️ and copious amounts of caffeine!</p>
      </div>
    </div>
  );
}

export default Footer;