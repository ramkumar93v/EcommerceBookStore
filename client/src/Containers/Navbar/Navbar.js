import React, { Component } from 'react';
import {connect} from 'react-redux';
 import { Link} from 'react-router-dom';
 import axios from 'axios';
 import {getCurrentUser} from '../../Action/LoggedInUserAction';
 import Login from '../../Components/Login/Login'

 class Navbar extends Component {

  constructor(props){
    super(props);

    this.state={
      cartItemNo:0
    }
  }
   componentDidMount(){

    this.props.getCurrentUser();

  }
  componentDidUpdate() {
    debugger;
    console.log(this.props.cartItemNo)
  if(this.props.cartItemNo != undefined)
    {if(this.props.cartItemNo != this.state.cartItemNo)
      this.setState({cartItemNo:this.props.cartItemNo})
      }

  }
  loginState(){
debugger;
      switch (this.props.loggedInUser) {
        case null:
        return  'Loading'

        case  false:
        return (<Login />)

        default:
         return  `Hi ${this.props.loggedInUser.name}`

      }

  }


  render() {
    let loggedUser=null


    return (
<div>
  <div id="flipkart-navbar">
      <div className="container">
          <div className="row row1">
              <ul className="largenav  pull-right">
                  <li className="upper-links"><a className="links" href="http://clashhacks.in/">HOME</a></li>
                  <li className="upper-links"><a className="links" href="https://campusbox.org/">MISSION</a></li>
                  <li className="upper-links"><a className="links" href="http://clashhacks.in/">BOOKSELLERS</a></li>
                  <li className="upper-links"><a className="links" href="http://clashhacks.in/">CATALOGUE</a></li>
                  <li className="upper-links"><a className="links" href="http://clashhacks.in/">AUTHORS</a></li>
                  <li className="upper-links"><a className="links" href="http://clashhacks.in/">CATEGORIES</a></li>
                  <li className="upper-links"><a className="links" href="http://clashhacks.in/">ABOUT US</a></li>
                  <li className="upper-links"><a className="links" href="http://clashhacks.in/">EVENTS</a></li>
                  <li className="upper-links"><a className="links" href="http://clashhacks.in/">FAQ</a></li>
                  <li className="upper-links"><a className="links" href="http://clashhacks.in/">CONTACT US</a></li>
                  <li className="upper-links"><a className="links" href="http://clashhacks.in/">MY ACCOUNT</a></li>
                  <li className="upper-links">
                  <Link to="/cart" activeClassName="active"><i className="fa fa-2x fa-shopping-cart"  style={{color: 'white'}}></i></Link>
                             <span id="cart-badge" className="badge badge-warning">{this.state.cartItemNo}</span>
                  </li>
                {/*  <li className="upper-links dropdown"><a className="links" href="http://clashhacks.in/">Dropdown</a>
                      <ul className="dropdown-menu">
                          <li className="profile-li"><a className="profile-links" href="http://yazilife.com/">Link</a></li>
                          <li className="profile-li"><a className="profile-links" href="http://hacksociety.tech/">Link</a></li>
                          <li className="profile-li"><a className="profile-links" href="http://clashhacks.in/">Link</a></li>
                          <li className="profile-li"><a className="profile-links" href="http://clashhacks.in/">Link</a></li>
                          <li className="profile-li"><a className="profile-links" href="http://clashhacks.in/">Link</a></li>
                          <li className="profile-li"><a className="profile-links" href="http://clashhacks.in/">Link</a></li>
                          <li className="profile-li"><a className="profile-links" href="http://clashhacks.in/">Link</a></li>
                      </ul>
                  </li> */}
              </ul>
          </div>
          <div className="row row2">
              <div className="col-sm-2">
                {/* <h2 style={{margin:'0px'}}><span className="smallnav menu" onclick="openNav()">☰ Brand</span></h2>*/}

                    <h1 style={{margin:'-20px'}}> <a  href="#"><img src={require('../../assets/images/logo.png')} width="100px" /></a></h1>

              </div>
              <div className="flipkart-navbar-search smallsearch col-sm-8 col-xs-11">
                  <div className="row">
                      <input className="flipkart-navbar-input col-md-10 col-lg-10 col-xs-10" type=""
                      placeholder="Search for Books" name="" />
                      <button className="flipkart-navbar-button col-md-1 col-lg-1 col-xs-1">
                          <svg width="15px" height="15px">
                              <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                          </svg>
                      </button>
                  </div>
              </div>
              <div className=" col-sm-2">

              {this.loginState()}


              </div>
          </div>
      </div>
  </div>
  <div id="mySidenav" className="sidenav">
  <div className="container" style={{backgroundColor: '#2874f0', paddingTop: '10px'}}>
    <span className="sidenav-heading">Home</span>

  </div>
  <a href="http://clashhacks.in/">Link</a>
  <a href="http://clashhacks.in/">Link</a>
  <a href="http://clashhacks.in/">Link</a>
  <a href="http://clashhacks.in/">Link</a>
</div>

  </div>


    )
  }

}

const mapStateToProps = state => ({
 cartItemNo:state.CartReducer.cartNos,
 loggedInUser:state.LoggedInUserReducer
});
const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(getCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
