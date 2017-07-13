var mongoose = require('mongoose');
const url = "mongodb://mydb:";
mongoose.connect(url);

let db = mongoose.connection;

db.on("err",function(){
  console.log(err);
})
db.once("open",function(){
  console.log("connect db Ok!");
})
let Schema = mongoose.Schema;

let userShema = Schema({
  name:{type:String},
  password:{type:String}
});

module.exports.user = mongoose.model('login',userShema);
