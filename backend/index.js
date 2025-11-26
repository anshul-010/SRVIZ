const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const packageRoutes = require("./routes/packageRoutes");
const itineraryRoutes = require("./routes/itineraryRoutes");
const contactRoutes = require("./routes/contactRoutes");


dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.use("/api/packages", packageRoutes);
app.use("/api/itinerary", itineraryRoutes);
app.use("/api/contact", contactRoutes);

// Health check route
app.get("/", (req, res) => {
  res.json({
    message: "Sports Travel API is running",
  });
});


// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
