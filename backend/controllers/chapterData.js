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

const getLatestChapter = async (req, res) => {
  const latestChapter = await chapter.findOne({}, { _id: 0 }).sort({ _id: -1 });
  res.json(latestChapter);
};

const getTwoChapters = async (req, res) => {
  const earlyChapterID = req.params.earlyChapter;
  const lateChapterID = req.params.lateChapter;

  const earlyChapterPromise = chapter
    .findOne({ chapterNum: earlyChapterID }, { _id: 0 })
    .exec();

  const lateChapterPromise = chapter
    .findOne({ chapterNum: lateChapterID }, { _id: 0 })
    .exec();

  const [earlyChapter, lateChapter] = await Promise.all([
    earlyChapterPromise,
    lateChapterPromise,
  ]);

  res.json([earlyChapter, lateChapter]);
};

const getChaptersFirstLast = async (req, res) => {
  const firstChapterPromise = chapter.findOne({ chapterNum: 1 }, { _id: 0 });
  const lastChapterPromise = chapter
    .findOne({}, { _id: 0 })
    .sort({ _id: -1 })
    .limit(1);

  const [firstChapter, lastChapter] = await Promise.all([
    firstChapterPromise,
    lastChapterPromise,
  ]);

  res.json([firstChapter, lastChapter]);
};

const getChapterRelations = async (req, res) => {
  const chapterNum = req.params.id;
  const chapterRelations = await chapterService.getChapterRelations(chapterNum);

  res.json(chapterRelations);
};

const getTwoChapterRelations = async (req, res) => {
  const earlyChapterID = req.params.earlyChapter;
  const lateChapterID = req.params.lateChapter;
  const chapterRelations = await chapterService.getTwoChapterRelations(
    earlyChapterID,
    lateChapterID
  );
  res.json(chapterRelations);
};

const getChapterRelationsFirstLast = async (req, res) => {
  const chapterRelations = await chapterService.getChapterRelationsFirstLast();
  res.json(chapterRelations);
};

module.exports = {
  getChapter,
  getChapters,
  getLatestChapter,
  getTwoChapters,
  getChaptersFirstLast,
  getChapterRelations,
  getTwoChapterRelations,
  getChapterRelationsFirstLast,
};
