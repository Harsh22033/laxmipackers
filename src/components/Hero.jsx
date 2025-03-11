import React from "react";
import "./Hero.css";
import backgroundVideo from "../Hero_bg.mp4"; // Ensure correct path

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted className="hero-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Your Trusted Packing & Moving Partner</h1>
        <p>
        Our skilled team ensures top-notch packing, secure handling, and on-time delivery to your destination. Trust Laxmi Packers and Movers for a smooth, worry-free moving experience—because your belongings deserve the best care!
        </p>
      </div>
    </div>
  );
};

export default Hero;
