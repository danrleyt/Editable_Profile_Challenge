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
    marital_status: req.body.marital_status,
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
    console.log(createUserError);
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

module.exports.getUserById = async function (req, res) {
  try {
    const select = 'realName marital_status occupation'
    const user = await User.findById(req.params.id).select(req.params.edit ? select : '');
    res.status(200).json(user);
  } catch (getUserError) {
    res.status(500).json({
      errorCode: 500,
      message: "An error occurred while getting user's profiles",
      error: getUserError
    })
  }
}

module.exports.editUserProfile = async function (req, res) {
  try {
    const id = req.params.id;
    const newUser = req.body;
    const updatedUser = await User.findOneAndUpdate({ _id: id }, newUser);
    res.status(200).send(updatedUser);
  } catch (editUserError) {
    res.status(500).json({
      errorCode: 500,
      message: "An error occurred while updating user's profiles",
      error: editUserError
    })
  }
}