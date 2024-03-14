const express = require("express");
const volumeData = require("../controllers/volumeData");

const router = express.Router();

router.get("/volumes/:id", volumeData.getVolume);

module.exports = router;
