import React from 'react';
import './All.css'; // Make sure to include your CSS file
import Group463 from './Group463.svg';
import project1_logo1 from './project1_logo1.svg';
import project1_logo2 from './project1_logo2.svg';


const Project1_2nddiv = () => {
  return (
    <div className="project1-main-div">
        <h2 className="project1-row-div-title">About the Company</h2>
        <p className="project1-row-div-content">Our client operates a service platform similar to Urban Company, offering essential services to students and people living away from home.
         These services include water bottle supply, at-home haircuts, and cleaning.</p>
        <p className="project1-row-div-additional-text"><b>Challenge:</b> Design an intuitive and user-friendly UI that caters to the unique needs of our target audience. The UI should seamlessly 
        connect users with the services they require, ensuring convenience, reliability, and accessibility.</p>
      <div className="project1-first-div">
        <h1 className="project1-title-first-div">Branding</h1>
        <p className="project1-text-first-div">Logo  Design</p>
        <img src={Group463} alt="Description" className="project1-main-image" />
        <div className="project1-row-divs">
          <div className="project1-row-div1">
            <img src={project1_logo1}  className="project1-row-div-image" />
            <p className="project1-row-div-text">This logo is used for regular users and serves as our primary logo.</p>

          </div>
          <div className="project1-row-div2">
            <img src={project1_logo2}  className="project1-row-div-image" />
            <p className="project1-row-div-text">This logo is  used for our service personnel, who have a separate platform for tracking and statistics.    .</p>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Project1_2nddiv;
