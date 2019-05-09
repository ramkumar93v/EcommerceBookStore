import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import CheckoutItem from "../../Components/Checkout-Item/Checkout-Item"
import TotalPrice from "../../Components/Total-Price/Total-Price"
import NoItems from "../../Components/No-Items/No-Items"
import ModalPopup from '../../Components/Modal-Popup/Modal-Popup'
import AddressForm from '../Address/AddAddress'
import {getAddress} from '../../Action/AddressAction'


class Checkout extends Component {

  constructor(props) {
    super(props);
    this.state={openModal:false}
    this.openModal = this.openModal.bind(this)
  }
  componentDidMount() {

    this.getAddress();
  }

  getAddress() {
     this.props.getAddressAction();
  }
  makePayment = async () => {
    debugger;
    const payment = await axios.get(`/api/payment`);
    window.location.href = payment.data;
  };

  openModal(){

    this.setState({openModal : !this.state.openModal})
  }

  render() {
    let checkoutItem = null;
    let totalPrice = null;
    if (this.props.cartItems) {
      debugger;
      console.log("ttkdgkaskashk" + this.props.cartItems);
      totalPrice = (
        <TotalPrice makePayment={this.makePayment} ttl={this.props.cartItems} />
      );

      checkoutItem = this.props.cartItems.map((item, index) => {
        let evenClass = false;
        if (index % 2 == 0) evenClass = true;
        return <CheckoutItem key={item.id} evenClass={evenClass} {...item} />;
      });
    }

    return (
      <div className="wrap cf">
        {/*<h1 className="projTitle">Responsive Table<span>-Less</span> Shopping Cart</h1>*/}
        <div className="heading cf">
        <div className="col-md-6">
          <h1>My Cart</h1>
        </div>
        <div className="col-md-2 col-md-offset-4">
          <button type="button" onClick={this.openModal} className="btn btn-primary btn-sm">
            <span className="glyphicon glyphicon-share-alt"></span> Add New Address
          </button>
        </div>
        </div>
        <div className="cart">
          {/*<h2 style={{ display: (this.props.cartItems ? 'none' : 'block') }}> Please add Items </h2>*/}
          {!this.props.cartItems ? <NoItems /> : null}
          <ul className="cartWrap">{checkoutItem}</ul>
        </div>

        {/*<div className="promoCode"><label>Have A Promo Code?</label><input type="text" name="promo" placholder="Enter Code" />
  <a href="#" className="btn"></a></div>
   */}
        {totalPrice}
          {this.state.openModal ?
           <ModalPopup title="Add New Address" closeModal= {this.openModal}
          footer="false"> <AddressForm /> </ModalPopup> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.CartReducer.cartItems
});
const mapDispatchToProps = dispatch => ({
getAddressAction: () => dispatch(getAddress()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
