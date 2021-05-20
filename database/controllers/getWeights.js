const { Weight } = require('../models/Weight');

const getWeights = async () => Weight.find().sort({ time: 1 })
  .catch((err) => {
    /* eslint-disable-next-line no-underscore-dangle */
    throw new Error(err._message);
  })
  .then((data) => data);

module.exports = { getWeights };
