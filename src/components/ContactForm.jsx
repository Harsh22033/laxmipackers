import React, { useState } from "react";
import "./ContactForm.css";
import SideContactBox from "./SideContactBox"; // Import the side contact box

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx9QhoNKZ21_mHDU9wwTsCc86pZ6t74k5EhobphpkY1xEnr0bbHzqUuMaRTjhd_-Eoi/exec", // 🔹 Replace with your new Google Apps Script URL
        {
          method: "doPOST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Response from server:", data);
  
      if (data.status === "success") {
        alert("Form submitted successfully!");
        setFormData({ name: "", number: "", email: "", message: "" });
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="contact-container">
      <section className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="number"
              placeholder="Your Number"
              required
              pattern="[0-9]*"
              inputMode="numeric"
              value={formData.number}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message (to, from, type of service.)"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </section>

      <SideContactBox />
    </div>
  );
};

export default ContactForm;
