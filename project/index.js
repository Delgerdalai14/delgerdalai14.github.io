const express = require('express');
const path = require('path');
const word = require('./database/word');

const app = express();

app.set('port', 8080);

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

// GET
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/dict.html'));
});

// SEARCH WORD
app.get('/search', word.searchWord);

const server = app.listen(app.get('port'), function () {
  console.log('Listening: ' + server.address().port);
});