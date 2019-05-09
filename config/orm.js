const connection = require('./connection');

const orm = {
    selectAll: function (cb){
        connection.query("SELECT * FROM flavors", function(err, data){
            if(err) cb(err, null);
               cb(null, data);
        });
    },

    insertOne: function( type, price, cb){
                const sqlQuery = `INSERT INTO flavors(type, price) VALUES('${type}', ${price})`;
                connection.query(sqlQuery, function(err, data){
                    if(err) cb(err, null);
                    cb(null, data);
        
                });
    },

    updateOne: function(id, cb){
        const sqlQuery = `UPDATE flavors SET type='Mint Chocolate Chip' WHERE id = '${id}'`;
        connection.query(sqlQuery, function(err, data){
            if(err) cb(err, null);
            cb(null, data);
        });

    }
}


    //delete one
    //update one


module.exports = orm;