import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import rootReducer from '../Reducers/Reducers';


export default function configureStore(initialState={}) {
 return createStore(
     rootReducer,
   applyMiddleware(thunk,ReduxPromise)
 );
}
