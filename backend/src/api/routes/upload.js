const path = require('path');
const express = require('express');

const upload = require('../controllers/upload').upload;
const uploadFunction = require ('../controllers/upload').uploadFunction;

module.exports = function (app) {
  app.use('/images/profile', express.static(path.join(__dirname, './../storage')));
  app.post('/api/upload', upload.single('profilePicture'), uploadFunction);
}