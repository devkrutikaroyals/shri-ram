import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Headers/Header.css";
import logo from "../images/logo.png"; // Your logo image

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when clicking a nav link (mobile)
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="home-header">
        <img src={logo} alt="Shri Ram Cab Services Logo" className="home-logo" />
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/services" onClick={closeMenu}>Service</Link>
        <Link to="/taxi-rent" onClick={closeMenu}>Fleet leese</Link>
        <Link to="/our-routes" onClick={closeMenu}>Route</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
