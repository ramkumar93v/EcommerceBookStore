const mongoose= require('mongoose');
const Schema= mongoose.Schema;


const bookTypeSchema= new Schema({
  description:String,
   contentType: String,
   size: Number,
   bookId: { type: Schema.Types.ObjectId, ref: 'books' },
   img: Buffer
});

mongoose.model('bookImages',bookTypeSchema);
