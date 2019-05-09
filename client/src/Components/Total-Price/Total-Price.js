import React from "react";

const TotalPrice = props => {
  let totalPrice = 0;
  let displayShipping = 0;

  props.ttl.map((item, index) => {
    let price = item.nos * item.price;
    totalPrice += price;
  });

  if (totalPrice < 500) displayShipping = 500;

  return (
    <div className="subtotal cf">
      <ul>
        <li className="totalRow">
          <span className="label">Subtotal</span>
          <span className="value">{totalPrice}</span>
        </li>

        <li className="totalRow ">
          <span className="label">Shipping</span>
          <span className="value">{displayShipping}</span>
        </li>

        <li className="totalRow final">
          <span className="label">Total</span>
          <span className="value">Rs. {totalPrice + displayShipping}</span>
        </li>
        <li className="totalRow">
          <button
            onClick={() => props.makePayment()}
            className="btn btn-success"
          >
            Checkout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TotalPrice;
