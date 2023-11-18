const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const cors = require('cors')
const bookRoutes = require("./books/routes");
const Book = require('./books/model/book')
const mongoose = require("mongoose");

async function init() {
  const app = express();
  const port = 3000;
  app.use(bodyParser.json());
  app.use(cors());

  await mongoose.connect('mongodb://localhost:27017/library');

  app.use('/books', bookRoutes);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

init();