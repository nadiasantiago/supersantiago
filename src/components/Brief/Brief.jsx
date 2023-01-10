import React from 'react'

const Brief = ({producto}) => {
    return (
        <div className='descripcion-checkout'>
            <div>
                <img src={producto.img} className='img-checkout' alt={producto.nombre}/>
            </div>
            <div className='detalle-checkout'>
                <h2>{producto.nombre}</h2>
                <p>{`Precio: $${producto.precio}`}</p>
                <p>{`Cantidad: ${producto.cantidad}`}</p>
                <p>{`Subtotal: $${producto.cantidad * producto.precio}`}</p>
            </div>
        </div>
    )
}
export default Brief