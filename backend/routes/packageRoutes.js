const express = require("express");
const router = express.Router();
const Package = require("../model/Package");

router.get("/", async (req, res) => {
  try {
    const packages = await Package.find();

    res.status(200).json({
      success: true,
      count: packages.length,
      data: packages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching packages",
      error: error.message,
    });
  }
});

module.exports = router;
