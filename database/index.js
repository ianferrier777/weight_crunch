const mongoose = require('mongoose');
const { postWeight } = require('./controllers/postWeight');
const { getWeights } = require('./controllers/getWeights');

mongoose.connect('mongodb://localhost/weight_crunch', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

/* eslint-disable-next-line no-console */
db.on('error', console.error.bind(console, 'Connection Error: '));
/* eslint-disable-next-line no-console */
db.once('open', () => console.log('Connected to "weight_crunch" database.'));

module.exports = { db, postWeight, getWeights };
