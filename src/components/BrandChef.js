import React from 'react';
import '../styles/BrandChef.css'; 
import chefJomonImage from '../assests/chef-jomon.jpg'; 

const BrandChef = () => {
  return (
    <section className="brand-chef-section">
      <p className="chef-subheading">CHEF</p>
      <h2 className="chef-headline">OUR BRAND CHEF</h2>

      <div className="chef-content">
        
        <div className="chef-image-container">
          <img 
            src={chefJomonImage} 
            alt="Brand Chef Jomon" 
            className="chef-photo" 
          />
          
          <div className="chef-signature">Chef Jomon.</div>
        </div>

        <div className="chef-bio-container">
          <h3 className="chef-name">CHEF JOMON</h3>
          <p className="chef-title">senior chef at tiffin box</p>
          <p className="chef-description">"Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time. Chef Jomon brings years of expertise and a deep passion for traditional South Indian cooking, guaranteeing every meal is an authentic and memorable experience." <br /> <br/>
          "Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time. Chef Jomon brings years of expertise and a deep passion for traditional South Indian cooking, guaranteeing every meal is an authentic and memorable experience."
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandChef;