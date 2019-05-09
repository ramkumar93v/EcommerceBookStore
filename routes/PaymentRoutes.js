var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectId
const PaymentService = require('../services/Payment/Payment')



module.exports=app=>{

  app.get('/api/payment', async (req, res)=>{

     PaymentService.makePayment(req,res)

  });
}
