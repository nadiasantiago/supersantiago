import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebase/config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import './style/ItemListConteiner.scss'

const ItemListConteiner = () => {
  const [item,setItem] = useState([]);
  const [itemCopy,setItemCopy] = useState(item);
  const {id} = useParams();
  
  const FilterCategory = () =>{
      if(id && itemCopy){
        const productosFiltrados = itemCopy.filter((p)=>p.categoria==id);
        return (productosFiltrados);  
      }else{
        return (itemCopy)
      }
  }

  useEffect(()=>{
    const filtro = FilterCategory();
    setItem(filtro);
  },[id])


  useEffect (()=>{
      const collectionRef = collection(db, 'item')
      getDocs (collectionRef).then(res =>{
        setItem(res.docs.map (producto => ({id:producto.id, ...producto.data()})))
        setItemCopy(res.docs.map (producto => ({id:producto.id, ...producto.data()})))
      })
  }, [])


  return (
    <div className='contenedor'>
      {
        item.map((producto)=>{
          return <Item key={producto.id} producto={producto}/>
        })
      }      
    </div>
  );
}

export default ItemListConteiner

