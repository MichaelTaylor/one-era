const chapter = require("../models/chapterSchema");
const volume = require("../models/volumeSchema");

const getChapterRelations = async (chapterID) => {
  const chapterNum = chapterID;

  const chapterPromise = chapter
    .findOne({ chapterNum: chapterNum })
    .lean()
    .exec();

  const chapterData = await chapterPromise;

  let volumePromise;
  if (chapterData !== null && chapterData.volume !== null) {
    volumePromise = volume
      .findOne({ volumeNum: chapterData.volume })
      .lean()
      .exec();
  }

  const volumeData = volumePromise ? await volumePromise : null;

  return { chapterData, volumeData };
};

const getTwoChapterRelations = async (earlyChapterID, lateChapterID) => {
  const earlyChapterPromise = chapter
    .findOne({ chapterNum: earlyChapterID }, { _id: 0 })
    .lean()
    .exec();

  const lateChapterPromise = chapter
    .findOne({ chapterNum: lateChapterID }, { _id: 0 })
    .lean()
    .exec();

  const [earlyChapterData, lateChapterData] = await Promise.all([
    earlyChapterPromise,
    lateChapterPromise,
  ]);

  const earlyVolumePromise = volume
    .findOne({ volumeNum: earlyChapterData.volume }, { _id: 0 })
    .lean()
    .exec();

  const lateVolumePromise = volume
    .findOne({ volumeNum: lateChapterData.volume }, { _id: 0 })
    .lean()
    .exec();

  const [earlyVolumeData, lateVolumeData] = await Promise.all([
    earlyVolumePromise,
    lateVolumePromise,
  ]);

  return [
    {
      chapterData: earlyChapterData,
      volumeData: earlyVolumeData,
    },
    {
      chapterData: lateChapterData,
      volumeData: lateVolumeData,
    },
  ];
};

const getChapterRelationsFirstLast = async () => {
  const firstChapterPromise = chapter
    .findOne({ chapterNum: 1 }, { _id: 0 })
    .lean()
    .exec();

  const lastChapterPromise = chapter
    .findOne({}, { _id: 0 })
    .sort({ _id: -1 })
    .limit(1)
    .lean()
    .exec();

  const [firstChapterData, lastChapterData] = await Promise.all([
    firstChapterPromise,
    lastChapterPromise,
  ]);

  const firstVolumePromise = volume
    .findOne({ volumeNum: firstChapterData.volume })
    .lean()
    .exec();

  const lastVolumePromise = volume
    .findOne({ volumeNum: lastChapterData.volume })
    .lean()
    .exec();

  const [firstVolumeData, lastVolumeData] = await Promise.all([
    firstVolumePromise,
    lastVolumePromise,
  ]);

  return [
    {
      chapterData: firstChapterData,
      volumeData: firstVolumeData,
    },
    {
      chapterData: lastChapterData,
      volumeData: lastVolumeData,
    },
  ];
};

module.exports = {
  getChapterRelations,
  getTwoChapterRelations,
  getChapterRelationsFirstLast,
};
