import useProducts from "../hooks/useProducts";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type { Product } from "../types/Cart";
import "./Products.css";

function Products() {
  const { data, isLoading, isError, error } = useProducts();
  const { dispatch } = useCart();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading products ...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className="products-container">
      <h2 className="products-title">Products</h2>

      <div className="products-grid">
        {data.map((p: Product) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.title} className="product-img" />

            <h3 className="product-title">{p.title}</h3>

            <p className="product-price">${p.price}</p>

            <button
              className="products-btn"
              onClick={() => navigate(`/products/${p.id}`)}
            >
              View
            </button>

            <button
              className="products-btn secondary-btn"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: p })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
