'use strict';

var path = require('path');
var fs = require('fs');
const Sequelize = require('sequelize');
const dbconf = require(path.join(__dirname, '..', 'conf', 'database.json'));

module.exports = new Sequelize(dbconf.database, dbconf.username, dbconf.password, {
    host: dbconf.hostname,
    dialect: dbconf.dialect,
    pool: {
      max: dbconf.pool.max,
      min: dbconf.pool.min,
      idle: dbconf.pool.idle,
    }
  }
);
