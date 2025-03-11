import React from "react";
import "./Services.css";
import { FaGlobe, FaTruckMoving, FaBoxOpen, FaCar, FaWarehouse, FaIndustry, FaDolly, FaFileContract } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services">
      <h2 className="services-title">OUR CORE SERVICES</h2>
      <p className="services-subtitle">We specialize in performing solutions at</p>
      <div className="services-grid">
        <div className="service-item">
          <FaTruckMoving className="service-icon" />
          <p>Domestic Moving</p>
        </div>
        <div className="service-item">
          <FaBoxOpen className="service-icon" />
          <p>Household Removal </p>
        </div>
        <div className="service-item">
          <FaCar className="service-icon" />
          <p>Car and bike Carriers</p>
        </div>
        <div className="service-item">
          <FaFileContract className="service-icon" />
          <p>Contract Logistics</p>
        </div>
        <div className="service-item">
          <FaDolly className="service-icon" />
          <p>Commercial Moving</p>
        </div>
        <div className="service-item">
          <FaWarehouse className="service-icon" />
          <p>Storage Facility</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
