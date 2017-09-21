'use strict';

var path = require('path');
var fs = require('fs');

var services = {};

fs.readdirSync(path.join(__dirname, '..', 'services'))
  .filter(file => {
  return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
})
.forEach(file => {
  services[file.split('.')[0]] = require(path.join(__dirname, '..', 'services', file));
});

module.exports = services;
