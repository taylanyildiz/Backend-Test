const mysqlConnection = require('../configs/db_configs.js');

const addUser = (req, res) => {
    const sql = `INSERT INTO adress`
    mysqlConnection.query(sql, (error, response) => { 
        
    });
}

module.exports = { addUser };