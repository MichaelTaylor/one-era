const chapter = require("../models/chapterSchema");
const volume = require("../models/volumeSchema");

const getChapterRelations = async (chapterID) => {
  const chapterNum = chapterID;

  const chapterData = await chapter
    .findOne({ chapterNum: chapterNum })
    .lean()
    .exec();

  const volumeData =
    chapterData !== null && chapterData.volume !== null
      ? await volume.findOne({ volumeNum: chapterData.volume }).lean().exec()
      : null;

  return { chapterData, volumeData };
};

const getTwoChapterRelations = async (earlyChapterID, lateChapterID) => {
  const chapters = [];

  const earlyChapterData = await chapter
    .findOne({ chapterNum: earlyChapterID }, { _id: 0 })
    .lean()
    .exec();

  const lateChapterData = await chapter
    .findOne({ chapterNum: lateChapterID }, { _id: 0 })
    .lean()
    .exec();

  const earlyVolumeData = await volume
    .findOne({ volumeNum: earlyChapterData.volume })
    .lean()
    .exec();

  const lateVolumeData = await volume
    .findOne({ volumeNum: lateChapterData.volume })
    .lean()
    .exec();

  chapters.push({
    chapterData: earlyChapterData,
    volumeData: earlyVolumeData,
  });

  chapters.push({
    chapterData: lateChapterData,
    volumeData: lateVolumeData,
  });

  return chapters;
};

const getChapterRelationsFirstLast = async () => {
  const firstChapterData = await chapter
    .findOne({ chapterNum: 1 }, { _id: 0 })
    .lean()
    .exec();

  const firstVolumeData = await volume
    .findOne({ volumeNum: firstChapterData.volume })
    .lean()
    .exec();

  const lastChapterData = await chapter
    .findOne({}, { _id: 0 })
    .sort({ _id: -1 })
    .limit(1)
    .lean()
    .exec();

  const lastVolumeData = await volume
    .findOne({ volumeNum: lastChapterData.volume })
    .lean()
    .exec();

  return [
    { chapterData: firstChapterData, volumeData: firstVolumeData },
    { chapterData: lastChapterData, volumeData: lastVolumeData },
  ];
};

module.exports = {
  getChapterRelations,
  getTwoChapterRelations,
  getChapterRelationsFirstLast,
};
