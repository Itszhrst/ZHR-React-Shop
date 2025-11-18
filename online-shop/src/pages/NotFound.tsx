import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>The page you're looking for does not exist.</p>

      <Link to="/" className="home-btn">
        Go Back Home
      </Link>
    </div>
  );
}
