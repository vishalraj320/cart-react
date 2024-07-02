import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import CartModal from "./components/CartModal";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const App = () => {
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleLogin = (token) => {
    setToken(token);
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setIsCartModalOpen(true);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  if (!token) {
    return (
      <ErrorBoundary>
        <LoginPage onLogin={handleLogin} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <button className="view-cart" onClick={openCartModal}>
            View Cart
          </button>
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<ProductsPage addToCart={addToCart} />} />
          </Routes>
        </div>
      </Router>
      <CartModal
        isOpen={isCartModalOpen}
        onClose={closeCartModal}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </ErrorBoundary>
  );
};

export default App;
