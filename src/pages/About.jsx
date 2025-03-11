import React from "react";
import "./About.css";
import WhyChooseUs from "../components/WhyChooseUs";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="container">
        {/* About Us Heading */}
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
            <div className="about-us-head">
              <div className="about-us-title">
                <h2>About Laxmi Packers</h2>
                <p>We are dedicated to providing high-quality and reliable moving services.</p>
                <span className="about-us-title-border"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Boxes in One Line */}
        <div className="about-box-container">
          {/* Box 1 - Our Team */}
          <div className="about-box">
            <div className="iconset">
              <span className="glyphicon glyphicon-user icon"></span>
            </div>
            <h4>Our Team</h4>
            <p>We have a skilled team of professionals who ensure smooth and efficient moving services.</p>
          </div>

          {/* Box 2 - Our Services */}
          <div className="about-box">
            <div className="iconset">
              <span className="glyphicon glyphicon-briefcase icon"></span>
            </div>
            <h4>Our Services</h4>
            <p>We offer packing, moving, storage, and relocation services tailored to your needs.</p>
          </div>

          {/* Box 3 - Our Mission */}
          <div className="about-box">
            <div className="iconset">
              <span className="glyphicon glyphicon-globe icon"></span>
            </div>
            <h4>Our Mission</h4>
            <p>To provide safe, efficient, and cost-effective packing and moving services.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
    </div>
  );
};

export default AboutUs;
