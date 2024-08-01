import React from 'react';
import './All.css';

import sec4_1st from './sec4_1st.svg';

const Project1_div6 = () => {
  return (
    <div className='project1_div6-left-main'>
        <div className="project1_5th_header">
        <h1 className="project1_5th_title">04</h1>
        <p className="project1_5th_subtitle">Secure Payment Gateway<br/><span className='Project1_5th_subtitle1'>Integrate A Reliable Payment System  </span></p>
      </div>
    <div className="project1_div6-container">
      <div className="project1_div6-left">
        <p className="project1_div6-text">Clear Product Summary:</p>
        <ul className="project1_div6-list">
          <li className="project1_div6-list-item">Display a concise summary of the items in the cart, including product names, quantities, and prices.</li>
          <li className="project1_div6-list-item">Make it easy for users to review their selections at a glance.</li>
        </ul>
      </div>
      <div className="project1_div6-middle">
        <img className="project1_div6-image" src={sec4_1st} alt="Image 1" />
        <div className='project1_div6-text-container'>
        <div className="project1_div6-text1">Cart Page</div>
        {/* <img className="project1_div6-image" src="image2.jpg" alt="Image 2" /> */}
        <div className="project1_div6-text1">Payment Page</div>
        </div>
      </div>
      <div className="project1_div6-right">
        <p className="project1_div6-text">Preferred Payment Options</p>
        <ul className="project1_div6-list">
          <li className="project1_div6-list-item">Offer popular payment methods (UPI credit cards, digital wallets, Paytm/googlePay etc).</li>
          <li className="project1_div6-list-item">Highlight security features to boost confidence.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Project1_div6;
