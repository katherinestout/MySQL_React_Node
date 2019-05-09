const mysql = require('mysql');
/*
const db_name = 'ice_cream';

function connection(){
    if(process.env.JAWSDB_URL){
        connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'Root1234!',
            database: db_name
        });
    }
    this.connection.connect(function(err){
        if(err){
            console.log("error connectig to db" + err.stack);
            return;
        }
        console.log("connected to db");
    });
}*/
let connection; 

if(process.env.JAWSDB_URL) {
    connection= mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'ice_cream'
    });
}

connection.connect();


module.exports = connection;