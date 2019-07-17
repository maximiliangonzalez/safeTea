const express = require('express');
const path = require('path');
const countryController = require('../db/countryController');
const postController = require('../db/postController');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client')));

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
});

app.get('/posts', postController.getPosts, (req, res) => {
  res.json(res.locals.result);
});

app.get('/post/:id', postController.getAPost, (req, res) => {
  res.json(res.locals.result);
})

app.post('/posts', postController.sendPost, (req, res) => {
  res.json({msg: 'post successfully sent'});
});

app.get('/comments/:id', postController.getComments, (req, res) => {
  res.json(res.locals.result);
});

app.post('/comments/:id', postController.sendComment, (req, res) => {
  res.json({'msg': 'added comment'})
})

app.listen(3000);