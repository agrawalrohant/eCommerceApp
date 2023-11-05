import { useCart } from "../../hooks/useCart";
import CartItem from "../cartItem/CartItem";
import "./CartItemList.css";
import { useState } from "react";

const CartItemList = () => {
  const { cart, totalQty } = useCart();
  const cartValues = Object.values(cart);
  //const [totalAmount, setTotalAmount] = useState(0);
  let totalAmount = 0;
  let allItems = [];
  cartValues.forEach((cartValue, index) => {
    totalAmount = parseFloat(
      totalAmount + cartValue.quantity * cartValue.price
    ).toFixed(2);
    allItems.push(<CartItem key={index} cartValue={cartValue} />);
  });

  return (
    <>
      <div className="cart-main-page">
        <h1 className="cart-main-title">Shopping Cart Items</h1>
        <div className="cart-item-container">
          {allItems.length > 0 ? allItems : "Cart is empty"}
        </div>
        <div className="cart-total-container">
          <div className="cart-total-container-1"></div>
          <div className="cart-total-container-2">
            Subtotal ({totalQty} items): &#x20B9;{totalAmount}
          </div>
        </div>
        <div className="cart-payment-button">
          <button>Proceed to Payment</button>
        </div>
      </div>
    </>
  );
};

export default CartItemList;
