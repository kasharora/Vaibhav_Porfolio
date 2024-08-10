import React from 'react';
import './All.css'; // Assuming you have an App.css file for your styles
import sec3_1st from './sec3_1st.svg';
import sec3_2nd from './sec3_2nd.svg';
import sec3_3rd from './sec3_3rd.svg';
import sec3_4th from './sec3_4th.svg';

const Project1_div5 = () => {
  return (
    <div className="project1_5th_container">
      <div className="project1_5th_header">
        <h1 className="project1_5th_title">03</h1>
        <p className="project1_5th_subtitle">Booking Flow <br/><span className='Project1_5th_subtitle1'>Start With Selecting The Service User Want And Add It  To The  Cart </span></p>
      </div>
      <div className="project1_5th_imageContainer">
        <div className="project1_5th_imageWrapper">
          <div className="project1_5th_imageTextTop">all services are displayed at the top of the homepage,so users don't need to search</div>
          <img className="project1_5th_image" src={sec3_1st} alt="Image 1" />
          <p className="project1_5th_imageTextBottom">Home Page</p>
        </div>
        <div className="project1_5th_arrowWrapper">
          <p className="project1_5th_arrowTextTop">Select Service At User Need</p>
          <div className="project1_5th_arrow">→</div>
        
        </div>
        <div className="project1_5th_imageWrapper">
          <div className="project1_5th_imageTextTop">Now we give the option to the user to compare prices and services in the category </div>
          <img className="project1_5th_image" src={sec3_2nd} alt="Image 2" />
          <p className="project1_5th_imageTextBottom">Category Page</p>
        </div>
        <div className="project1_5th_arrow">→</div>
        <div className="project1_5th_imageWrapper">
          <img className="project1_5th_image" src={sec3_3rd} alt="Image 3" />
          <p className="project1_5th_imageTextBottom">Service Details</p>
        </div>
        <div className="project1_5th_arrow">→</div>
        <div className="project1_5th_imageWrapper">
          <img className="project1_5th_image" src={sec3_4th } alt="Image 4" />
          <p className="project1_5th_imageTextBottom">Service Details</p>
        </div>
      </div>
    </div>
  );
};

export default Project1_div5;
