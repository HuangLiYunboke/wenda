var express = require('express');
var router = express.Router();
var ques = require('../database/queModel.js');

router.get('/',function(req,res,next){
  res.render('question');
});
router.post('/question',function(req,res){
  console.log("12321");

  var data = req.body;
  console.log(data);
  var m = new ques();
  m.title = data.title;
  m.content = data.content;
  m.tag = data.tag;
  m.time = data.time;
  m.reward = data.reward;
  m.save(function(err,doc){
    if (err){
      console.log(err);
    }else {
      console.log("ajsdgfjasg");
      res.redirect('/question/a');
    }
  });

});
router.get('/a',function(req,res){
  res.render('index');
});

module.exports = router;
