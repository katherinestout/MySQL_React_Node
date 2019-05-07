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


//serve static assets in productions
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));