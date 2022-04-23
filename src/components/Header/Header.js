import React from "react";
import { CartIcon } from "../../icons";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);

  const restartPage = () => {
    window.location.reload();
  };

  return (
    <header>
      <nav>
        {/* nav left side - logo */}
        <div className="nav-logo" onClick={restartPage}>
          <h1>Redux Toolkit</h1>
        </div>
        {/* nav right side - cart info */}
        <div className="nav-cart-container" style={{ width: "30px" }}>
          <CartIcon className="cart-icon" />
          <div className="nav-cart-amount">{amount}</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
