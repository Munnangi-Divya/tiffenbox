import React from 'react';
import '../styles/Headerr.css';
import foodImage from '../assests/foodImage.jpg';
import { FaInstagram, FaEnvelope, FaUser } from "react-icons/fa";
 

const Headerr = () => {
  return (
    <section className="hero-header">
      <div className="hero-left">
        <div className="hero-top-row">
          <span className="hero-hamburger">&#9776;</span>
          <div className="hero-logo">
            <span>the<br />tiffin<br />box</span>
          </div>
        </div>
        <div className="hero-line" />
        <h1 className="hero-title">
          AUTHENTIC<br />
          SOUTH INDIAN<br />
          CUISINE
        </h1>
        <button className="hero-order-btn">
          Order Now <span>&rarr;</span>
        </button>
      </div>
      <div className="hero-right">
        <button className="hero-menu-btn">View Menu &rarr;</button>
        <div className="hero-img">
          <img src={foodImage} alt="Dish" className=''/>
        </div>
        
        <div className="hero-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
           </a>
           <a href="mailto:info@yourmail.com">
              <FaEnvelope />
             </a>
           <a href="/contact-us">
               <FaUser />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Headerr;