

import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <span className="logo-box">the<br />tiffin<br />box</span>
      </div>
      <div className="footer-newsletter">
        <h2>SUBSCRIBE TO<br />OUR NEWSLETTER</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-contact">
        <p>CONTACT U</p>
        <p>0151 246 1600</p>
        <p>INFO@TIFFINBOX.CO.UK</p>
        <p>ALLERTON RD, LIVERPOOL L25 7RE</p>
      </div>
      <div className="footer-menu">
        <a href="/menu">Menu</a>
        <a href="/OnlineOrder">Order Online</a>
        <a href="/BookTable">Book a Table</a>
        <a href="/AboutUs">About Us</a>
        <a href="/ContactUs">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
