import "./CartItem.css";

const CartItem = ({ cartValue }) => {
  return (
    <div className="cart-item">
      <img className="cart-item__image" src={cartValue.image} />
      <div className="cart-item__title">{cartValue.title}</div>
      <div className="cart-item__quantity">{cartValue.quantity}</div>
      <div className="cart-item__price">
        &#x20B9;{cartValue.quantity * cartValue.price}
      </div>
    </div>
  );
};

export default CartItem;
