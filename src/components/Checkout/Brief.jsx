import React from 'react'

const Brief = ({producto}) => {
    return (
        <div>
        <div>
            <img src={producto.img} alt={producto.nombre} height={50} width={50}/>
        </div>
        <div>
            <p>{producto.nombre}</p>
            <p>{`Precio: $${producto.precio}`}</p>
            <p>{`Cantidad: ${producto.cantidad}`}</p>
            <p>{`Subtotal: $${producto.cantidad * producto.precio}`}</p>
        </div>
    </div>
    )
}
export default Brief