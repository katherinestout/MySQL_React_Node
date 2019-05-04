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

app.use(cors());
/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
});
*/
app.get('/', (req, res) => {
    res.send('Go to all /flavors')
});

//get all product
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

//add
app.get('/flavors/add', (req, res) => {
    const {type, price} = req.query;

const sql = `INSERT INTO flavors(type, price) VALUES('${type}', '${price}')`;
//http://localhost:5000/flavors/add?type=pea&price=1
    db.query(sql, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
        res.send('Sucessfully added');
        }
    });
    
});


app.listen(5000, () => console.log('Server started'));