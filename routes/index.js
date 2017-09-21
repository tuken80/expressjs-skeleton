'use strict';

var express = require('express');
var router = express.Router();

module.exports = function(indexController) {
  router.get('/', indexController.HomePage);

  return router;
};
