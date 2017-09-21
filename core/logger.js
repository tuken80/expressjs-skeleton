'use strict';

var path = require('path');
var logger = require('morgan');
var environment_configuration = require(path.join(__dirname, '..', 'conf', 'environment.json'));

module.exports = function(app) {
  app.use(logger(environment_configuration['env']));
};
