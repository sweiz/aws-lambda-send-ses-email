"use strict";

var config = {
  "awsRegion": 'ap-southeast-2a',
  "templateBucket" : "my-bucket",
  "templateKey" : "Templates/Template.html",
  "targetAddress" : "my-email@domain.com",
  "fromAddress": "Sales Inquiry <contact-form@domain.com>",
  "defaultSubject" : "New Sales Inquiry From {{name}}",
  "salt": "EWW_SOOO_SALTY_IT_HURTS",
  required: ['email', 'message']
}

module.exports = config
