const User = require('../models/user');

module.exports.createUser = async function (req, res) {
  let user = new User({
    displayName: req.body.displayName,
    realName: req.body.realName,
    profilePicture: req.body.profilePicture,
    birthday: req.body.birthday,
    gender: req.body.gender,
    ethnicity: req.body.ethnicity,
    religion: req.body.religion,
    height: req.body.height,
    figure: req.body.figure,
    maritalStatus: req.body.maritalStatus,
    occupation: req.body.occupation,
    aboutMe: req.body.aboutMe,
    location: req.body.location
  });

  try {
    let userSaved = await User.create(user);
    res.status(200).json(
      {
        _id: userSaved._id,
        displayName: userSaved.displayName,
        profilePicture: userSaved.profilePicture,
        birthday: userSaved.profilePicture,
        gender: userSaved.gender,
        ethnicity: userSaved.ethnicity,
        religion: userSaved.religion,
        height: userSaved.height,
        figure: userSaved.figure,
        aboutMe: userSaved.aboutMe,
        location: userSaved.location
      }
    );
  } catch (createUserError) {
    res.status(500).json({
      errorCode: 500,
      message: "An error occurred while creating your profile",
      error: createUserError
    });
  }
}

module.exports.getAllUsers = async function (req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (getAllUsersError) {
    res.status(500).json({
      errorCode: 500,
      message: "An error occurred while getting user's profiles",
      error: createUserError
    })
  }
}

module.exports.editUserProfile = async function(req, res) {
  
}