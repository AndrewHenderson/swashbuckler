var express = require('express');
var url = require('url');
var router = express.Router();
var Person = require('../schemas/persons.js');

/* GET users */
router.get('/', function(req, res) {
  var params = url.parse(req.originalUrl, true).query;
  Person.find(params, function(err, users){
    res.send(users);
  });
});

router.get('/:id', function(req, res) {
  Person.findOne({_id: req.params.id}, function(err, user){
    res.send(user);
  });
});

/* POST to Add User Service */
router.post('/phones', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Set our collection
  var collection = db.get('phones');

  // Submit to the DB
  collection.insert(req.body, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.send(doc);
    }
  });
});

module.exports = router;