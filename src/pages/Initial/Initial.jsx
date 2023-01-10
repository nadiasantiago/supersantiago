import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ItemListConteiner from '../../components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from '../../components/ItemDetailConteiner/ItemDetailConteiner';
import { Cart } from '../../components/Cart/Cart';
import CartProvider from '../../context/CartContext';
import Checkout from '../../components/Checkout/Checkout';
import OrderStatus from '../../components/OrderStatus/OrderStatus';


const Initial = () => {
  return (
  <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListConteiner/>} />
          <Route exact path='/category/:id' element={<ItemListConteiner/>}/>
          <Route exact path='/item/:id' element={<ItemDetailConteiner/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
          <Route exact path='/order/:orderId' element={<OrderStatus/>}/>

        </Routes>
      </CartProvider>
  </BrowserRouter>
  );
}
export default Initial