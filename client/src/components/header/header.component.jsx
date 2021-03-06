import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { selectCartHidden } from "./../../redux/cart/cart.selectors";
import { signOutStart } from "./../../redux/user/user.actions";
import { selectCurrentUser } from "./../../redux/user/user.selectors";
import CartDropdown from "./../cart-dropdown/cart-dropdown.components";
import CartIcon from "./../cart-icon/cart-icon.component";
import "./header.styles.scss";

const Header = (props) => {
  const { currentUser, hidden, signOutStart } = props;
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
