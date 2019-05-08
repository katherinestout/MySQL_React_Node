const connection = require('./connection');

const orm = {
    selectAll: function (cb){
        connection.query("SELECT * FROM flavors", function(err, data){
            if(err) cb(err, null);
               cb(null, data);
        });
    }
};


    //selectall

    //insert one
    //delete one
    //update one


module.exports = orm;