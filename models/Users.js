const mongoose= require('mongoose');
const Schema= mongoose.Schema; // similar to import {Schema} from 'mongoose';
// mongoose wants the json object to be defined

const userSchema= new Schema({
  googleId:String,
  name:String,
  email:String
});

mongoose.model('users',userSchema); // collection name is the 1st prop, 2nd is schema
