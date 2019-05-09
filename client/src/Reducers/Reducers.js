import { combineReducers } from 'redux'
import { reducer as FormRedcer} from 'redux-form'
import BookListReducer from './BookListReducer'
import CartReducer from './CartReducer'
import LoggedInUserReducer from './LoggedInUserReducer'
import AddressReducer from './AddressReducer'

export default combineReducers({
  form:FormRedcer,
  BookListReducer,
  CartReducer,
  LoggedInUserReducer,
  AddressReducer

});
