var express = require('express');
var url = require('url');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Swashbuckler' });
});

router.get('/phones', function(req, res) {
  var params = url.parse(req.originalUrl, true).query;
  req.db.get('phones').find(params, {}, function(e, docs){
    res.send(docs);
  });
});

router.get('/phones/:id', function(req, res) {
  req.db.get('phones').find(req.params, {}, function(e, docs){
    res.send(docs[0]);
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
