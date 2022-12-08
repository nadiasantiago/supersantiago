import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Productos,categorias} from '../../mocks'
import Item from '../Item/item';
import './style/ItemListConteiner.scss'
const ItemListConteiner = () => {
  const [item,setItem] = useState(Productos);
  const {id} = useParams();
  const FilterCategory = new Promise((resolve) =>{
      if(id){
        const productosFiltrados = Productos.filter((p)=>p.categoria==id);
        resolve (productosFiltrados);  
      }else{
        resolve(Productos)
      }
  })
  useEffect(()=>{
    FilterCategory.then((response=>{
      setItem(response);
    }))
  },[id])
  return (
    <div className='contenedor'>
      {
        item.map((producto)=>{
          return(<Item producto={producto}/>)
        })
      }
      
    </div>
  );
}

export default ItemListConteiner