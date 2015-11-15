/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';

var Site = require('../api/site/site.model');
var Page = require('../api/page/page.model');
var User = require('../api/user/user.model');

Site.find({}).remove(function() {
  Site.create({
    name : 'demo',
    primaryEmail : 'admin@admin.com'
  }, function(){
    console.log('finished populating sites');
  }

);
});

Page.find({}).remove(function() {
  Page.create({
    site : 'demo',
    title : 'Home'
  }, {
    site : 'demo',
    title : 'About Us'
  },{
    site : 'ran',
    title : 'Home'
  }, function(){
    console.log('finished populating pages');
  }

);
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
    console.log('finished populating users');
  }
);
});
