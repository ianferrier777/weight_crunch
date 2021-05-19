const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema({
  weight: { type: String, required: true },
  time: { type: String, required: true },
});
const Weight = mongoose.model('Weight', weightSchema);

module.exports = { Weight };
