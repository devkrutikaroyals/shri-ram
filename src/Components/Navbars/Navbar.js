import React from 'react';
import './Navbar.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <span className="nav-item">📍 Nagpur 440013 ,  India</span>
        <span className="nav-item">📞 +91 7798573786</span>
      </div>
      <div className="navbar-right">
        <a href="https://www.facebook.com/share/1C1xEcNrRd/?mibextid=qi2Omg" target="_blank" rel="noreferrer" className="icon">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/cabsshriram?utm_source=qr&igsh=ODRnaGlsa3NyeWo1" target="_blank" rel="noreferrer" className="icon">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
