import React, { useState } from 'react';
import './All.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';

import Logo from './Logo.js';
import star from './star.svg';
import Logomobileview from './LogomobileView.js';
import './AllMobileview.css';
import Footer from './Footer.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    contact: '',
    website: '',
    services: [],
    otherService: '',
  });
  const [showAnotherInput, setShowAnotherInput] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:9261177537';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/9261177537?text=Welcome_to_VaibhavParihar_Design_and_Co._We_Are_Here_To_Help_You ';
  };

  const handleMail = () => {
    window.location.href = 'mailto:Ranyparihar@gmail.com';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          services: [...prevData.services, value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          services: prevData.services.filter((service) => service !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert('Failed to send email.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send email.');
      });

    e.target.reset();
    setShowAnotherInput(false);
  };

  return (
    <div id="contactpage-container">
      <Navbar/>
      {/* <div className='Maindivlogo'><Logo/></div>
      <div className='Mobileviewlogo'><Logomobileview/></div> */}
      <div className="contactpageanimation-container">
        <div className="contactpageanimation-div1">
          <div className="contactpageanimation-text">
            <img src={star} alt="star" />
            Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact &nbsp;<img src={star} alt="star" /> Contact
          </div>
        </div>
        {/* <div className="contactpageanimation-div2">
          <div className="contactpageanimation-text">
            &nbsp;&nbsp;&nbsp;<img src={star} alt="star" />Get in Touch – Let's Create Something Amazing Together! &nbsp;&nbsp;&nbsp;<img src={star} alt="star" />Get in Touch – Let's Create Something Amazing Together! &nbsp;&nbsp;&nbsp;<img src={star} alt="star" /> Get in Touch – Let's Create Something Amazing Together! &nbsp;&nbsp;&nbsp;<img src={star} alt="star" />Get in Touch – Let's Create Something Amazing Together!
          </div>
        </div> */}
      </div>
      <div className="contactpage-content">
        <div className="contactpage-left-section">
          <h1 style={{ fontSize: '44px' }}>Let's Make <span className='subtitle-contact'>it Real</span></h1>
          <p style={{ fontSize: '18px', fontFamily:'Poppins'}}>& TransForm Ideas Into Reality With Purposeful Branding & Effective Web Designing</p>
          <div className="contactpage-icons">
            <div className='social-icon-div'>
              <FontAwesomeIcon icon={faPhone} onClick={handleCall} className="contactpage-icon" /><p>Call Me</p>
            </div>
            <div className='social-icon-div'>
              <FontAwesomeIcon icon={faWhatsapp} onClick={handleWhatsApp} className="contactpage-icon" /><p>What's app Me</p>
            </div>
            <div className='social-icon-div'>
              <FontAwesomeIcon icon={faEnvelope} onClick={handleMail} className="contactpage-icon" /><p>Mail Me</p>
            </div>
          </div>
        </div>
        <div className="contactpage-right-section">
          <form onSubmit={handleSubmit}>
            <div className="contactpage-form-group">
              <div className='contactpage-form-group-1'>
                <p>Your Name</p>
                <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
              </div>
              <div className='contactpage-form-group-1'>
                <p>Your's Organisation Name</p>
                <input type="text" name="organization" placeholder="Organization Name" onChange={handleChange} />
              </div>
            </div>
            <div className="contactpage-form-group">
              <div className='contactpage-form-group-1'>
                <p>Your's Email Address</p>
                <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
              </div>
              <div className='contactpage-form-group-1'>
                <p>Your's contact Number</p>
                <input type="tel" name="contact" placeholder="Contact Number" required onChange={handleChange} />
              </div>
            </div>
            <div className="contactpage-form-group">
              <div className='contactpage-form-group-1'>
                <p>Website/Social Media Link</p>
                <input type="url" name="website" placeholder="Website/Social Media Link" onChange={handleChange} />
              </div>
            </div>
            <div className="contactpage-form-group-checkbox">
              <p>What services are you interested in?</p>
              <div className="contactpage-checkbox-group">
                <label><input type="checkbox" name="services" value="Logo Services" onChange={handleChange} /> Logo Services</label>
                <label><input type="checkbox" name="services" value="Brand Identity Development" onChange={handleChange} /> Brand Identity Development</label>
                <label><input type="checkbox" name="services" value="Packaging Design" onChange={handleChange} /> Packaging Design</label>
                <label><input type="checkbox" name="services" value="Brand Consultation" onChange={handleChange} /> Brand Consultation</label>
                <label>
                  <input type="checkbox" onChange={() => setShowAnotherInput(!showAnotherInput)} />
                  Other
                </label>
                {showAnotherInput && <input type="text" name="otherService" placeholder="In which Service You Are Interested " onChange={handleChange} />}
              </div>
            </div>
            <button type="submit" className="contactpage-submit-btn">Submit</button>
          </form>
        </div>
      </div>
      {/* <div className='Bottom_navbar'><Navbar /></div> */}
      <div><Footer /></div>
    </div>
  );
};

export default Contact;
