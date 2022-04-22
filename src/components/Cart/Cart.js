import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import CartFooter from "../CartFooter/CartFooter";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, amount, isLoading } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <main>
        <section className="cart">
          <div className="empty-cart-text-container">
            <h1 className="cart-title">Your Bag</h1>
            <p className="empty-cart-text">is currently empty</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="cart">
        <h1 className="cart-title">Your Bag</h1>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <CartFooter />
      </section>
    </main>
  );
};

export default Cart;
