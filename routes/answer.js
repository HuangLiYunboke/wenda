var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
    'user' : 'vi',
    'date' : '2017-7-17',
    'content' : '福建省代理卡积分卡拉就上课了发家里空间看了世界的看法你看下你吃没吃内需，名称农民子女们，处女地块附近看到静安寺护发素觉得很费劲啊好久发货尽快哈几号放假话费卡电话费进口红酒发哈尽快发货就爱好久发货',
    'title' : '标题剪短发肯定是交付科技的刷卡即可浪费积分撒娇大家分开',
    'tag' : ['html','javascript','node.js']
  };

  res.render('answer',{user : data.user,date : data.date,content : data.content, title : data.title, tag : data.tag});
});

module.exports = router;
