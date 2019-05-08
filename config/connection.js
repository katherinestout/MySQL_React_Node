const mysql = require('mysql');


//const db_name = 'ice_cream_DB';
/*
var db; 

if(process.env.JAWSDB_URL){
    db=mysql.createConnection(process.env.JAWSDB_URL);
} else{

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root1234!',
    database: 'ice_cream_DB'
});
};

db.connect();
*/
/*
function connection(){
    if(process.env.JAWSDB_URL){
        connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        connection = mysql.createConnection({
            host: 'localhost',
            //port: 3306,
            user: 'root',
            password: '',
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

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root1234!',
    database: 'ice_cream'
});
connection.connect();


module.exports = connection;