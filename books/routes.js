const express = require('express');
const routes = express.Router();

const books = [
  {id: 1, title: 'livro 1', author: 'autor 1'},
  {id: 2, title: 'livro 2', author: 'autor 2'},
  {id: 3, title: 'livro 3', author: 'autor 3'},
]

routes.get('/', (req, res) => {
  res.json(books);
});

routes.post('/', (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(book);
  res.status(201).json(book);
});

module.exports = routes;