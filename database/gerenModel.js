var mongoose = require('./mongoose.js');


var gerenSchema = new mongoose.Schema({
  Name: String,
  Gender: String,
  Phone: Number,
  BirthDay: Date,
  Residence: String,
  Email: String,
  PersonalWebsite: String,
  ResumeDescription: String,
  GoodSkills: String
});
var gerenModel = mongoose.model('geren', gerenSchema);
module.exports = gerenModel;
