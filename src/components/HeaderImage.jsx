import React from "react";
import "./HeaderImage.css";
import headerImage from "../download.jpg"; // Ensure the correct path
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import icons

const HeaderImage = () => {
  return (
    <div className="header-container">
      {/* Header Image Section */}
      <div className="header-image">
        <img src={headerImage} alt="Header" />
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <a href="tel:+919325729815" className="contact-item">
          <FaPhone className="icon" />
          <span>+91 9325729815</span>
        </a>
        <a href="tel:+918888723020" className="contact-item">
          <FaPhone className="icon" />
          <span>+91 8888723020</span>
        </a>
        <a href="mailto:laxmipackermover786@gmail.com" className="contact-item">
          <FaEnvelope className="icon" />
          <span>laxmipackermover786@gmail.com</span>
        </a>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <span>
            No. 18/B, Near Rajasthani Dhaba, Kazarwada,  
            <br />
            Betoda, Ponda, South Goa - 403401
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
