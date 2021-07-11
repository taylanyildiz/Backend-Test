const configs = require('./configs.js');
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: configs.mysql.host,
    port: configs.mysql.port,
    user: configs.mysql.username,
    password: configs.mysql.password,
    database: configs.mysql.dbname,
});

mysqlConnection.connect((err) => {
    if (err) console.log(err.toString());
    else console.log('MySQL server is running!!');
});

module.exports = mysqlConnection;