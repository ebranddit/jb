'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SiteSchema = new Schema({
  name: String,
  theme: String,
  primaryEmail: { type: String, lowercase: true },
});

module.exports = mongoose.model('Site', SiteSchema);
