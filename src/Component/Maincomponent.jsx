import './Maincomponent.css';
import React, { useEffect } from 'react';
import About from './About';
import HomePage from './HomePage';
import Workgallery from './Workgallery';
import Ourprojects from './Ourprojects';
import Ourservices from './Ourservices';
import Contactpage from './ContactPage';
import Footer from './Footer';
import Process from './Process';
import Testimonials from './Testimonials';
import Div from './Div'
import Navbar from './Navbar';



const Maincomponent = () => {
  

  return (
    <>
    <Navbar />
      <HomePage/>
      
      {/* <About /> */}
      <Workgallery />
     <Ourprojects />
     <Ourservices />
      <Process/>
      <Testimonials/>
    <Contactpage />
      <Footer />
      </>
    
  );
};

export default Maincomponent;

