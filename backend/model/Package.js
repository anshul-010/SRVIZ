const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Package title is required'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  price: {
    type: String,
    required: [true, 'Price is required'],
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Package', packageSchema);
