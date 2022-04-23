import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../../icons";
import { removeItem, increment, decrement } from "../../redux/cartSlice";
import "./CartItem.css";

const CartItem = ({ id, title, img, amount, price }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      {/* Cart left side */}
      <img src={img} alt="" className="cart-item-img" />
      <div className="cart-item-info">
        <h2 className="cart-item-title">{title}</h2>
        <div className="cart-item-price">
          <p>${price}</p>
        </div>
        <button
          className="remove-button"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
      {/* Cart right side - item amount */}
      <div className="amount-container">
        <button
          className="amount-button"
          onClick={() => dispatch(increment(id))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-button"
          onClick={() => dispatch(decrement(id))}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
