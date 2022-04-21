import cartItemsData from "../../data/cartItemsData";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import CartFooter from "../CartFooter/CartFooter";

const Cart = () => {
  return (
    <section className="cart">
      <h1 className="cart-title">Your Bag</h1>
      {cartItemsData.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <CartFooter />
    </section>
  );
};

export default Cart;
