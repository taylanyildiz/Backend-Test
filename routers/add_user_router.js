const addUserController = require('../controllers/add_user_controller.js');

module.exports = (app) => {
    const field = 'user';
    app.get(field + '/add-user',addUserController);
};