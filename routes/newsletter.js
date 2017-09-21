'use strict';

var express = require('express');
var router = express.Router();

module.exports = function(newsletterController) {
  router.post('/inscription', newsletterController.InscriptionNewsletter);

  return router;
};
