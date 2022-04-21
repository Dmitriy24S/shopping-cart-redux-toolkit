import React from "react";
import { CartIcon } from "../../icons";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <h1>Redux Toolkit</h1>
        </div>
        <div className="nav-cart-container" style={{ width: "30px" }}>
          <CartIcon className="cart-icon" />
          <div className="nav-cart-amount">{amount}</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
