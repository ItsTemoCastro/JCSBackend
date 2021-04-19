const mysql = require("mysql");
const key = require("./keys.js");

const conn = mysql.createPool({
    host: key.database.host,
    user: key.database.user,
    password: key.database.password,
    database: key.database.database

});

conn.getConnection((err, connection) => {
    if (err)
        throw err;
    if (connection)
        connection.release();
    console.log('DB Connected Bruh');
});
module.exports = conn;

