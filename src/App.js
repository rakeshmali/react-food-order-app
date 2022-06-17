import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import MainContent from './components/Layouts/MainContent';
import MainHeader from './components/Layouts/MainHeader';
import Meals from './components/Meals/Meals';
import { CartProvider } from './context/CartProvider';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const handleCartShowHandler = () => {
    setCartIsShown(true);
  }

  const handleCartHideHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={handleCartHideHandler}/> }
      <MainHeader onClick={handleCartShowHandler}/>

      <MainContent>
        <Meals />
      </MainContent>
    </CartProvider>
  );
}

export default App;
