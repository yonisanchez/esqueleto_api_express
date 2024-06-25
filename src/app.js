const express = require('express');
const cors = require('cors');

const app = express();

//Config App Express
app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  res.send('OK');
});

module.exports = app;
