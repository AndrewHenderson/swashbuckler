var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var collection = db.get('restaurants');
  collection.find({}, {}, function(e, docs){
    res.render('index', {
      "userlist": docs
    });
  });
});

module.exports = router;