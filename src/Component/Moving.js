import React, { useEffect, useRef } from 'react';
import './Moving.css'; // Ensure your CSS file path is correct

const Moving = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        const windowWidth = window.innerWidth;
        const textWidth = textElement.clientWidth;

        const keyframes = `
            @keyframes scrollText {
                0% {
                    transform: translateX(${windowWidth}px);
                    font-size: 150px;
                }
                25% {
                    font-size: 50px;
                }
                50% {
                    transform: translateX(-${textWidth}px);
                    font-size: 50px;
                }
                75% {
                    font-size: 150px;
                }
                100% {
                    transform: translateX(${windowWidth}px);
                    font-size: 150px;
                }
            }
        `;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }, []);

    return (
        <div className="scrolling-text-wrapper">
            <span
                ref={textRef}
                className="scrolling-text"
            >
                Scrolling Text
            </span>
        </div>
    );
};
export default Moving;
