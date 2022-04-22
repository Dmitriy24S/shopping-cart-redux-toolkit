import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../../icons";
import { removeItem } from "../../redux/cartSlice";
import "./CartItem.css";

const CartItem = ({ id, title, img, amount, price }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
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
      <div className="amount-container">
        <button className="amount-button">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-button">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
