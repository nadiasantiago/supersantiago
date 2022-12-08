const ItemDetailConteiner = ({producto})=>{
    // const {id} = useParams();
    // const FilterCategory = new Promise((resolve) =>{
    //     const productosFiltrados = Productos.filter((p)=>p.categoria==id);
    //     resolve (productosFiltrados);
    // })
    return(
        <div className='detalle-producto'>
            <img src={producto.img}/>
            <div>
                <p className='descripcion'>{producto.nombre}</p>
                <p className='precio'>${producto.precio}</p>
            </div>
        </div>
)
}
export default ItemDetailConteiner;