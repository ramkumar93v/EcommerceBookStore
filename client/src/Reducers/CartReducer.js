import * as CartConst from '../ActionConsts/CartActionConst'
import { List } from 'immutable'
import _ from 'lodash'

 const CartReducer=(state = {}, action) => {


 switch (action.type) {

   case CartConst.CART_ACTION:
     debugger;
     let book={...action.payload, nos:1}


     let totalItems=0
     if(state['cartItems'] != undefined){
       let books=[...state['cartItems']]
     let index=_.findIndex(books, { id:  book.id})

     if(index >= 0){
        books[index].nos += 1
        state['cartItems']=[...books]
        state['cartNos']+=1
        return {...state}
     }else{

          totalItems = state['cartNos']
          totalItems +=book.nos
       return  {'cartItems':[...state['cartItems'], book], 'cartNos':totalItems}
     }
   }
      else{
        if(  state['cartNos']){
           totalItems = state['cartNos']
           totalItems += totalItems
        }
        else totalItems +=book.nos
        return  {'cartItems':[...state, book], 'cartNos':totalItems}
      }

  default:

   return state
 }

 /*calculateCart(state){

   if(state['cartNos']){
      totalItems = state['cartNos']
      totalItems += totalItems
   }
   else totalItems +=book.nos

   return {'cartItems':[...state, book], 'cartNos':totalItems}

 }*/

}


export default CartReducer
