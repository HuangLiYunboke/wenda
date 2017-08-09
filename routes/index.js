var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var queModel = require("../database/queModel.js");
var salt = 10;
var userModel = require('../database/userModel.js');
router.get('/', function(req, res, next) {
  if(req.session.name === undefined){
    req.session.name = null;
  }

    queModel.find({}).sort({"watch":-1}).exec(function(err,data){
      console.log(data);

      res.render('index', {title: '问答',name: req.session.name,data:data});
    });
});

router.get("/hot_question",function(req,res,next){
  if(req.session.name === undefined){
    req.session.name = null;
  }
  queModel.find({}).sort({"reward":-1}).exec(function(err,data){
    res.render('index', {title: '问答',name: req.session.name,data:data});
  });
});



router.get("/logout",function(req,res){
	req.session.name = null;
	res.redirect("/");
});

router.get('/one',function(req,res){
  res.render(error);
});
module.exports = router;
