import cartItemsData from "../../Data/cartItemsData";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  return (
    <section className="cart">
      {cartItemsData.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Cart;
