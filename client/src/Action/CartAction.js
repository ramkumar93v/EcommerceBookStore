import axios from 'axios';
import * as CartConst from '../ActionConsts/CartActionConst'

   export const cartAction = (book) =>  dispatch=>{
     

       dispatch({ type:CartConst.CART_ACTION, payload: book})

      }
