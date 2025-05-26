import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./App.css";
import Header from "./Components/Headers/Header";
import About from "./Components/Abouts/About";
import Home from "./Components/Homes/Home";
import BookingForm from "./Components/BookingForm/BookingForm";

import Services from "./Components/Services/Service";
import TaxiRent from "./Components/TaxiRents/TaxiRent";
import Loader from "./Components/Loader/Loader";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footers/Footer";
import RoutePage from "./Components/Routes/RoutePage";
import RouteDetails from "./Components/Routes/RouteDetails";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/taxi-rent" element={<TaxiRent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/our-routes" element={<RoutePage />} />
          <Route path="/route/:id" element={<RouteDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
