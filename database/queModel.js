var mongoose = require('./mongoose.js');



var queSchema = new mongoose.Schema({
  name : String,
  title:{type:String},
  content:{type:String},
  tag : Array,
  reward : {type:Number,default:0},
  time : Date,
  watch : Number,
  follow : {type:Number,default:0},
  slove : {type:Boolean,default:false}
});

var queModel = mongoose.model('questions', queSchema);
module.exports = queModel;
