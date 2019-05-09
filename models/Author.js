const mongoose= require('mongoose');
const Schema= mongoose.Schema;


const authorSchema= new Schema({
  id:Number,
  name:String,
  bookTypes:[{ type: Schema.Types.ObjectId, ref: 'bookTypes' }]
});

mongoose.model('author',authorSchema);
