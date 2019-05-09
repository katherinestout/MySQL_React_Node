const express = require('express');
const router = express.Router();
const orm = require('../config/orm');



router.get("/flavors", function(req, res) {
    orm.selectAll(function(error, flavors) {
        if(error){
            console.log('error');
        } else {
            return res.json({
                data: flavors
            });
        }
    });
});

router.post("/flavors/add", function(req, res) {
   const {price, type} = req.query;
    orm.insertOne(type, price, function(error){
        if(error){
            return res.status(401).json({
                message: 'sorry not able to add flavor'
            });
        }
        return res.json({
            type: type,
            price: price
        });
    });
});

router.put("/flavors/update", function(req, res){
    const {id} = req.query;
    orm.updateOne(id, function(error){
        if(error){
            return res.send("sorry not able to update");
        }
        return res.send("sucessfully updated!");
    });
});

router.delete("/flavors/delete", function(req, res){
    const{id} = req.query;
    orm.deleteOne(id, function(error){
        if(error){
            return res.send("sorry not able to delete");
        }
        return res.send("sucessfully deleted!");
    });

});

module.exports = router;