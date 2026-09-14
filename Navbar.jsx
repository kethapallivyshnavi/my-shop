import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/">🏠 Home</Link>
      <Link to="/products">🛍️ Products</Link>
      <Link to="/about">ℹ️ About</Link>
      <Link to="/cart" style={{ marginLeft: 'auto' }}>🛒 Cart ({cartCount})</Link>
    </nav>
  );
}