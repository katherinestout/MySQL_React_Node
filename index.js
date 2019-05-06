const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root1234!',
    database: 'ice_cream_DB'
});

db.connect();

//cors allows us to overcome the cors error that happens with fetch
app.use(cors());

app.get('/', (req, res) => {
    res.send('Go to all /flavors')
});

//get all flavors
app.get('/flavors', (req, res) => {
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
app.get('/flavors/add', (req, res) => {
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
app.get('/flavors/delete', (req, res) => {
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
app.get('/flavors/update', (req, res) => {

    //const{type} = req.query;

    const sql = `UPDATE flavors SET type='Mint Chocolate Chip' WHERE type = 'chocolate'`;

    //http://localhost:5000/flavors/update?type=chocolate

    db.query(sql, (err, results) => {
        if(err){
            return res.send(err)
        } else {
            res.send('Sucessfully updated!');
        }

    });
});





app.listen(5000, () => console.log('Server started'));