const mongoose = require('mongoose')

module.exports = function () {
  let userSchema = mongoose.Schema({
    displayName: {
      type: String,
      required: true,
      maxlength: 256
    },
    realName: {
      type: String,
      required: true,
      select: false,
      maxlength: 256
    },
    profilePicture: {
      type: String
    },
    birthday: {
      type: Date,
      required: true
    },
    gender: {
      type: Map,
      required: true
    },
    ethnicity: {
    },
    religion: {
    },
    height: {
    },
    figure: {
    },
    maritalStatus: { 
      type: Map,
      required: true,
      select: false
    },
    occupation: {
      type: String,
      select: false,
      maxlength: 256
    },
    aboutMe: {
      type: String,
      maxlength: 5000
    },
    location: {
      type: Map,
      required: true
    }
  });
  return mongoose.model('user', userSchema)
}()