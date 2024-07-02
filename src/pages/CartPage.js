import React from "react";
import Cart from "../components/Cart";
import ErrorBoundary from "../components/ErrorBoundary";
import "./CartPage.css";

const CartPage = () => {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ErrorBoundary>
        <Cart />
      </ErrorBoundary>
    </div>
  );
};

export default CartPage;
