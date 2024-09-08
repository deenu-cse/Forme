const mongoose = require('mongoose');

// Define the schema for love data
const LoveSchema = new mongoose.Schema({
  loveLevel: { type: String, required: true },
  message: { type: String, required: true }
});

// Create a model from the schema
const Love = mongoose.model('Love', LoveSchema);

module.exports = Love;
