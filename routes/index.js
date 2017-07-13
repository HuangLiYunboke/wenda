var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.name);
  if(typeof(req.session.name) === "undefined"){
    req.session.name = null;
  }
  console.log(req.session.name);
  res.render('index', { title: 'Express' ,name:req.session.name });
});


=======

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'afasdfdsfdsfdsfdsfdsfdsfdsfd' });
});

>>>>>>> 377ab3f095f82d2ad1fb5e2df74b77b9205ee8cd
module.exports = router;
