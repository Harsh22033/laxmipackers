import React, { useState, useEffect } from "react";
import "./Review.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Amit Sharma", review: "Excellent service! My items arrived safely and on time." },
    { id: 2, name: "Priya Verma", review: "Highly professional and affordable moving company." },
    { id: 3, name: "Rahul Gupta", review: "Reliable and efficient. I highly recommend them!" },
    { id: 4, name: "Sneha Kapoor", review: "Very good experience, smooth shifting process." },
    { id: 5, name: "Vikas Mehta", review: "Affordable and efficient movers. Highly recommend!" },
    { id: 6, name: "Neha Singh", review: "My furniture was moved safely without any damage!" },
  ]);

  const [newReview, setNewReview] = useState("");
  const [newName, setNewName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleAddReview = () => {
    if (newName && newReview) {
      const newEntry = {
        id: Date.now(),
        name: newName,
        review: newReview,
      };

      setReviews([newEntry, ...reviews.slice(0, 5)]);
      setNewName("");
      setNewReview("");
    }
  };

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>

      {/* Slideshow Container */}
      <div className="reviews-slider">
        <button className="prev-btn" onClick={prevSlide}>&#10094;</button>

        <div className="review-cards">
          {reviews.slice(currentIndex, currentIndex + 3).map((rev) => (
            <div key={rev.id} className="review-card">
              <h3>{rev.name}</h3>
              <p>"{rev.review}"</p>
            </div>
          ))}
        </div>

        <button className="next-btn" onClick={nextSlide}>&#10095;</button>
      </div>

      {/* Add Review Form */}
      <div className="add-review">
        <h3>Leave a Review</h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="Your Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <textarea
            placeholder="Write your review..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
        </div>
        <button onClick={handleAddReview}>Submit Review</button>
      </div>
    </div>
  );
};

export default Reviews;
