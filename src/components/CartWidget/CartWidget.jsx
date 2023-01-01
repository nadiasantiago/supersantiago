import React from 'react'
import './style/CartWidget.scss'
import Cart from '../Icons/Cart';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {totalProducts} = useCartContext();
  return (
    <div>
        <Cart />
        <span className='cart-quantity'>{totalProducts() || 0}</span>

    </div>
  );
}

export default CartWidget