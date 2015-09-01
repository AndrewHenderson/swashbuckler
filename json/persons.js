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

/* POST to Add User Service */
router.post('/', function(req, res) {

  var person = new Person(req.body);

  console.dir(person);

  //person.save(function (err) {
  //  console.log(err);
  //  if (err) {
  //    console.log('Bummer');
  //  } else {
  //    console.log('Hello!');
  //  }
  //});
});

router.get('/:id', function(req, res) {
  Person.findOne({_id: req.params.id}, function(err, user){
    res.send(user);
  });
});

module.exports = router;