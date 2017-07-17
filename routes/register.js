var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var salt = 10;
var userModel = require('../database/userModel.js');
var gerenModel = require('../database/gerenModel.js');

router.get('/', function(req, res, next) {
  res.render('register', {title: '问答',name: ''});
});


router.post('/', (req, res) => {
  var uname = req.body.name;
  var unname = req.body.nname;
  var upwd = req.body.password;

  userModel.findOne({name: uname}, (err, doc) => {
    if (err) {
      console.log(err);
    } else if (doc) {
      console.log('账号已存在');
      res.redirect("/register");
    } else {
      var gerenId;
      var geren = new gerenModel({
        Name: '',
        Gender: '',
        Phone: 0,
        BirthDay: 2000/01/01,
        Residence: '',
        Email: '',
        PersonalWebsite:'',
        ResumeDescription: '',
        GoodSkills: ''
      });
      geren.save((err, data) => {
        gerenId = data._id;
        // console.log('time',gerenId.getTimestamp());
      });

      bcrypt.hash(upwd, salt, (err, hash) => {
        var newuser = new userModel({
          name: uname,
          nname: unname,
          password: hash,
          geren: gerenId
        });
        newuser.save((err, data) => {
            res.redirect('/login');
        });
        console.log('注册成功');
      });
    }
  });
});




















module.exports = router;
