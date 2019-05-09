
import * as AddressConst from '../ActionConsts/AddressConst'
import { List } from 'immutable'

 const AddressReducer=(state ={}, action) => {

 switch (action.type) {


  case AddressConst.NEW_ADDRESS:
  debugger;

   return {currentAddress:List(action.payload.data)}

   case AddressConst.GET_ADDRESS:
   debugger;

    return {addressList:List(action.payload.data)}


  default:

   return state
 }

}


export default AddressReducer
