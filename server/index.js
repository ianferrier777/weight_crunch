const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
