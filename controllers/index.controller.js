'use strict';

module.exports = function(app, services, models, sequelize) {
  var IndexControllers = {};

  IndexControllers.HomePage = function(request, response, next) {
    response.render('index', {
      title: "API REST server of brolikrecords.fr",
      text: "Please go out."
    });
  }

  return IndexControllers;
};
