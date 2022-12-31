import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss'


export const ItemDetail = ({producto}) => {
    const [goToCart, setGoToCart] = useState (false)

    const {addProduct} = useCartContext();

    const onAdd = (cantidad)=>{
        setGoToCart (true)
        addProduct (producto, cantidad)
    }


    return (
    <div className='detalle-producto'>
        <img src={producto.img} alt={producto.nombre}/>
        <div className="detalle-descripcion">
            <p className='descripcion'>{producto.nombre}</p>
            <p className='precio'>${producto.precio}</p>
            {
            goToCart ? <Link to='/cart'>Terminar Compra</Link> : <ItemCount inicial={1} stock={5} onAdd={onAdd}/>
            }

        </div>
    </div>
)
}
