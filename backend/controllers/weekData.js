const week = require("../models/weekSchema");

const getWeeks = async (req, res) => {
  const weeks = await week.find({}, { _id: 0, "mangaInfo._id": 0 });
  res.json(weeks);
};

const weeksByYear = async (req, res) => {
  const year = req.params.year;
  const weeks = await week
    .find({ date: { $regex: year } }, { _id: 0, "mangaInfo._id": 0 })
    .sort({ index: 1 });
  res.json(weeks);
};

module.exports = {
  getWeeks,
  weeksByYear,
};
