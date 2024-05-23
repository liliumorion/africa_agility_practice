import React from "react";
import "./product.css";
function Cart() {
  return (
    <section>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <p id="empty">The cart is empty</p>
        <span>total $ 0.00</span>
        <button>Checkout</button>
      </div>
    </section>
  );
}

export default Cart;
