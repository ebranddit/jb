'use strict';

var config = require('../environment');
var _ = require('underscore');

var map = {
    defaultTheme : "themeId",
    themesFolder : "themes",
};

module.exports = _.reduce(config.client, function(result, value, key) {
    key = map[key] || key;
    result[key] = value;
    return result;
}, {});
