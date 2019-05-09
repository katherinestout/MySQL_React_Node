const express = require('express');
const cors = require('cors');
const routes = require('./controllers/iceCreamController');

const app = express();
//mysql://hp1d4bs50rec9cvm:iyzgy4bg5948j7ot@d13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/vocey8ju3mwo0yu6
/*  host: 'localhost',
    user: 'root',
    password: 'Root1234!',
    database: 'ice_cream_DB'
    */


//cors allows us to overcome the cors error that happens with fetch
app.use(cors());

//routing
app.use(routes);

//serve static assets in productions
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('my-app/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'my-app', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));