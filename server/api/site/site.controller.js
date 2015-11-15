'use strict';

var createError = require('http-errors');
var Site = require('./site.model');

exports.index = function(req, res) {
  Site.find({}, function (err, sites) {
    if(err) return next(createError(500, err.toString())); ;
    res.status(200).json(sites);
  });
};


// Creates a new site in the DB.
exports.create = function(req, res, next) {
    var site = new Site(req.body);
    site.save(function(err, site) {
      if(err) { return next(createError(422, err.toString())); }
      return res.status(201).json(site);
    });
};

exports.update = function(req, res) {
  //TODO
};

exports.destroy = function(req, res) {
  Site.findById(req.params.id, function (err, site) {
    if(err) { return handleError(res, err); }
    if(!site) { return next(createError(404, 'Not Found')); }
    site.remove(function(err) {
      if(err) { return next(createError(500, err.toString())); }
      return next(createError(204, 'No Content')); ;
    });
  });
};
