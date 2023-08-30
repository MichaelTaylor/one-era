const express = require("express");
const birthdayData = require("../controllers/birthdayData");

const router = express.Router();

router.get("/birthdays", birthdayData.getBirthdays);
router.get("/birthdays/:month", birthdayData.getBirthdayMonth);
router.get("/birthdays/:month/:day", birthdayData.getBirthdaySpecific);

module.exports = router;
