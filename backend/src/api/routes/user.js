const userController = require('../controllers/user');

module.exports = function(app) {
  app.post('/api/users', userController.createUser);
  app.get('/api/users', userController.getAllUsers);
  app.get('/api/users/:id', userController.getUserById);
}