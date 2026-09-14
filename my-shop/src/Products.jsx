import { useState, useEffect } from 'react';

export default function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title.substring(0, 30)}... added to cart! 🛒`);
  };

  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <h2 style={{ textAlign: 'center', padding: '50px' }}>Loading Products... ⏳</h2>;

  return (
    <div className="products-container">
      <h1 className="products-title">✨ Product Catalog ✨</h1>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '12px 20px',
            width: '400px',
            maxWidth: '90%',
            fontSize: '16px',
            borderRadius: '50px',
            border: '2px solid #2a5298',
            outline: 'none'
          }}
        />
      </div>

      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <h3 style={{ textAlign: 'center', gridColumn: '1/-1' }}>No products found 😔</h3>
        ) : (
          filteredProducts.map(item => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title.substring(0, 50)}...</h3>
              <p className="product-price">${item.price}</p>
              <button className="add-cart-btn" onClick={() => addToCart(item)}>
                Add to Cart 🛒
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}