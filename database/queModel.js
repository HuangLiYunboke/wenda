var mongoose = require('./mongoose.js');



var queSchema = new mongoose.Schema({
  title:{type:String},
  content:{type:String},
  tag : Array,
  reward : Number,
  time : Date,
  follow : {type:Number,default:0},
  slove : {type:Boolean,default:false}
});

var queModel = mongoose.model('ques', queSchema);
module.exports = queModel;
