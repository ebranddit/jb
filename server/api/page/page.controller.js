'use strict';

var createError = require('http-errors');
var Page = require('./page.model');

/**
 * Get list of pages
 */
exports.index = function(req, res) {
  Page.find({site: req.vhost[0]}, function (err, pages) {
    if(err) return next(createError(422, err.toString()));
    res.status(200).json(pages);
  });
};

// Creates a new page
exports.create = function(req, res, next) {
  Page.create(req.body, function(err, page) {
    if(err) return next(createError(422, err.toString()));
    return res.status(201).json(page);
  });
};

exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Page.findById(req.params.id, function (err, page) {
    if (err) return next(createError(422, err.toString()));
    if(!page) { return next(createError(404, 'Not Found')); }
    var updated = _.merge(page, req.body);
    updated.save(function (err) {
      if (err) return next(createError(422, err.toString()));
      return res.status(200).json(thing);
    });
  });
};

exports.destroy = function(req, res) {
  Page.findById(req.params.id, function (err, page) {
    if(err) { return handleError(res, err); }
    if(!page) { return next(createError(404, 'Not Found')); }
    page.remove(function(err) {
      if(err) { return next(createError(422, err.toString()));}
      return next(createError(204, 'No Content'));;
    });
  });
};
