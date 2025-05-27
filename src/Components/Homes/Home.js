import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "../Homes/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Stats from "../Stats/Stat";
import TaxiFares from "../TaxiRents/TaxiRent";
import Services from "../Services/Service";
import AboutPage from "../Abouts/About";

function Home() {
  const [rideType, setRideType] = useState("Local");
  const [showButtons, setShowButtons] = useState(true);
  const [pickupLocation, setPickupLocation] = useState("Nagpur");
  const [dropLocation, setDropLocation] = useState("");
  const [carType, setCarType] = useState("Sedan - 5 Seats");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // WhatsApp number you gave (no extra 7)
  const whatsappNumber = "917798573786";

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    // Load drop location from localStorage if present
    const savedDrop = localStorage.getItem("dropLocation");
    if (savedDrop) {
      setDropLocation(savedDrop);
    }
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowButtons(window.scrollY <= lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Save drop location in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("dropLocation", dropLocation);
  }, [dropLocation]);

  const handleBookNow = () => {
    // Prepare message with all form data
    const message = `Hello, I would like to book a ${rideType} ride!\n
Pick-up Location: ${pickupLocation}\n
Drop Location: ${dropLocation}\n
Car Type: ${carType}\n
Start Date: ${startDate}\n
End Date: ${endDate}`;

    // Encode message for URL
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat in new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <div className="home">
        {/* Floating Buttons */}
        <div className="floating-buttons" data-aos="fade-left">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success me-2"
            style={{ borderRadius: "50%", padding: "10px 14px" }}
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          <a href="tel:+919876543210" className="btn btn-light" style={{ borderRadius: "50%", padding: "10px 14px" }}>
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          </a>
        </div>

        {/* Home Content */}
        <div className="home-content" data-aos="zoom-in">
          <h1>Welcome to Shriram Cabs</h1>
          <p>Ride Comfortably, Arrive Safely!</p>

          {/* Ride Type Buttons */}
          <div className={`ride-options ${showButtons ? "visible" : "hidden"}`} data-aos="fade-up">
            {["One Way", "Outstation", "Local", "Airport"].map((option) => (
              <button
                key={option}
                className={`ride-option-button ${rideType === option ? "active" : ""}`}
                onClick={() => setRideType(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Booking Form */}
          <div className="booking-section" data-aos="fade-up" style={{ marginTop: "20px" }}>
            <h3>Selected Ride: {rideType}</h3>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="pickup-location">Pick-up Location</label>
                <select
                  id="pickup-location"
                  className="form-control"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                >
                  <option>Nagpur</option>
                  <option>Airport</option>
                  <option>Railway Station</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="drop-location">Drop Location</label>
                <input
                  type="text"
                  id="drop-location"
                  className="form-control"
                  placeholder="Enter Drop Location"
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="car-type">Choose a Car</label>
                <select
                  id="car-type"
                  className="form-control"
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                >
                  <option>Sedan - 5 Seats</option>
                  <option>SUV - 7 Seats</option>
                  <option>Hatchback - 4 Seats</option>
                  <option>Premium - 5 Seats</option>
                  <option>MUV - 5 Seats</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="start-date">Start Date</label>
                <input
                  type="date"
                  id="start-date"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="end-date">End Date</label>
                <input
                  type="date"
                  id="end-date"
                  className="form-control"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            <button
              className="book-now-button btn btn-primary"
              onClick={handleBookNow}
              data-aos="flip-up"
              disabled={!dropLocation} // disable if drop location empty
              title={!dropLocation ? "Please enter Drop Location" : ""}
            >
              Book Your Ride Now
            </button>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <TaxiFares data-aos="fade-up" />
      <Services data-aos="fade-up" />
      <AboutPage data-aos="fade-up" />
      <Stats data-aos="fade-up" />
    </>
  );
}

export default Home;
