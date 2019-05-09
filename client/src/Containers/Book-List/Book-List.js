import React, { Component } from 'react';
import {connect} from 'react-redux';
import BookListItem from '../../Components/Book-List-Item/Book-List-Item'
import {getBookListbyCategory} from '../../Action/BookListAction';
import {cartAction} from '../../Action/CartAction';

class BookList extends Component {

  componentDidMount() {

    this.getBooksByCategory();
  }

  getBooksByCategory() {
     this.props.getBooksByCategoryAction();
  }
  addItemtoCart=(book)=>{
    debugger;
    this.props.addItem(book);
  }

  quickSearch=(val)=>{
debugger;
  }

  render() {
    console.log('bbokkkk list')

    let bookItem=null
    if (this.props.BookListReducer){


    bookItem= this.props.BookListReducer.map((book,index)=>{

        return (
                <BookListItem
                  key={book.id}
                  quickSearch={this.quickSearch}
                  addItemtoCart={this.addItemtoCart}
                  {...book}
                  />
            )

      })
    }



    return (


      <div className="container">
   <div className="row">
      <div className="col col-sm-9 col-xs-6">
         <h2>Devotional</h2>
         <div className="row">
            {bookItem}
         </div>
      </div>
   </div>
</div>




    )

  }

}


const mapStateToProps = state => ({
 BookListReducer:state.BookListReducer
});
const mapDispatchToProps = dispatch => ({
getBooksByCategoryAction: () => dispatch(getBookListbyCategory()),
addItem:(book)=> dispatch(cartAction(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
