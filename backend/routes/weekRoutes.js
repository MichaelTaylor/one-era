const express = require("express");
const weekData = require("../controllers/weekData");

const router = express.Router();

router.get("/weeks", weekData.getWeeks);
router.get("/weeks/:year", weekData.weeksByYear);

module.exports = router;
