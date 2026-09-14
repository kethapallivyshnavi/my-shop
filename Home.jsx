import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Capstone Shop! 🛍️</h1>
      <p>Your one-stop destination for premium products at unbeatable prices.</p>
      <p>Browse our exclusive collection and enjoy a seamless shopping experience.</p>
      <Link to="/products">
        <button className="shop-now-btn">Shop Now →</button>
      </Link>
    </div>
  );
}