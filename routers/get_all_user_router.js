const adressController = require('../controllers/get_all_adress_controller.js');
module.exports = function (app) {
    const field = '/adress';
    app.get(field+'/get-all-adress',adressController.getAllAdress);
}