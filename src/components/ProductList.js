import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
      );
      setProducts((prevProducts) => [
        ...prevProducts,
        ...response.data.products,
      ]);
    };
    fetchProducts();
  }, [page]);

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page + 1)} className="load-more">
        Load More
      </button>
    </div>
  );
};

export default ProductList;
