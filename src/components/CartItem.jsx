import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from '../store/CartSlice';
import './CartItem.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);

  const handleIncreaseQuantity = (id, currentQuantity) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecreaseQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const calculateItemTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available soon.');
  };

  const handleContinueShopping = () => {
    navigate('/plants');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Start adding some beautiful plants to your cart!</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="unit-price">Unit Price: ${item.price.toFixed(2)}</p>
                <p className="item-total">Total: ${calculateItemTotal(item.price, item.quantity)}</p>
              </div>
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                  >
                    −
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Total Items:</span>
              <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
            </div>
            <div className="summary-row total">
              <span>Total Amount:</span>
              <span>${calculateCartTotal()}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
