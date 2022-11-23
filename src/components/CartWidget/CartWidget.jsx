import React from 'react'
import './style/CartWidget.scss'
import Cart from '../Icons/Cart';

const CartWidget = () => {
  return (
    <div>
        <Cart />
        <span className='cart-quantity'>5</span>
    </div>
  );
}

export default CartWidget