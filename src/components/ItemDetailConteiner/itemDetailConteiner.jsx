import { useParams } from "react-router-dom";
import { Productos } from "../../mocks";
import './style/ItemDetailConteiner.scss'
const ItemDetailConteiner = ()=>{
    const {id} = useParams();
    const productoFiltrados = Productos.find((p)=>p.id==id);
    return(
        <div className='detalle-producto'>
            <img src={productoFiltrados.img}/>
            <div className="detalle-descripcion">
                <p className='descripcion'>{productoFiltrados.nombre}</p>
                <p className='precio'>${productoFiltrados.precio}</p>
            </div>
        </div>
)
}
export default ItemDetailConteiner;