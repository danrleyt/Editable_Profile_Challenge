let mongoose = require('mongoose');

module.exports = function (uri) {
  mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true
  });
  mongoose.connection.on('connected', function() {
    console.log('MongoDB Connected');
  });
  mongoose.connection.on('disconnected', function() {
    console.log('MongoDB Disconnected');
  });
  mongoose.connection.on('error', function(error) {
    console.log('Error on connection \n', error);
  })
  mongoose.set('debug',true);
}