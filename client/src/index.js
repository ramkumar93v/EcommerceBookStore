import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './Store/Store';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import 'bootstrap3/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
 <Provider store={configureStore()}>
  <App />
 </Provider>,
 document.getElementById('root')
);
serviceWorker.register();
