
var mongoose = require('mongoose');
require('../../models/Books');
var book = mongoose.model('books');



let BookCategories ={


  getSpecificCategoryBooks :async (req,res) => {

  let books = await book.find({ bookTypeId: '5c32210be7179a7d123fe09d' })

  /*let books  = await book.aggregate([
      {
        $lookup:{
          from:"bookImages",
          localField:"_id",
          foreignField:"bookId",
          as:"book_images"
        }
      },
      {$unwind:"$book_images"},
      {
        $project:{
          id:1,
          name: 1,
          bookTypeId: 1,
          price: 1,
          discount: 1,
          authorId: 1,
          data:"$book_images.img",
          contentType:"$book_images.contentType"
        }
      }
  ])*/


  if(books.length > 1) res.send(books)
  else res.send([books])

  }

}

module.exports  = BookCategories
