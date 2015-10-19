/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var setup = require('./config/setup');
var express = require('express');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/themes', require('./components/themes'));

  app.use('/auth', require('./auth'));

  app.use('/themes', express.static(__dirname + '/themes'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

   //setup
   app.route('/setup/setup.js')
   .get(function(req, res) {
     res.set('Content-Type', 'application/javascript');
     var response = "angular.module('jb.setup', []).constant('Setup',"
     response += JSON.stringify(setup);
     response += ");"
     console.log(setup);
     res.send(new Buffer(response));
   });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
