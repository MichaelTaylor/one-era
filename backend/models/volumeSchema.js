const mongoose = require("mongoose");

const volumeSchema = new mongoose.Schema({
  volumeNum: Number,
  volumetitle: String,
  imageDirectory: String,
  volumeChapters: String,
  volumeRelease: String,
  authorImage: String,
  authorNotes: String,
});

module.exports = mongoose.model("Volume", volumeSchema);
