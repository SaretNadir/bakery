var express = require("express");
var mongojs = require("mongojs");

var router = express.Router();
var db = mongojs('bakerydb', ['sizes']);

router.post("/api/size", function (req, res) {
    console.log(req.body);

    db.sizes.insert(req.body, function (err, result) {
        res.json(result);
    });
});

router.get('/api/sizes', function(req, res) {
   db.sizes.find({}, function(err, result){
        res.json(result);
   });
});

module.exports = router;