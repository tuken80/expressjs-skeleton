'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function(sequelize) {
  var models = {};

  fs.readdirSync(path.join(__dirname, '..', 'models'))
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      var mdl = sequelize['import'](path.join(__dirname, '..', 'models', file));
      models[mdl.name] = mdl;
    });

    Object.keys(models).forEach(modelName => {
      if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });

  return models;
}
