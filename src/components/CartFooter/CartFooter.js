import CartClearButton from "../CartClearButton/CartClearButton";
import "./CartFooter.css";

function CartFooter() {
  return (
    <div className="cart-footer">
      <hr />
      {/* Cart total */}
      <section className="cart-total">
        <h4>Total</h4>
        <span className="total-amount"> $329.99</span>
      </section>
      {/* Cart clear button */}
      <CartClearButton />
    </div>
  );
}

export default CartFooter;
