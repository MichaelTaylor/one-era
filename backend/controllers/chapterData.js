const chapter = require("../models/chapterSchema");
const chapterService = require("../services/chapterService");

const getChapter = async (req, res) => {
  const chapterNumber = req.params.id;
  const chap = await chapter.findOne({ chapterNum: chapterNumber }, { _id: 0 });
  res.json(chap);
};

const getChapters = async (req, res) => {
  const chapters = await chapter.find({}, { _id: 0 });
  res.json(chapters);
};

const getTwoChapters = async (req, res) => {
  const earlyChapterID = req.params.earlyChapter;
  const lateChapterID = req.params.lateChapter;

  const chapters = [];

  const earlyChapter = await chapter.findOne(
    { chapterNum: earlyChapterID },
    { _id: 0 }
  );

  const lateChapter = await chapter.findOne(
    { chapterNum: lateChapterID },
    { _id: 0 }
  );

  chapters.push(earlyChapter);
  chapters.push(lateChapter);

  res.json(chapters);
};

const getChaptersFirstLast = async (req, res) => {
  const firstChapter = await chapter.findOne({ chapterNum: 1 }, { _id: 0 });
  const lastChapter = await chapter
    .findOne({}, { _id: 0 })
    .sort({ _id: -1 })
    .limit(1);

  const chapters = [];

  chapters.push(firstChapter);
  chapters.push(lastChapter);

  res.json(chapters);
};

const getChapterRelations = async (req, res) => {
  const chapterNum = req.params.id;
  const chapterRelations = await chapterService.getChapterRelations(chapterNum);

  res.json(chapterRelations);
};

const getChapterRelationsFirstLast = async (req, res) => {
  const chapterRelations = await chapterService.getChapterRelationsFirstLast();
  res.json(chapterRelations);
};

module.exports = {
  getChapter,
  getChapters,
  getTwoChapters,
  getChaptersFirstLast,
  getChapterRelations,
  getChapterRelationsFirstLast,
};
