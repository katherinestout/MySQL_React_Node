const connection = require('./connection');

const orm = {
    //get all 
    //"/flavors"
    selectAll: function (cb){
        connection.query("SELECT * FROM flavors", function(err, data){
            if(err) cb(err, null);
               cb(null, data);
        });
    },
    //add a flavor
    //"/flavors/add"
    insertOne: function( type, price, cb){
                const sqlQuery = `INSERT INTO flavors(type, price) VALUES('${type}', ${price})`;
                connection.query(sqlQuery, function(err, data){
                    if(err) cb(err, null);
                    cb(null, data);
        
                });
    },
    //change flavor name to Mint Chocolate Chip based on id
    //"/flavors/update"
    updateOne: function(id, cb){
        const sqlQuery = `UPDATE flavors SET type='Mint Chocolate Chip' WHERE id = '${id}'`;
        connection.query(sqlQuery, function(err, data){
            if(err) cb(err, null);
            cb(null, data);
        });

    },
    //delete flavor based on id
    //"/flavors/delete"
    deleteOne: function(id, cb){
        const sqlQuery = `DELETE FROM flavors WHERE id = '${id}'`;
        connection.query(sqlQuery, function(err, data){
            if(err) cb(err, null);
            cb(null, data);
        })
    }
}

module.exports = orm;