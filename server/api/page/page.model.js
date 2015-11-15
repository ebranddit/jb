'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PageSchema = new Schema({
  site: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  layout: String,
  phase: {
    type: String,
    default: 'unpublished'
  }
});

module.exports = mongoose.model('Page', PageSchema);
