// controllers/songController.js

const Song = require("../models/Song");

// @desc    Get all songs
// @route   GET /api/songs
const getSongs = async (req, res, next) => {
  try {
    const { mood } = req.query;
    const filter = mood ? { mood } : {};

    const songs = await Song.find(filter);
    res.json(songs);
  } catch (error) {
    next(error);
  }
};

// @desc    Add a new song
// @route   POST /api/songs
const addSong = async (req, res) => {
  const { title, artist, mood } = req.body;

  try {
    const song = new Song({
      title,
      artist,
      mood,
    });

    const createdSong = await song.save();
    res.status(201).json(createdSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a song
// @route   PUT /api/songs/:id
const updateSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    // Update fields
    song.title = req.body.title || song.title;
    song.artist = req.body.artist || song.artist;
    song.mood = req.body.mood || song.mood;

    const updated = await song.save();
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a song
// @route   DELETE /api/songs/:id
const deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.status(200).json({ message: 'Song deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getSongs, addSong, updateSong, deleteSong };
