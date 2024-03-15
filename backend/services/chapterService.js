const chapter = require("../models/chapterSchema");
const volume = require("../models/volumeSchema");

const getChapterRelations = async (chapterID) => {
  const chapterNum = chapterID;

  const chapterData = await chapter
    .findOne({ chapterNum: chapterNum })
    .lean()
    .exec();

  const volumeData = await volume
    .findOne({ volumeNum: chapterData.volume })
    .lean()
    .exec();

  return { chapterData, volumeData };
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
  getChapterRelationsFirstLast,
};
