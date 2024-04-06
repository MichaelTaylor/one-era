const express = require("express");
const chapterData = require("../controllers/chapterData");

const router = express.Router();

router.get("/chapters/singular/:id", chapterData.getChapter);
router.get("/chapters", chapterData.getChapters);
router.get("/chapters/latest", chapterData.getLatestChapter);

router.get(
  "/chapters/multiple/:earlyChapter/:lateChapter",
  chapterData.getTwoChapters
);

router.get("/chapters/first/last/", chapterData.getChaptersFirstLast);

router.get("/chapter-relations/singular/:id", chapterData.getChapterRelations);
router.get(
  "/chapter-relations/multiple/:earlyChapter/:lateChapter",
  chapterData.getTwoChapterRelations
);
router.get(
  "/chapter-relations/first/last/",
  chapterData.getChapterRelationsFirstLast
);

module.exports = router;
