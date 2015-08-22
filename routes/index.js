var express = require('express');
var router = express.Router();

var qs_to_json = function(string) {
  // Modified: http://stackoverflow.com/revisions/5362723/2
  var validString = string.indexOf('?') >= 0;
  if ( !validString ) {
    console.dir('String does not contain a query');
    return;
  }
  var qStr = string.replace(/(.*?\?)/, '');
  var qArr = qStr.split('&');
  var stack = {};

  for (var i in qArr) {
    var a = qArr[i].split('=');
    var name = a[0],
      value = (isNaN(a[1]) ? a[1] : parseFloat(a[1])).split('/')[0];
    if (name.match(/(.*?)\[(.*?)]/)) {
      name = RegExp.$1;
      var name2 = RegExp.$2;
      if (name2) {
        if (!(name in stack)) {
          stack[name] = {};
        }
        stack[name][name2] = value;
      } else {
        if (!(name in stack)) {
          stack[name] = [];
        }
        stack[name].push(value);
      }
    } else {
      stack[name] = value;
    }
  }
  return stack;
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Swashbuckler' });
});

router.get('/phones', function(req, res) {
  var params = qs_to_json(req.originalUrl);
  req.db.get('phones').find(params, {}, function(e, docs){
    res.send(docs);
  });
});

router.get('/phones/:id', function(req, res) {
  console.dir(req.params);
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
