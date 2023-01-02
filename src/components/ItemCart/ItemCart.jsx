import React from 'react'
import { useCartContext } from '../../context/CartContext'
import Delete from '../Icons/Delete'
import './ItemCart.scss'
const ItemCart = ({producto}) => {
    const {eliminarProducto}= useCartContext()
  return (
    <div className='producto-cart'>
            <p className='producto-nombre'>{producto.nombre}</p>
            <img className='producto-img' src={producto.img} alt={producto.nombre} />
            <p className='cantidad'>Cantidad: {producto.cantidad}</p>
            <p className='precio'>Precio un: ${producto.precio}</p>
            <p className='subtotal'>Subtotal: ${producto.precio * producto.cantidad}</p>
            <button className='btn-eliminar' onClick={()=> eliminarProducto(producto.id)}><Delete/></button>
    </div>
  )
}

export default ItemCart