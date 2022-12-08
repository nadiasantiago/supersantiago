import { Link } from 'react-router-dom';
const Item = ({producto})=>{
    return(
        <div className='contenedor-producto'>
            <img src={producto.img}/>
            <Link to={`/item/${producto.id}`}><p className='descripcion'>{producto.nombre}</p></Link>
            <p className='precio'>${producto.precio}</p>
        </div>
)
}
export default Item;