import React from "react";
import "./Whychooseus.css";

const WhyChooseUs = () => {
  return (
    <section className="why-us-section">
      <div className="container">
        {/* Heading */}
        <div className="why-us-head">
          <h2>Why Choose Us</h2>
          <p>
            We are committed to providing the best moving services with safety, professionalism, and sustainability.
          </p>
          <span className="why-us-title-border"></span>
        </div>

        <div className="why-us-content">
          {/* Left Column */}
          <div className="why-us-box">
            <div className="iconset">
              <span className="glyphicon glyphicon-cog icon"></span>
            </div>
            <div className="text">
              <h4>Safety First</h4>
              <p>We ensure the highest level of safety while moving your valuable goods.</p>
            </div>
          </div>

          <div className="why-us-box">
            <div className="iconset">
              <span className="glyphicon glyphicon-cog icon"></span>
            </div>
            <div className="text">
              <h4>Clean Service</h4>
              <p>We maintain a clean and systematic moving process to ensure customer satisfaction.</p>
            </div>
          </div>

          <div className="why-us-box">
            <div className="iconset">
              <span className="glyphicon glyphicon-cog icon"></span>
            </div>
            <div className="text">
              <h4>Professional Team</h4>
              <p>Our team consists of trained professionals who handle everything with care.</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="why-us-box">
            <div className="iconset">
              <span className="glyphicon glyphicon-cog icon"></span>
            </div>
            <div className="text">
              <h4>Decades of Expertise</h4>
              <p>With over 20 years of industry experience, we have honed our skills to deliver exceptional quality and innovation. Our expertise ensures top-notch solutions tailored to meet every client's needs..</p>
            </div>
          </div>

          <div className="why-us-box">
            <div className="iconset">
              <span className="glyphicon glyphicon-cog icon"></span>
            </div>
            <div className="text">
              <h4>Modern Packing</h4>
              <p>Our advanced packing techniques ensure the safety of fragile items.</p>
            </div>
          </div>

          <div className="why-us-box">
            <div className="iconset">
              <span className="glyphicon glyphicon-cog icon"></span>
            </div>
            <div className="text">
              <h4>Home Decor</h4>
              <p>We assist in setting up your new space with a seamless moving experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
