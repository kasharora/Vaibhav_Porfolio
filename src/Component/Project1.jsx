import React from 'react'
import Navbar from './Navbar';
import Logo from './Logo.js';
import Logomobileview from './LogomobileView.js';
import './All.css';
import './AllMobileview.css';
import Project1back_logo from './Project1back_logo.svg';
import Project1_2nddiv from './Project1_2nddiv.js';
import Project1_3rddiv from './Project1_3rddiv.js';
import Project1_div4 from './Project1_div4.jsx';
import Project1_div5 from './Project1_div5.jsx';
import Project1_div6 from './Project1_div6.jsx';
import Project1_div7 from './Project1_div7.jsx';
import Project1_div8 from './Project1_div8.jsx';

function Project1() {
  return (

    <div id ="Project1_Page"><div>   
    <div className='Maindivlogo'><Logo/></div>
    <div className='Mobileviewlogo'><Logomobileview/></div></div>
    <div className='Project1First_page'><img src={Project1back_logo}/></div>
    <div className="project1-container-first-div">
      <div className="project1-left">
        <h1 className="project1-left-title">Client</h1>
        <p className="project1-left-text">8SEVA</p>
        <div className="project1-button-row"> 
          <button className="project1-button-1">Logo Design</button>
          <button className="project1-button-2">Website Designing</button>
          <button className="project1-button-3">App Design</button>
        </div>
      </div>
      <div className="project1-right">
        <h2 className="project1-right-title">Opportunity</h2>
        <p className="project1-right-text">design and develop intuitive and user-friendly website and app interfaces for a service-based company, enhancing user experience and engagement.</p>
        <button className="project1-right-button">Visit Website</button>
      </div>
    </div>
    <Project1_2nddiv/>
    <Project1_3rddiv/>
    <Project1_div4/>
    <Project1_div5/>
    <Project1_div6/>
    <Project1_div8/>
    <Project1_div7/>
    
    <div className='Bottom_navbar'><Navbar/></div></div>
  )
}

export default Project1