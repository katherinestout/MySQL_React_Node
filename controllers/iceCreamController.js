const express = require('express');
const mysql = require('mysql');

let router = express.Router();

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

//get all flavors
router.get('/flavors', (req, res) => {
    const sql = 'SELECT * FROM flavors';

    db.query(sql, (err, results) => {
        if(err){
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    });
});

//add a flavor
router.post('/flavors/add', (req, res) => {
    const {type, price} = req.query;

const sql = `INSERT INTO flavors(type, price) VALUES('${type}', '${price}')`;
//http://localhost:5000/flavors/add?type=pea&price=1
    db.query(sql, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
        res.send('Sucessfully added!');
        }
    });
    
});

//delete a flavor
router.delete('/flavors/delete', (req, res) => {
    const {id} = req.query;

    const sql =     `DELETE FROM flavors WHERE id = '${id}'`;
//http://localhost:5000/flavors/delete?id=4
    db.query(sql, (err, results) => {
        if(err){
            return res.send(err)
        } else {
            res.send('Sucessfully deleted!');
        }
    });

});

//update a flavor
router.put('/flavors/update', (req, res) => {

  const{id} = req.query;

    const sql = `UPDATE flavors SET type='Mint Chocolate Chip' WHERE id = '${id}'`;

    //http://localhost:5000/flavors/update?type=7

    db.query(sql, (err, results) => {
        if(err){
            return res.send(err)
        } else {
            res.send('Sucessfully updated!');
        }

    });
});


module.exports = router;