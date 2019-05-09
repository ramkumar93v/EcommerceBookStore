
import * as LoggedInUserConsts from '../ActionConsts/LoggedInUserConst'
import { Map } from 'immutable'

 const LoggedInUserReducer=(state = null, action) => {

 switch (action.type) {


  case LoggedInUserConsts.CURRENT_USER:

   return action.payload.data || false;


  default:

   return state
 }

}


export default LoggedInUserReducer
