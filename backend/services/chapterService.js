const chapter = require("../models/chapterSchema");
const volume = require("../models/volumeSchema");

const getChapterRelations = async (chapterID) => {
  const chapterNum = chapterID;

  // Start the chapter query
  const chapterPromise = chapter
    .findOne({ chapterNum: chapterNum })
    .lean()
    .exec();

  // Wait for the chapter query to finish
  const chapterData = await chapterPromise;

  // Start the volume query only if necessary
  let volumePromise;
  if (chapterData !== null && chapterData.volume !== null) {
    volumePromise = volume
      .findOne({ volumeNum: chapterData.volume })
      .lean()
      .exec();
  }

  // Wait for the volume query to finish
  const volumeData = volumePromise ? await volumePromise : null;

  return { chapterData, volumeData };
};

const getTwoChapterRelations = async (earlyChapterID, lateChapterID) => {
  // Start both chapter queries in parallel
  const earlyChapterPromise = chapter
    .findOne({ chapterNum: earlyChapterID }, { _id: 0 }) // Projection
    .lean() // Lean query
    .exec();

  const lateChapterPromise = chapter
    .findOne({ chapterNum: lateChapterID }, { _id: 0 }) // Projection
    .lean() // Lean query
    .exec();

  // Wait for both chapter queries to finish
  const [earlyChapterData, lateChapterData] = await Promise.all([
    earlyChapterPromise,
    lateChapterPromise,
  ]);

  // Start both volume queries in parallel
  const earlyVolumePromise = volume
    .findOne({ volumeNum: earlyChapterData.volume }, { _id: 0 }) // Projection
    .lean() // Lean query
    .exec();

  const lateVolumePromise = volume
    .findOne({ volumeNum: lateChapterData.volume }, { _id: 0 }) // Projection
    .lean() // Lean query
    .exec();

  // Wait for both volume queries to finish
  const [earlyVolumeData, lateVolumeData] = await Promise.all([
    earlyVolumePromise,
    lateVolumePromise,
  ]);

  // Return the results
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
  // Start both queries in parallel
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

  // Wait for both queries to finish
  const [firstChapterData, lastChapterData] = await Promise.all([
    firstChapterPromise,
    lastChapterPromise,
  ]);

  // Start both volume queries in parallel
  const firstVolumePromise = volume
    .findOne({ volumeNum: firstChapterData.volume })
    .lean()
    .exec();

  const lastVolumePromise = volume
    .findOne({ volumeNum: lastChapterData.volume })
    .lean()
    .exec();

  // Wait for both volume queries to finish
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
