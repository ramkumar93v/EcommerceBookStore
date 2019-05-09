var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectId
const BookCategoriesService = require('../services/BookCategories')



module.exports=app=>{

  app.get('/BookCategories', async (req, res)=>{

     BookCategoriesService.getSpecificCategoryBooks(req,res)

  });

  app.get('/images', (req, res)=>{


    A.findOne({'_id': ObjectId("5c322c5cd45cbe20a87c6463")}, function (err, results) {
      console.log(JSON.stringify(results))
      res.setHeader('content-type', results.contentType);

       res.send(results.img.buffer);
    });

  });
}
