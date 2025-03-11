const express = require("express");
const { getReviews, addReview } = require("../controllers/reviewController");

const router = express.Router();

router.get("/", getReviews);  // Fetch reviews
router.post("/", addReview);  // Add a new review

module.exports = router;
