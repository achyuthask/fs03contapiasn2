
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from './components/store/contex';
import Home from './components/home';
import Product from './components/product';
import Addcart from './components/addcard';
import Nav from './components/nav';


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }
  const handleDelete = (productId) => {
    const newCart = cart.filter(product => product.id !== productId);
    setCart(newCart);
  }

  return (
    <div className="App">

<CartContext.Provider value={{ cart, addToCart , handleDelete}}>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/addcart' element ={<Addcart cart={cart} />}  />
       </Routes>


    </CartContext.Provider>
     
   

    </div>
    
  );
}

export default App;
