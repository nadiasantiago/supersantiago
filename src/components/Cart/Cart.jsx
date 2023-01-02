import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";
import ItemCart from '../ItemCart/ItemCart';
import './Cart.scss'

export const Cart = () => {
  const {cart, totalPrice, vaciarCarrito} = useCartContext();

  if (cart.length === 0){{
    return(
      <div className='cart-vacio'>
        <p>No hay elementos en el carrito 😔</p>
        <button><Link to='/'>Realizar una compra</Link></button>
      </div>
    )
  }}
  return (
    <div className='item-cart'>
      {
        cart.map((product) => <ItemCart key={product.id} producto={product}/>)
      }
      <p><strong>Total Pedido: ${totalPrice()}</strong></p>
      <div>
        <button className='btn-finalizar'><Link to='/checkout'>Finalizar Compra</Link></button>
        <button><Link to = '/'> Seguir Comprando</Link></button>
        <button className='btn-vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
    </div>
  )
}
