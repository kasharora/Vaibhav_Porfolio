import React, { useEffect, useState } from 'react';
import './Customcursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseover', onMouseOver);
      document.addEventListener('mouseout', onMouseOut);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'P' || e.target.tagName === 'SPAN') {
        setHovered(true);
      }
    };

    const onMouseOut = (e) => {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'P' || e.target.tagName === 'SPAN') {
        setHovered(false);
      }
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? 'hovered' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
