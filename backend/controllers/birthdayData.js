const birthday = require("../models/birthdaySchema");

const convertMonth = (index) => {
  const date = new Date(index);
  const month = date.toLocaleString("default", { month: "long" });

  return month;
};

const getBirthdays = async (req, res) => {
  const birthdays = await birthday.find({}, { _id: 0, "characters._id": 0 });

  res.json(birthdays);
};

const getBirthdayMonth = async (req, res) => {
  const month = convertMonth(req.params.month);
  const birthdays = await birthday.find(
    { date: { $regex: month } },
    { _id: 0, "characters._id": 0 }
  );
  res.json(birthdays);
};

const getBirthdaySpecific = async (req, res) => {
  const month = `${convertMonth(req.params.month)} ${req.params.day}`;

  const day = await birthday.find(
    { date: month },
    { _id: 0, "characters._id": 0 }
  );
  res.json(day);
};

module.exports = {
  getBirthdays,
  getBirthdayMonth,
  getBirthdaySpecific,
};
