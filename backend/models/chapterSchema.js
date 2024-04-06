const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
  chapterNum: Number,
  title: String,
  arc: String,
  saga: String,
  cover: String,
  panel: String,
  release: String,
  volume: Number,
  wsjIssue: String,
  authorComments: String,
});

chapterSchema.index({ chapterNum: 1 });

module.exports = mongoose.model("Chapter", chapterSchema);
