'use strict';

var express = require('express');
var controller = require('./page.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.put('/:id', auth.hasRole('admin'), controller.update);
router.post('/', controller.create);

module.exports = router;
