'use strict';
var config = require('../../config/environment');
var fs = require('fs-extra');
var extend = require('extend');
var chalk = require('chalk');
var path = require('path');

exports.index = function(req, res){
  var themes = [];
  var themesFolder = path.normalize(config.root + '/server/' + config.client.themesFolder);

  fs.readdirSync(themesFolder).forEach(function (dir) {
    var themefile = themesFolder + '/' + dir + '/theme.json'
    var themeInfo = JSON.parse(fs.readFileSync(themefile, 'utf-8'));
    var theme = {id: dir};
    theme = extend(true, theme, themeInfo);
    themes.push(theme);
  })

  res.json(themes)
}
