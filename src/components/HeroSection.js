import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <nav className="navbar">
        <div className="logo">the tiffin box.</div>
        <button className="menu-btn">View Menu</button>
      </nav>
      <div className="hero-content">
        <div className="text-section">
          <h1>AUTHENTIC<br />SOUTH INDIAN<br />CUISINE</h1>
          <button className="order-btn">Order Now</button>
        </div>
        <div className="image-section">
          <img src="hero" alt="South Indian Dish" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
