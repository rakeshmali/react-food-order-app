//import DUMMY_MEALS from './dummy-meals';
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm
        id={props.id} // this is new!
        key={props.id}
        name={props.name}
        description={props.description}
        price={props.price}
        onAddToCart={onAddToCartHandler}
      />
    </li>
  );
};

export default MealItems;
