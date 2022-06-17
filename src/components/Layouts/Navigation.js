import React, { useContext, useEffect, useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Modal from '../UI/Modal/Modal';
import Cart from '../Cart/Cart';
import CartContext from '../../context/cart-context';

import classes from './Navigation.module.css';
import CartIcon from '../Cart/CartIcon';

const Navigation = (props) => {
  const cartCtx = useContext(CartContext);
  const [hightLightCart, setHightLightCart] = useState(false);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${hightLightCart ? classes.bump  : '' }`;

  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    setHightLightCart(true);
    
    const timer = setTimeout(()=>{
      setHightLightCart(false);
    }, 300);
    
    return () => {
      clearTimeout(timer);
    }

  }, [items]);

  return (
    <Wrapper>
      <nav className={classes.nav}>
        <ul>
          {(
            <li>
              <button onClick={props.onClick} className={btnClasses}>
                <span className={classes.icon}><CartIcon /></span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
                </button>
            </li>
          )}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Navigation;
