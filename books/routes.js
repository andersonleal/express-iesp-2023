const express = require('express');
const routes = express.Router();
const {ObjectId} = require("mongodb");
const Book = require('./model/book')

routes.put('/:id', async (req, res) => {
  const book = await Book.findOneAndUpdate(
    { _id: new ObjectId(req.params.id) },
    { title: req.body.title,
      author: req.body.author,
      active: req.body.active
    })
  res.status(200).json(book);
});

routes.get('/', async (req, res) => {
  const livros = await Book.find()
  res.json(livros);
});

routes.post('/', async (req, res) => {
  let book = new Book({
    title: req.body.title,
    author: req.body.author,
    active: true
  })
  book = await book.save()
  res.status(201).json(book);
});


routes.get('/:id', async (req, res) => {
  const book = await Book
    .findOne({ _id: new ObjectId(req.params.id) })
  res.json(book);
});

// https://github.com/andersonleal/express-iesp-2023
module.exports = routes;