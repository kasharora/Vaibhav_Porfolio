import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './All.css';
import './ProjectGallery.css'
import Navbar from './Navbar';
import star from './star.svg';
import Footer from './Footer.js';
import PG1 from './PG1.png'
import PG3 from './PG3.png'
import PG2 from './PG2.png'
import Contactpage from './ContactPage';

const Card = ({ title, date, duration, image, buttons, link }) => (
  <Link to={link} className="card-link">
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
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
        <p>{date}</p>
        {duration && <p>{duration}</p>}
      </div>
      <button className="play-button">▶</button>
    </div>
  </Link>
);

const ProjectGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "I enhanced ELECTRIFUEL's brand & digital presence. ",
      date: "Client : Electrifuel",
      image: PG1,
      link: "/ProjectElectrifuel",
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
      title: "Crafting Website &  App UI for Service-Based Companie 8Seva",
      date: "Client: 8Seva",
      image: PG2,
      link: "/Project8Seva",
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
      link: "/ProjectIkaansh",
      image: PG3,
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
            Project Gallery &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured
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
          <Card key={index} {...project} />
        ))}
      </div>
      <Contactpage />
      <div><Footer /></div>
    </div>
  );
}

export default ProjectGallery;