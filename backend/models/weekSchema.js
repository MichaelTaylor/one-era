const mongoose = require("mongoose");

const weekSchema = new mongoose.Schema({
  index: Number,
  week: Date,
  notes: {
    mangaNotes: String,
  },
  chapterID: Object,
});

module.exports = mongoose.model("Week", weekSchema);
