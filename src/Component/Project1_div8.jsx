import React from 'react';
import './All.css';
import Webui from './Webui.svg';

const Project1_div8 = () => {
  return (
    <div className="Project1_div8-container">
      <div className="Project1_div8-left">
        <h1 className="Project1_div8-title">Website UI</h1>
        <p className="Project1_div8-text">Landing page</p>
        <img src={Webui} alt="Description" className="Project1_div8-image" />
      </div>
      <div className="Project1_div8-right">
        <p className="Project1_div8-text">All the services are displayed at the top of the homepage so user don't need to search</p>
        <p className="Project1_div8-text">All the services are displayed at the top of the homepage so user don't need to search</p>
      </div>
    </div>
  );
};

export default Project1_div8;
