import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-left">
        <img src="team" alt="Team" />
      </div>
      <div className="about-right">
        <h4>ABOUT US</h4>
        <h2>
          EXPERIENCE AUTHENTIC<br />
          SOUTH INDIAN FLAVORS<br />
          AT THE TIFFIN BOX
        </h2>
      </div>
    </section>
  );
};

export default AboutSection;
