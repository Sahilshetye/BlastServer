var express = require('express');
var router = express.Router();
var mongodb= require('mongodb').MongoClient;
/* GET users listing. */


router.get('/', function(req, res, next) {
  var url =
      'mongodb://localhost:27017/Stock'
  // mongodb.connect(url,functions( err, db){
  //
  //   var collection= db.collection('user');
  //
  //
  //   });
  res.send('inserting the User');
});

module.exports = router;
