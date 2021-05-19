const { Weight } = require('../models/Weight');

const postWeight = async (weightObj) => {
  const newWeight = new Weight(weightObj);
  return newWeight.save()
    .catch((err) => {
      /* eslint-disable-next-line no-underscore-dangle */
      throw new Error(err._message);
    })
    .then((data) => data);
};

module.exports = { postWeight };
