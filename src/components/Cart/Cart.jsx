import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";
import ItemCart from '../ItemCart/ItemCart';


export const Cart = () => {
  const {cart, totalPrice} = useCartContext();
  if (cart.length === 0){{
    return(
      <div>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Realizar una compra</Link>
      </div>
    )
  }}
  return (
    <div>
      {
        cart.map((product) => <ItemCart key={product.id} producto={product}/>)
      }
      <p>Total Pedido: ${totalPrice()}</p>
    </div>
  )
}
