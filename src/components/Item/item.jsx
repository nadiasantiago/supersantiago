import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({producto})=>{
    
    return(
        <div className='contenedor-producto'>
            <img src={producto.img} alt={producto.nombre}/>
            <Link to={`/item/${producto.id}`}><p className='descripcion'>{producto.nombre}</p></Link>
            <p className='precio'>${producto.precio}</p>
            <Link to={`/item/${producto.id}`}><button className='detalle'>Ver detalle</button></Link>

        </div>
)
}
export default Item;