// routes/songRoutes.js

const express = require("express");
const {
  getSongs,
  addSong,
  updateSong,
  deleteSong,
} = require("../controllers/songController");
const validateSong = require("../middleware/validateSong");

const router = express.Router();

// Route for songs
router.get("/", getSongs);
router.post("/",validateSong, addSong);
router.put("/:id",validateSong, updateSong);
router.delete("/:id", deleteSong);

module.exports = router;
