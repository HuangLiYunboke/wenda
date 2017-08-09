var express = require('express');
var router = express.Router();
var dbquestlist = require('../database/queModel');
// var users = require('../database/tests.js');
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

// android register


router.route('/gerenpost')
	.post(function(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		console.log(req.body);
		console.log(req.body.name);
		console.log(req.body.password);

		var password = req.body.password;


		bcrypt.hash(password, salt, (err, hash) => {
			var user = new users({
				name: req.body.name,
				password: hash
			})
		})

		user.save((err, data) => {

			res.json({
				sgn: '注册成功'
			})
		})

	})

module.exports = router;
