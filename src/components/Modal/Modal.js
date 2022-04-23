import "./Modal.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import { clearCart } from "../../redux/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <section className="modal">
        {/* Modal shadow */}
        <div
          className="modal-backdrop"
          onClick={() => dispatch(closeModal())}
        ></div>
        {/* Modal content */}
        <article className="modal-content">
          <h4 className="modal-title">
            Remove all items from your shopping cart?
          </h4>
          {/* Modal buttons */}
          <div className="button-container">
            <button
              className="modal-btn confirm-button"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              Confirm
            </button>
            <button
              className="modal-btn cancel-button"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </button>
          </div>
        </article>
      </section>
    </aside>
  );
};

export default Modal;
