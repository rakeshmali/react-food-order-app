import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const itemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }

  const itemAddHandler = (item) => {
    cartCtx.addItem(item);
  }

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={itemRemoveHandler.bind(null, item.id)}
          onAdd={itemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
