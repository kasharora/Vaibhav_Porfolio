import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import img1 from './1_Work_gallery.svg';
import img2 from './2_Work_gallery.svg';
import img3 from './3_Work_gallery.svg';
import img4 from './4_Work_gallery.svg';
import img5 from './5_Work_gallery (1).svg';
import img6 from './5_Work_gallery (10).svg';
import img7 from './5_Work_gallery (11).svg';
import img8 from './5_Work_gallery (7).svg';
import img9 from './5_Work_gallery (8).svg';
import img10 from './5_Work_gallery (9).svg';
import L1 from './L1.svg';
import L2 from './L2.svg';
import L3 from './L3.svg';

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
const Workgallery = () => {
  return (
    <div id="Work_gallery">
    <div className="gallery-container">
      <h1 className="title"  >Work <span className='subtitle'>Gallery</span></h1>
    </div>
    
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
  );
}

export default Workgallery;
