import React from 'react';
import './All.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import './AllMobileview.css';

const Contactpage = () => {
  return (
    <div style={{ textAlign:'center' }} id="Conatct-main-page">
            <div className="project-left-div">
        
        <div className="c-title">Like my work! <span className='c-subtitle'>& have a project in mind?</span></div>
        <p className="description">Then let's connect and turn your ideas into reality.</p>
        {/* <button className="icon-button" smooth to="/contactpage-container" >Lets Connect →</button> */}
        <Link to="/contactpage-container" className="icon-button">Lets Connect →</Link>
      </div>
 
    {/* <div className='Bottom_navbar'><Navbar/></div> */}
    </div>
  );
}

export default Contactpage;
