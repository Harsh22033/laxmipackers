import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderImage from "./components/HeaderImage";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Reviews from "./components/Review";
import AboutUs from "./pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <HeaderImage />
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="about">
        <AboutUs />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="reviews">
        <Reviews />
      </div>

      <div id="contact">
        <ContactForm />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
