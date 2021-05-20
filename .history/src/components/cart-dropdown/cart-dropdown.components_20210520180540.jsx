import React from "react";
import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "./../cart-item/cart-item.component";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{}</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cartItem: { currentUser } }) => ({
  currentUser,
});

export default connect()(CartDropdown);
