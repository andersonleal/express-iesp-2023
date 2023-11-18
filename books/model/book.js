const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  active: Boolean
})

module.exports = mongoose.model('Book', bookSchema)
