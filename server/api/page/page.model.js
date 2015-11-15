'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PageSchema = new Schema({
  siteId: String,
  title: String,
  layout: String,
  phase: {
    type: String,
    default: 'unpublished'
  }
});

module.exports = mongoose.model('Page', PageSchema);
