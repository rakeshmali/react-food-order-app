//import DUMMY_MEALS from './dummy-meals';
import classes from "./MealItemForm.module.css";
import FormInput from "../UI/FormInput/FormInput";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const inputAmountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(false);

  const addToCartSubmitHandler = (e) => {
    e.preventDefault();
    const inputAmount = inputAmountRef.current.value;
    const inputAmountNumber = +inputAmount;
    if (
      inputAmount.trim().length === 0 ||
      inputAmountNumber < 1 ||
      inputAmountNumber > 5
    ) {
      setAmountIsValid(true);
      return;
    }
    
    props.onAddToCart(inputAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={addToCartSubmitHandler}>
      <FormInput
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      { amountIsValid && <div>Error while adding to cart!</div> }
    </form>
  );
};

export default MealItemForm;
