var mongoose = require('mongoose');
const AddressService = require('../services/Address')



module.exports=app=>{

  app.post('/address/add', async (req, res)=>{

     AddressService.addAddress(req,res)

  });

  app.get('/address/getAddress', async (req, res)=>{

     AddressService.getAddress(req,res)

  });

}
