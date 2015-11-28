/**
* Main application routes
*/

'use strict';

var errors = require('./components/errors');
var path = require('path');
var express = require('express');
var vhost = require('vhost');



module.exports = function(app) {

  var subApp = express();
  // Insert routes below
  subApp.use('/api/users', require('./api/user'));
  subApp.use('/api/page', require('./api/page'));

  // All undefined asset or api routes should return a 404
  subApp.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(errors[404]);

  // All other routes should redirect to the index.html
  subApp.route('/')
  .get(function(req, res) {
    if (!module.parent) console.log(req.vhost);

    app.use('/' + req.vhost[0], express.static(__dirname + '/../' + req.vhost[0]));

    res.sendFile(path.resolve(app.get('appPath') + '/../sites/' + req.vhost[0] + '/index.html'));
  });

  app.use(vhost('*.school.com', subApp)); // Serves all subdomains via site app
};
