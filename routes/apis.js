var express = require('express');
var router = express.Router();
var dbquestlist = require('../database/queModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({name: 'abc', id: 'id'});
});


router.route('/list')
.get(function(req, res){
  dbquestlist.find({}, function(err, data){
    res.json(data);
  })
})

module.exports = router;
