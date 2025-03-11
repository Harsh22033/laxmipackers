const express = require("express");
const { submitContact } = require("../controllers/contactController");

const router = express.Router();

router.post("/", submitContact);  // Save contact form responses

module.exports = router;
