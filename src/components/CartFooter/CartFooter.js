import { useSelector } from "react-redux";
import CartClearButton from "../CartClearButton/CartClearButton";
import "./CartFooter.css";

function CartFooter() {
  const { total } = useSelector((state) => state.cart);
  return (
    <div className="cart-footer">
      <hr />
      {/* Cart total */}
      <section className="cart-total">
        <h4>Total</h4>
        <span className="total-amount">${total.toFixed(2)}</span>
      </section>
      {/* Cart clear button */}
      <CartClearButton />
    </div>
  );
}

export default CartFooter;
