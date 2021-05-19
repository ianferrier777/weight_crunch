const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { db, postWeight, getWeights } = require('../database/index');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.post('/weight', async (req, res) => {
  const { body } = req;
  postWeight(body)
    .then((data) => {
      res.statusCode = 201;
      res.send(data);
      res.end();
    })
    .catch((err) => {
      res.writeHead(409, `Post error: ${err}`);
      res.end();
    });
});

app.get('/weight', async (req, res) => {
  getWeights()
    .then((data) => {
      res.statusCode = 201;
      res.send(data);
      res.end();
    })
    .catch((err) => {
      res.writeHead(404, `Get error: ${err}`);
      res.end();
    });
});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Weight Crunch Server listening at "http://localhost:${port}".`);
});
