const express = require("express");
const Itinerary = require("../model/Itinerary");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const itineraries = await Itinerary.find();

    res.status(200).json({
      success: true,
      count: itineraries.length,
      data: itineraries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching itineraries",
      error: error.message,
    });
  }
});

module.exports = router;
