import React from 'react';
import "../css/cart.css";

const Cart = ({ cart, removeFromCart }) => (
  <div className="cart">
    <h2>Cart</h2>
    <ul>
      {cart.map(item => (
        <li key={item.id}>
          {item.image && <img src={item.image} alt={item.name} />}
          <div>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Cart;
