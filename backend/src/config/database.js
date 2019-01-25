let mongoose = require('mongoose');

module.exports = function (uri) {
  const options = { 
    useCreateIndex: true,
    useNewUrlParser: true
  };
  mongoose.connect(uri, options);
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