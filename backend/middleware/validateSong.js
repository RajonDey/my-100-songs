// middleware/validateSong.js

const validateSong = (req, res, next) => {
  const { title, artist } = req.body;

  if (!title || !artist) {
    return res.status(400).json({ message: "Title and artist are required" });
  }

  next();
};

module.exports = validateSong;
