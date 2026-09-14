import { useNavigate } from 'react-router-dom';

export default function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // Checkout ఫంక్షన్
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add products first. 🛒");
      return;
    }
    alert(`✅ Order Placed Successfully!\nTotal Amount: $${totalPrice.toFixed(2)}\n\nThank you for shopping with us! 🎉`);
    setCart([]); // కార్ట్ ఖాళీ చేయండి
    navigate('/'); // హోమ్ పేజీకి వెళ్ళండి
  };

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#1e3c72', marginBottom: '30px' }}>
        🛒 Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px', background: 'white', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
          <h2>Your cart is empty 😔</h2>
          <p>Add some products to get started!</p>
        </div>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              background: 'white',
              padding: '15px',
              marginBottom: '15px',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'contain', marginRight: '20px' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px' }}>{item.title.substring(0, 60)}...</h3>
                <p style={{ color: '#11998e', fontWeight: 'bold', fontSize: '18px' }}>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                style={{
                  padding: '8px 15px',
                  background: '#ff4757',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Remove ❌
              </button>
            </div>
          ))}

          <div style={{ textAlign: 'right', marginTop: '30px', padding: '20px', background: 'linear-gradient(90deg, #1e3c72, #2a5298)', borderRadius: '10px', color: 'white' }}>
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button
              onClick={handleCheckout}
              style={{
                marginTop: '10px',
                padding: '12px 30px',
                background: '#38ef7d',
                color: '#1e3c72',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Checkout →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}