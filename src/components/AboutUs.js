


import React from 'react';
import '../styles/AboutUs.css'; 
import teamImage from './../assests/teamImage.jpg'; 

const AboutUs = () => {
  return (
    <section className="about-us-section">
      
      <div className="about-us-left">
        <img 
          src={teamImage} 
          alt="The Tiffin Box Team and Chefs" 
          className="team-photo" 
        />
       
        <div className="image-overlay"></div>
      </div>

      
      <div className="about-us-right">
        <p className="about-us-subheading">ABOUT US</p>
        <h2 className="about-us-headline">
          EXPERIENCE AUTHENTIC SOUTH INDIAN FLAVORS AT THE TIFFIN BOX
        </h2>
        <button className="know-more-btn">
          Know More <span className="arrow">&gt;</span>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;