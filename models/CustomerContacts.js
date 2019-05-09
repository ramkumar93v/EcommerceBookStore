const mongoose= require('mongoose');
const Schema= mongoose.Schema;


const customerContactsSchema= new Schema({
   firstName: String,
   lastName:String,
   mobile:Number,
   address1:String,
   address2:String,
   city:String,
   state:String,
   zipCode:Number,
   cutomerId: { type: Schema.Types.ObjectId, ref: 'users' }
});

mongoose.model('customerContacts',customerContactsSchema);
