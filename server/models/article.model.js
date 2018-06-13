'use strict';

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  publish_date: {
    type: Date
  }
});

module.exports = mongoose.model('Article', ArticleSchema);
