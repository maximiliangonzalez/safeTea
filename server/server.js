const express = require('express');
const path = require('path');
const countryController = require('../db/countryController');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'client')));

// enter lower case with underscores instead of spaces
app.get('/country/:country', countryController.getCountry, (req, res) => {
  res.json(res.locals.result);
});

app.get('/right/:right', countryController.getRight, (req, res) => {
  res.json(res.locals.result);
});


app.get('/right/:right/whack', countryController.getNotRight, countryController.getRight, (req, res) => {
  res.json(res.locals.result);
});

app.get('/death', countryController.getDeath, (req, res) => {
  res.json(res.locals.result);
})

app.listen(3000);