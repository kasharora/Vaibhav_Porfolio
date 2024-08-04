import React from 'react';
import './Div.css';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import logo_1 from './logo_1.avif';

const Div = () => {
  return (
    <div className="container">
      <div className="left-div">
        <div className="header">
          <div>
            <img src={logo_1} alt="Logo" className="logo" />
          <span className="header-text">Hey, I’m Mika.<br/><span className='header-text1'>Web Designer</span></span></div>
          <div className="icons">
          <div>
          <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            </div>
            <div>
            <button className="icon-button">Get In Touch</button></div>
          </div>

          
        </div>
        <h1 className="title">Obsessed with creating timeless digital experiences with Framer.</h1>
        <p className="description">Hey, I'm Mika, welcome to my world. I love building beautiful, timeless websites & digital experiences with Framer.</p>
      </div>
      <div className="right-div">
        <img src="image.png" alt="Description" className="right-image" />
      </div>
    </div>
  );
};

export default Div;
