const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../api/routes/user');
const uploadRoutes = require('../api/routes/upload');
const staticDataRoutes = require('../api/routes/static_data');

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

module.exports = function() {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(allowCrossDomain);
  userRoutes(app);
  uploadRoutes(app);
  staticDataRoutes(app);
  return app;
}