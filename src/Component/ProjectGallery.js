import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './All.css';
import './ProjectGallery.css';
import Navbar from './Navbar';
import star from './star.svg';
import Footer from './Footer.js';
import PG1 from './PG1.png';
import PG3 from './PG3.png';
import PG2 from './PG2.png';
import Contactpage from './ContactPage';
import p11 from './p11.svg';
import p12 from './p11.svg';
import p13 from './p11.svg';

const Card = ({ title, date, duration, image, buttons, link, popupImage, onImageClick }) => (
  <div className="cardd" onClick={() => onImageClick(popupImage)}>
    <img src={image} alt={title} className="cardd-image" />
    <div className="cardd-content">
    <p>{date}</p>
      <h3>{title}</h3>
      <div className="project1-button-row">
        {buttons.map((button, index) => (
          <button 
            key={index} 
            style={button.style}
          >
            {button.label}
          </button>
        ))}
      </div>
      
      {duration && <p>{duration}</p>}
    </div>
    <button className="play-button">▶</button>
  </div>
);

const ProjectGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "I enhanced ELECTRIFUEL's brand & digital presence.",
      date: "Client : Electrifuel",
      image: PG1,
      popupImage: p11, // Image for the pop-up
      buttons: [
        {
          label: "Logo Design",
          style: {
            backgroundColor: 'rgb(2 110 58)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "Brand Identity",
          style: {
            backgroundColor: 'rgb(2 110 58)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "Web Design",
          style: {
            backgroundColor: 'rgb(2 110 58)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        }
      ],
    },
    {
      title: "Crafting Website & App UI for Service-Based Company 8Seva",
      date: "Client: 8Seva",
      image: PG2,
      popupImage: p12, // Image for the pop-up
      buttons: [
        {
          label: "Logo Design",
          style: {
            backgroundColor: '#9676ff',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "Web/App Design",
          style: {
            backgroundColor: '#9676ff',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "Social Media",
          style: {
            backgroundColor: '#9676ff',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        }
      ],
    },
    {
      title: "Creating a brand identity for the startup ikaansh",
      date: "Client : IKAANSH",
      image: PG3,
      popupImage: p13, // Image for the pop-up
      buttons: [
        {
          label: "Branding",
          style: {
            backgroundColor: 'rgb(188 53 3)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "Logo Design",
          style: {
            backgroundColor: 'rgb(188 53 3)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "Marketing Collateral",
          style: {
            backgroundColor: 'rgb(188 53 3)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        }
      ],
    },
  ];

  return (
    <div id="project-gallery">
      <Navbar/>
      <div className="contactpageanimation-container-pg">
        <div className="contactpageanimation-div1-p">
          <div className="contactpageanimation-text">
            <img src={star} alt="star" />
            Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured 
          </div>
        </div>
      </div>
      <div className="contactpage-content">
        <div className="contactpage-left-section">
          <h1 style={{ fontSize: '44px' }}>Project <span className='subtitle-pg'>Gallery</span></h1>
          <p style={{ fontSize: '18px', fontFamily:'Poppins'}}>A Comprehensive Showcase of My Most Impactful Projects</p>
        </div>
      </div>
      <div className="project-gallery-card">
        {projects.map((project, index) => (
          <Card key={index} {...project} onImageClick={setSelectedImage} />
        ))}
      </div>
      <Contactpage />
      <div><Footer /></div>

      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="popup-image" />
            <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
