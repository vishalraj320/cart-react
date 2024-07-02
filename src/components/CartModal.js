import React from "react";
import Modal from "react-modal";
import "./CartModal.css";

Modal.setAppElement("#root");

const CartModal = ({ isOpen, onClose, cart, removeFromCart }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Cart Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default CartModal;
