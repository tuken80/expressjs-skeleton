'use strict';

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
}
