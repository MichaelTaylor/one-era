const express = require("express");
const chapterData = require("../controllers/chapterData");

const router = express.Router();

router.get("/chapters", chapterData.getChapters);
router.get("/chapters/singular/:id", chapterData.getChapter);
router.get(
  "/chapters/multiple/:earlyChapter/:lateChapter",
  chapterData.getTwoChapters
);
router.get("/chapters/first/last/", chapterData.getChaptersFirstLast);

module.exports = router;
