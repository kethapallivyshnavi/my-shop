import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import Products from './Products';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Footer from './Footer';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar cartCount={cart.length} />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;