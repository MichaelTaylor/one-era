const volume = require("../models/volumeSchema");

const getVolume = async (req, res) => {
  const volumeNumber = req.params.id;
  const vol = await volume.findOne({ volumeNum: volumeNumber }, { _id: 0 });
  res.json(vol);
};

module.exports = {
  getVolume,
};
