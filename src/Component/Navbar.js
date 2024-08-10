// src/Navbar.js
import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import ToggleSwitch from './ToggleSwitch';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link className="navbar-item-home" smooth to="/#App" >
          <FontAwesomeIcon icon={faHome}/>
        </Link>
        {/* <ToggleSwitch /> */}
        <Link className="navbar-item" smooth to="/#Work_gallery">Work</Link>
        <Link className="navbar-item" smooth to="/#project-App">Project</Link>
        <Link className="navbar-item" smooth to="/#service">service</Link>
        <Link className="navbar-item-contact" smooth to="/contactpage-container">Contact</Link>
        

      </div>
      <div className="navbar2">
      <ToggleSwitch />
      </div>
    </div>
    
  );
};

export default Navbar;
