//import DUMMY_MEALS from './dummy-meals';
import classes from './AvailableMeals.module.css';
import { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {

  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;