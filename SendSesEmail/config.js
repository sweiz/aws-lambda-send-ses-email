"use strict";

var config = {
  "awsRegion": 'ap-southeast-2a',
  "templateBucket" : "my-bucket",
  "templateKey" : "Templates/Template.html",
  "targetAddress" : "my-email@domain.com",
  "fromAddress": "Sales Inquiry <contact-form@domain.com>",
  "defaultSubject" : "New Sales Inquiry From {{name}}",
  "salt": "EWW_SOOO_SALTY_IT_HURTS",
  validate: {
    email: {
      regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      required: true
    },

  }
}

module.exports = config
