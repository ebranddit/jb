var url = require('url');
var path = require('path');

module.exports = function(req, res, next){
  var namespace = 'sites'
  var subdomain = req.subdomains[0];
  if(subdomain){
    req.url = '/' + namespace  + '/' + subdomain + req.url;
  }

  next();
};
