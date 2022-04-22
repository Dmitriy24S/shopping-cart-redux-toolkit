import "./CartClearButton.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";

const CartClearButton = () => {
  const dispatch = useDispatch();
  return (
    <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>
      Clear Cart
    </button>
  );
};

export default CartClearButton;
