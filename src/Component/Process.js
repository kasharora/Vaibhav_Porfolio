import React from 'react';
import './All.css';
import bgimage from './Backline.svg';
import firstimage from './1img.svg';
import secondimage from './2img.svg';
import thirdimage from './3Img.svg';
import fourthimage from './4img.svg';
import fifthimage from './5img.svg';
import Navbar from './Navbar';

const Process = () => {
  return (
    <div className="process-page">
      <div className="pre-headingg-process">Behind The Scene</div>
      <h1 className="process-title">The <span className='p-subtitle'>Process</span></h1>
      {/* <h2 className="process-subtitle">Behind The Scene</h2> */}
      <div className='process_main_part'>
      <div className='process-image-title'>
        <div className='process-image-title-text'>The Great Idea</div>
        <div className='process-image-title-text'><p>Design</p><p className='process-image-title-text-2'> Weaving Digital Spells To<br/> Make Your Visions Reality</p></div>
        <div className='process-image-title-text'>& Cheers</div>
      </div>
      <div className="process-main-image-container">
        <div className="process-top-images">
          <img src={firstimage}  alt="Top Image 1" className="process-top-image" />
          <img src ={thirdimage}  alt="Top  Image 2" className="process-top-image" />
          <img src={fifthimage} alt="Top Image 3" className="process-top-image" />
        </div>
        <img src={bgimage} alt="Main Image" className="process-main-image" /> 
        <div className="process-bottom-images">
          <img src={secondimage}  alt="Bottom Image 1" className="process-bottom-image" />
          <img src ={fourthimage}  alt="Bottom Image 2" className="process-bottom-image" />
        </div>
        <div className='process-image-bottom-title'>
        <div className='process-image-bottom-title-text'><p>Research</p><p className='process-image-bottom-title-text-2'> Research And Analyze The<br/> Project Requirements And <br/>Objectives</p></div>
        <div className='process-image-bottom-title-text'><p>Feedback</p><p className='process-image-bottom-title-text-2'> Testing, Tweaking,And Laughing <br/>All The Day</p></div>
      </div>
      </div>
 
      </div>
      {/* <div className='Bottom_navbar' id="Navbar_Process"><Navbar/></div> */}
    </div>
  );
};

export default Process;
