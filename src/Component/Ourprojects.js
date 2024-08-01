import React from 'react';
import './All.css';
import './OurProject.css';
import P2 from './p2.png'
import './Maincomponent.css';
import { Link } from 'react-router-dom'
import './AllMobileview.css';
import P1 from './P1.gif'


const Ourprojects = () => {
  return (
    <div id="project-App">
      <div className="gallery-container">
      <h1 className="title">My <span className='subtitle'>Philosophy✨</span></h1>
    </div>
      
      <div className="project-left-div">
        
        <div>
        <h1 className="title-p">What makes me <span className='subtitle-project' id='brush-stroke'>different?</span></h1>
        <p className="description-p">I create unique digital experiences tailored to your brand and goals. By merging creativity with functionality and staying ahead of design trends, I ensure every project not only looks stunning but also performs flawlessly.</p>  
        <Link to="/project-gallery" className="icon-button">Browse my work →</Link>
        
        </div>
      </div>
      <div className="containerrr">
      <div className="boxx">
      
        <div className="image-containerrr">
          <img src={P1} alt="Image 1" />
          <div className="hover-boxx">
            <h3>ELECTRIFUEL</h3>
            <p>Branding</p>
          </div>
        </div>
      </div>
      <div className="boxx">
        <div className="image-containerrr">
          <img src={P2} alt="Image 2" />
          <div className="hover-boxx">
            <h3>8Seva</h3>
            <p> Web/App Design</p>
          </div>
        </div>
      </div>
    </div>
  
      

      </div>
      
    

    
  );
}

export default Ourprojects;
