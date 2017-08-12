var express = require("express");
var mongojs = require('mongojs');

var router = express.Router();
var db = mongojs('bakerydb', ['products']);

router.post("/api/product", function (req, res) {
    console.log(req.body);

    db.products.insert(req.body, function (err, result) {
        res.json(result);
    });
});

router.get('/api/products', function(req, res) {
   db.products.find({}, function(err, result){
        res.json(result);
   });
});

module.exports = router;