const mongoose= require('mongoose');
const Schema= mongoose.Schema;


const bookSchema= new Schema({
   id:Number,
   name: String,
   bookTypeId: { type: Schema.Types.ObjectId, ref: 'bookTypes' },
   price: String,
   discount: String,
   authorId: { type: Schema.Types.ObjectId, ref: 'author' }
});

mongoose.model('books',bookSchema);
