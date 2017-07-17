var express = require('express');
var router = express.Router();
var gerenModel = require('../database/gerenModel');
var salt = 10;
var moment = require('moment');
// var bcrypt = require('bcrypt');

router.get('/',function (req,res,next) {
	// res.render('gern');
	console.log('req.session:',req.session);
	console.log('gerenModel:',gerenModel);
	gerenModel.find({
		_id:req.session.gerenId
		},function(err,data){
			if(err)console.log('用户更新数据失败');
			console.log(data);
			console.log(data[0].Name);
			console.log(data[0].Phone);
			var dat=moment(data[0].BirthDay).format('YYYY-MM-DD');
			console.log("dat:"+dat);
			res.render('geren',{
				name:data[0].Name,
				gender:data[0].Gender,
				phone:data[0].Phone,
				birthDay:dat,
				residence:data[0].Residence,
				email:data[0].Email,
				personalWebsite:data[0].PersonalWebsite,
				resumeDescription:data[0].ResumeDescription,
				roodSkills:data[0].GoodSkills
			});
		})
	
	
})


//对个人信息的编辑
router.post('/geren_wone',function(req,res,next){
	 console.log('req.session.gerenId:',req.session.gerenId);
	 gerenModel.update(
	 	{
	 	 	_id:req.session.gerenId
	 	 	// _id:'596c255dfe08be0f0d6d5f77'
	 	},{
	 		$set:{

				//真实姓名
				Name:req.body.name,
				// 性别
				Gender:req.body.gender,
				// 年龄
				// Gender:req.body.gender,
				// 手机号码
				Phone: req.body.phone,
				// 出生日期
				BirthDay:req.body.birthday,
				// 居住地
				Residence:req.body.residence,
				// email
				Email:req.body.email,
				// 个人网站
				// PersonalWebsite:req.body.personalWebsite,
				// 履历说明
				ResumeDescription:req.body.resumeDescription,
				// 擅长技术
				GoodSkills:req.body.goodSkills
		

			}
		},function(err){
			if(err)res.send('gr更新失败');
			res.redirect('/geren');
			
 		

 		 
	// ger.save(function(err,data){
	// 	if(err)console.log('save err !!--------------');
	// 	res.redirect('/geren');
	// 	// res.render('geren');
	// })
	})
})
//个人信息之公司
router.post('/geren_wtwo',function(req,res,next){

	console.log(data);

	gerenModel.update(
		{
			_id:req.session.gerenId
		},{
			$set:{
		
				// 公司
				Company:req.body.company,
				//职位
				JobTitle:req.body.jobTitle,
				// 入职时间
				InductionTime:req.body.inductionTime,
				//先在职否
				OnJob:req.body.onJob,
				//离职时间
				DepartureTime:req.body.departureTime,
				//相关技术
				CompRelatedTechnology:req.body.compRelatedTechnology,
				//职位描述
				JobDescription:req.body.jobDescription


			}
		},function(err){
			if(err)res.send('gs更新失败');
			res.redirect('/geren');
		})
	// gos.save(function(err,data){
	// 	if(err)console.log('save err !!--------------');
	// 	res.redirect('/geren');
	// })
})

// 个人信息之开源项目
router.post('/geren_wtre',function(req,res,next){
		gerenModel.update(
		{
				_id:req.session.gerenId
		},{
			$set:{
				//项目名
				ProjectName:req.body.projectName,
				//项目网址
				ProjectURL:req.body.projectURL,
				//起止时间
				ProjectStartingTime:req.body.projectStartingTime,
				//是否结束
				IsOver:req.body.isOver,
				//依旧在维护 先时间
				MaintainTime:req.body.maintainTime,
				// 项目角色
				ProjectRoles:req.body.projectRoles,
				// 相关技术
				ProjectRelatedTechnolog:req.body.projectRelatedTechnology,
				// 项目描述
				ProjectDescription:req.body.projectDescription

			}
		},function(err){
			if(err)res.send('xm更新失败');
			res.redirect('/geren');
		})
	// xam.save(function(err,data){
	// 	if(err)console.log('save err !!--------------');
	// 	res.redirect('/geren');
	// })
})

// 个人信息之教育经历
router.post('/geren_wfor',function(req,res,next){

	db.EducationalExperience.update(
		{
			_id:req.session.gerenId
			// _id:ObjectId('596c255dfe08be0f0d6d5f77')
		},{
			$set:{
				// 院校
				Colleges:req.body.colleges,
				// 所属专业
				Major:req.body.major,
				// 起止时间
				EducationStartingTime:req.body.educationStartingTime,
				// 是否在就读
				IsAttendSchool:req.body.isAttendSchool,
				// 毕业时间
				GraduationTime:req.body.graduationTime,
				// 学历
				Education:req.body.education,
				// 相关技术
				EducationRelatedTechnolog:req.body.educationRelatedTechnolog,
				// 取得成就
				Achieve:req.body.achieve
			}

			
		},function(err){
			if(err)res.send('jy更新失败');
			res.redirect('/geren');
		})
	// ger.save(function(err,data){
	// 	if(err)console.log('save err !!--------------');
	// 	res.redirect('/geren');
	// })
})

// //我的主页
// router.get('/zhuye',function(req,res,next){

// })
// //我的提问
// router.get('/tiwen',function(req,res,next){

// })
// //我的收藏
// router.get('/shoucang',function(req,res,next){

// })
// // 我的笔记
// router.get('/biji',function(req,res,next){

// })
// // 我的分享
// router.get('/fenxiang',function(req,res,next){

// })
module.exports = router ;