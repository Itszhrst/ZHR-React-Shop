import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import "./Home.css";

export default function Home() {
  const { data, isLoading, isError } = useProducts();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to ZHR-React Shop</h1>
        <p>Find your favorite products with one click.</p>

        <Link to="/products" className="cta-btn">
          Browse All Products
        </Link>
      </header>

      <section className="featured-section">
        <h2>Featured Products</h2>

        {isLoading && <p>Loading...</p>}
        {isError && <p>Failed to load products.</p>}

        <div className="featured-grid">
          {data?.slice(0, 7).map((p: any) => (
            <Link key={p.id} to={`/products/${p.id}`} className="product-card">
              <img src={p.image} alt={p.title} />
              <h4>{p.title.slice(0, 20)}...</h4>
              <p>${p.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
