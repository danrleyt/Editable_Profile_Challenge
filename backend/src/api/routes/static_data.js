const path = require('path');
const express = require('express');

module.exports = function (app) {
  app.use('/locations', express.static(path.join(__dirname, './../static_data/en/locations/cities.json')));
  app.use('/single_choice_attributes', express.static(path.join(__dirname, './../static_data/en/single_choice_attributes.json')));
}