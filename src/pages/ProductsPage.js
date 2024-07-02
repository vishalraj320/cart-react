import React from "react";
import ProductList from "../components/ProductList";
import ErrorBoundary from "../components/ErrorBoundary";
import "./ProductsPage.css";

const ProductsPage = ({ addToCart }) => {
  return (
    <div className="products-page">
      <h1>Products</h1>
      <ErrorBoundary>
        <ProductList addToCart={addToCart} />
      </ErrorBoundary>
    </div>
  );
};

export default ProductsPage;
