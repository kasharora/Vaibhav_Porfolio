import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maincomponent from './Component/Maincomponent';
import Contact from './Component/Contact';
import ProjectIkaansh from './Component/ProjectIkaansh';
import Project2 from './Component/Project2';
import ProjectGallery from './Component/ProjectGallery'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Maincomponent />} />
      <Route path="/contactpage-container" element={<Contact />} /> 
      <Route path="/ProjectIkaansh" element={<ProjectIkaansh/>} />
      <Route path="/Project2_Page" element={<Project2/>} />
      <Route path="/project-gallery" element={<ProjectGallery />} />
      
    </Routes>
  );
}

export default App;