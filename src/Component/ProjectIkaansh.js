import React from 'react';
import './ProjectIkaansh.css';
import Navbar from './Navbar';

const IkaanshStartupInfo = () => {
  return (
    <div className="container-i">
      <div className="top-section-i">
        <div className="logo-container-i">
          <img src="/api/placeholder/150/150" alt="Ikaansh logo" className="logo" />
          <h2 className="company-name">IKAANSH</h2>
        </div>
        <div className="opportunity">
          <h3>Opportunity</h3>
          <p>
            Client Ask For Me To Design A Logo For His Startup And Also Create His Brand Identity For It
          </p>
        </div>
      </div>
      
      <div className="bottom-section-i">
        <h2>About The Startup</h2>
        <p>
          It's A Group Where My Client Have Multiple Branches Like Food, Education (Library) Etc. So Its More Like A Group Serves All Kinds Of Solution In Its Field.
        </p>
      </div>

      <Navbar/>
    </div>
    
  );
};

export default IkaanshStartupInfo;