import { useCart } from "../context/CartContext";
import "./CartPage.css";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const items = state.items;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return <h2 className="cart-empty">Shopping cart is empty</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      <div className="cart-grid">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-left">
              <img src={item.image} alt={item.title} />

              <div>
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
              </div>
            </div>

            <div className="cart-actions">
              <button
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: item.id })
                }
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: item.id })
                }
              >
                +
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
