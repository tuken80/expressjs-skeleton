'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function(app, services, models, sequelize) {
  var controllers = {};

  fs.readdirSync(path.join(__dirname, '..', 'controllers'))
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      controllers[file.split('.')[0]] = require(path.join(__dirname, '..', 'controllers', file))(app, services, models, sequelize);
    });

  return controllers;
};
