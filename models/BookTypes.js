const mongoose= require('mongoose');
const Schema= mongoose.Schema;


const bookTypeSchema= new Schema({
  id:Number,
  name:String
});

mongoose.model('bookTypes',bookTypeSchema);
