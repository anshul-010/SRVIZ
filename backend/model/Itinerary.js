const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Itinerary title is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    tag: {
      type: String,
      required: [true, "Tag is required"],
      enum: ["NEW", "VIP", "Popular", "Limited", "Exclusive"],
      default: "NEW",
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Itinerary", itinerarySchema);
