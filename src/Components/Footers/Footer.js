import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>About Us</h3>
          <p>
        Shriram Cabs is a trusted cab service provider committed to delivering
          safe, affordable, and reliable transport solutions. Whether you're
          traveling locally or planning an outstation journey, we ensure a
          comfortable ride every step of the way.
          </p>
        </div>
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <nav className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Route</Link>
            <Link to="/contact">Contact us</Link>
          </nav>
        </div>
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>Email: shriramcabs@gmail.com</p>
          <p>Phone: 91+ 7798573786</p>
          <p>Address: Address: Daw, Mohammed Shafiq, Qureshi road Nagpur, plot number 115, Prashant Nagar, Police Line Takli, Nagpur, Maharashtra 440013</p>
        </div>
      </div>
     <div className="footer-bottom">
  <p>
    © {new Date().getFullYear()} All rights reserved{' '}
    <a href="https://royalswebtechpvtltd.com/" target="_blank" rel="noopener noreferrer">
      Royals Webtech
    </a>
    .
  </p>
</div>

    </footer>
  );
};

export default Footer;
