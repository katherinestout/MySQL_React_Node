const connection = require('./connection');

const orm = {
    selectAll: function (cb){
        connection.query("SELECT * FROM flavors", function(err, data){
            if(err) cb(err, null);
               cb(null, data);
        });
    },

    insertOne: function( type, price, cb){
        //burgerName= type price
                const sqlQuery = `INSERT INTO flavors(type, price) VALUES('${type}', ${price})`;
                connection.query(sqlQuery, function(err, data){
                    if(err) cb(err, null);
                    cb(null, data);
        
                });
        
            

    }

}


    //selectall

    //insert one
    //delete one
    //update one


module.exports = orm;