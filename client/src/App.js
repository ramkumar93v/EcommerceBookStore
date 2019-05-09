import React, { Component } from 'react';
 import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Containers/Navbar/Navbar';
import BookList from './Containers/Book-List/Book-List'
import Checkout from './Containers/Checkout/Checkout'



class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Navbar />

              <Switch>
                 <Route exact path="/" component={BookList}/>
                <Route exact path="/cart" component={Checkout}/>
              </Switch>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
