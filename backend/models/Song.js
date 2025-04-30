// models/Song.js

const mongoose = require("mongoose");

// Defining Song Schema
const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title must be given
  },
  artist: {
    type: String,
    required: true, // Artist must be given
  },
  mood: {
    type: String,
    required: false, // Optional field
  },
  createdAt: {
    type: Date,
    default: Date.now, // Auto fill when song is added
  },
});

// Creating Song model from schema
const Song = mongoose.model("Song", songSchema);

module.exports = Song;