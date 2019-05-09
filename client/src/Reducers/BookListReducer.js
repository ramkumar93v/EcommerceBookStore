
import * as BookConsts from '../ActionConsts/BookListActionConst'
import { List } from 'immutable'

 const BookListReducer=(state = [], action) => {

 switch (action.type) {


  case BookConsts.BOOK_LIST:

   return List(action.payload.data);


  default:

   return state
 }

}


export default BookListReducer
