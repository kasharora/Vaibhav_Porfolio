import React from 'react';
import './All.css'; // Make sure to create and import the CSS file
import Navbar from './Navbar';
import './OurServices.css';
import gif1 from './logo-design.gif';
import gif2 from './social-media.gif';
import gif3 from './startup.gif';
import gif4 from './subscribe.gif';
import img1 from './Item1.svg'
import img2 from './Item2.svg'
import img3 from './Item3.svg'
import img4 from './Item4.svg'
import img5 from './Item5.svg'
import img6 from './Item6.svg'
import img7 from './Item7.svg'
import img8 from './Item8.svg'
import img9 from './Item1.svg'
import img10 from './Item1.svg'



const Ourservices = () => {
  const imagesRow1 = [
    img1,
    img2,
    img3,
    img4,
    img5,
   
  ];
  
  const imagesRow2 = [
    img10,
    img9,
    img8,
    img7,
    img6,
    
  ];
  return (
    
    <div id="service" > 
      
      
      <div className="containerr">
      <div className="pre-headingg">Services</div>
      <div className="main-headingg">All your<span className="subtitlee" >design</span> needs.</div>
      <p className="sub-headingg">Running a successful business means more than just a website. That's why i cover all your design needs, so you don't have to go anywhere else.</p>
      <div className="testimonial-container">
      
      <div className="image-scroller-container">
        <div className="scroller-row scroller-row-1">
          {imagesRow1.concat(imagesRow1).map((image, index) => (
            <img key={index} src={image} alt={`image-row1-${index}`} className="scroller-image" />
          ))}
        </div>
        <div className="scroller-row scroller-row-2">
          {imagesRow2.concat(imagesRow2).map((image, index) => (
            <img key={index} src={image} alt={`image-row2-${index}`} className="scroller-image" />
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
        

        
        
      
      
    
  );
}

export default Ourservices;

