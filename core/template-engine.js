'use strict';

var path = require('path');

module.exports = function(app) {
  app.set('views', path.join(__dirname, '..', 'templates'));
  app.set('view engine', 'pug');
};
