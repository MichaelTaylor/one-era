const mongoose = require("mongoose");

const birthdaySchema = new mongoose.Schema({
  date: String,
  characters: [
    {
      name: String,
      image: String,
      wiki: String,
    },
  ],
});

module.exports = mongoose.model("Birthday", birthdaySchema);
