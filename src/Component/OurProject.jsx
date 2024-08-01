import React, { useState } from 'react';
import './Maincomponent.css';
import gif_for_project from './gif_for_project.gif';
import project_card2 from './project_card2.svg';
import { HashLink as Link } from 'react-router-hash-link';
import P1_gif from './P1_gif.gif';
import sparkle from './sparkle.png'
import './AllMobileview.css';

const StackingCards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardCount = 3; // Number of cards

  const handleScroll = (direction) => {
    setScrollPosition(prevPosition => {
      const newPosition = direction === 'left' ? prevPosition - 1 : prevPosition + 1;
      if (newPosition < 0) {
        return cardCount - 1; // Loop back to the last card
      } else if (newPosition >= cardCount) {
        return 0; // Loop back to the first card
      } else {
        return newPosition;
      }
    }); 
  };

  return (
    <div className="stacking-cards-container">
      <div className="stacking-card" style={{ transform: `translateX(${scrollPosition * -100}%)` }}>
      <div className="card"id="card_id1" style={{ width: '80%' }}>
        <div className="info-section">
      <div className="info-left">
        <h1>I Enhanced ELECTRIFUEL's<br/>
        <span className='project_span'> Brand & Digital Presence.</span> </h1>
        <ul>
          <li><img src={sparkle}/>Logo Design</li>
          <li><img src={sparkle}/>Website  Designing </li>
          <li><img src={sparkle}/>Digital branding</li>
        </ul>
        <Link smooth to="/Project1_Page"> <button className="info-button">Know More</button></Link>
      </div>
      <div className="info-right">
        <img src={P1_gif}  alt="GIF" />
      </div>
    </div>
        </div>
        <div className="card" id="card_id2"style={{ width: '80%' }}>
        <div className="info-section">
      <div className="info-left">
        <h1>Crafting <span className='project_span'>Website &  App UI for</span><br/>
         Service-Based Companie <span className='project_span'>8Seva</span></h1>
        <ul id="info_button_id"> 
        <li><img src={sparkle}/>Logo Design</li>
          <li><img src={sparkle}/>Website  Designing </li>
          <li><img src={sparkle}/>App Design</li>
        </ul>
        <div>
        <Link smooth to="/Project2_Page"> <button className="info-button" >Know More</button></Link></div>
      </div>
      <div className="info-right" id="info_right_2ndcard">
        <img src={project_card2}  alt="GIF" />
      </div>
    </div>
        </div>
        <div className="card"id="card_id3" style={{ width: '80%' }}>
        <div className="info-section">
      <div className="info-left">
        <h1>I enhanced ELECTRIFUEL's<br/>
        <span className='project_span'>Brand & Digital Presence.</span> </h1>
        <ul>
          <li>Logo Design</li>
          <li>Website  Designing </li>
          <li>Digital branding</li>
        </ul>
        <Link smooth to="/Project2_Page"> <button className="info-button">Know More</button></Link>
      </div>
      <div className="info-right">
        <img src={gif_for_project}  alt="GIF" />
      </div>
    </div>
        </div>
      </div>
      <button onClick={() => handleScroll('left')}>&lt;</button>
      <button onClick={() => handleScroll('right')}>&gt;</button>
    </div>
  );
};

export default StackingCards;
