import React from "react";
import "./SideContactBox.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function SideContactBox() {
  return (
    <div className="side-contact-box">
      <h3>Contact Information</h3>
      <a href="tel:+919325729815" className="contact-item">
        <FaPhone className="icon" /> +91 9325729815
      </a>
      <a href="tel:+918888723020" className="contact-item">
        <FaPhone className="icon" /> +91 8888723020
      </a>
      <a href="mailto:laxmipackermover786@gmail.com" className="contact-item">
        <FaEnvelope className="icon" /> laxmipackermover786@gmail.com
      </a>
      <a 
        href="No. 18/B, Near Rajasthani Dhaba, Kazarwada, Betoda, Ponda, South goa- 403401" 
      >
      </a>
    </div>
  );
}

export default SideContactBox;
