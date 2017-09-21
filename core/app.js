'use strict';

var express = require('express');

var app = express();

const sequelize = require('./database');

require('./cors')(app);
require('./template-engine')(app);
require('./favicon')(app);
require('./logger')(app);
require('./parsers')(app);
require('./serve-static-files')(app);

var models = require('./modele')(sequelize);
var services = require('./services');
var controllers = require('./controllers')(app, services, models, sequelize);

require('./routing')(app, controllers);
require('./errors-handler')(app);

sequelize.sync();

module.exports = app;
