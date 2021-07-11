const mysqlConnection = require('../configs/db_configs.js');

const getAllAdress = (req, res) => {
    var adressList = [];
    const sql = `SELECT * FROM adress`;
    mysqlConnection.query(sql, (error, result) => {
        if (error) {
            console.log(error.toString());
            return res.status(400).json({ message: error });
        }
        else {
            return res.status(200).json(result);
        }
    });
};


module.exports = {
    getAllAdress,
};