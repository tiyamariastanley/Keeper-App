const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = mongoose.model('List', listSchema);
