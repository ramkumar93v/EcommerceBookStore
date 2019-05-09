const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectId
require("../../models/CustomerContacts");
const customerContacts = mongoose.model("customerContacts");

let Address = {
  addAddress: async (req, res) => {
    console.log(req.user)
    let cutomerId={customerId:ObjectId(req.user._id)}
    let newAddress= {...req.body, ...cutomerId}
    console.log(newAddress)
    const addressObj =await  new customerContacts(newAddress).save();

    res.send(addressObj)
  },
  getAddress: async (req, res) => {

      let addressList = await customerContacts.find({ customerId: ObjectId(req.user._id) })

    res.send(addressList)
  }
};

module.exports = Address;
