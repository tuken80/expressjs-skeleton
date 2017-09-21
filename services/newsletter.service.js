'use strict';

var NewsletterService = {};

NewsletterService.inscription = function(models, newsletter) {
  return models.Newsletter.create(newsletter);
}

module.exports = NewsletterService;
