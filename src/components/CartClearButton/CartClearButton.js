import "./CartClearButton.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modalSlice";

const CartClearButton = () => {
  const dispatch = useDispatch();
  return (
    <button className="clear-cart-button" onClick={() => dispatch(openModal())}>
      Clear Cart
    </button>
  );
};

export default CartClearButton;
