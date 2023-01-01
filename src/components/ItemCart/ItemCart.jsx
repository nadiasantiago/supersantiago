import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './ItemCart.scss'
const ItemCart = ({producto}) => {
    const {eliminarProducto}= useCartContext()
  return (
    <div className='producto-cart'>
        <div className='cart-titulos'>
            <p className='producto-nombre'>Producto</p>
            <p></p>
            <p>Cantidad</p>
            <p>Precio un</p>
            <p>Subtotal</p>
        </div>
        <div className='cart-detail'>
            <img src={producto.img} alt={producto.nombre} />
            <p>{producto.nombre}</p>
            <p>{producto.cantidad}</p>
            <p>${producto.precio}</p>
            <p>${producto.precio * producto.cantidad}</p>
            <button onClick={()=> eliminarProducto(producto.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart