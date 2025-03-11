import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu on mobile after clicking a link
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => scrollToSection("home")}>
        Laxmi Packers and Movers
      </div>

      {/* Mobile Toggle Button */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a onClick={() => scrollToSection("home")}>Home</a></li>
        <li><a onClick={() => scrollToSection("about")}>About</a></li>
        <li><a onClick={() => scrollToSection("services")}>Services</a></li>
        <li><a onClick={() => scrollToSection("testimonials")}>Testimonials</a></li>
        <li><a onClick={() => scrollToSection("reviews")}>Reviews</a></li>
        <li><a onClick={() => scrollToSection("contact")}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
