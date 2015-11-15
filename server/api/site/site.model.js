'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SiteSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  theme: {
    type: String,
    default: 'simple'
  },
  primaryEmail: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Site', SiteSchema);
