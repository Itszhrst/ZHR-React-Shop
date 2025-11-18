import { useParams, useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  const product = products.find((p:any) => p.id === Number(id));

  if (!product)
    return (
      <div className="product-details-container">
        <p style={{ color: "red" }}>Product not found</p>
        <button className="product-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="product-details-container">
      <h2 className="product-details-title">{product.title}</h2>

      <img
        src={product.image}
        alt={product.title}
        className="product-details-img"
      />

      <p className="product-details-description">{product.description}</p>

      <h3 className="product-price">${product.price}</h3>

      <button className="product-btn" onClick={handleAdd}>
        Add to Cart
      </button>

      <br />

      <button
        className="product-btn product-secondary-btn"
        onClick={() => navigate("/cart")}
      >
        Go to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
