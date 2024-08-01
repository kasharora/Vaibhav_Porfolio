import React, { useState } from 'react';
import './AllMobileview.css';
import logo from './MainVplogo.png';

const Logomobileview = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="navbarMobileView-container">
      <div className="navbarMobileView-header">
        <div className="navbarMobileView-left">
          <img src={logo} alt="Logo" className="navbarMobileView-logo" />
          <div className="navbarMobileView-text">
            <div className="navbarMobileView-name">Vaibhav Parihar</div>
            <div className="navbarMobileView-subtext">Designs</div>
          </div>
        </div>
        <div className="navbarMobileView-right">
          <button className="navbarMobileView-hamburger" onClick={toggleNavbar}>
            &#9776;
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="navbarMobileView-navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Logomobileview;
