var express = require('express');
var router = express.Router();
var ques = require('../database/queModel.js');

router.get('/',function(req,res,next){
  res.render('question');
});
router.post('/',function(req,res){

  var data = req.body;
  console.log(data);
  var m = new ques();
  m.title = data.title;
  m.content = data.content;
  m.tag = data.tag;
  m.time = data.time;
  m.watch = data.watch;
  m.reward = data.reward;
  m.save(function(err,doc){
    if (err){
      console.log(err);
    }else {
      console.log("ajsdgfjasg");
    }
  });

});

module.exports = router;
