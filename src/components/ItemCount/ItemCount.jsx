import {useState, useEffect } from 'react';
import './ItemCount.scss'

function ItemaCount({inicial,stock,onAdd}) {
  const [count, setCount] = useState(parseInt(inicial));

  const decrease = ()=>{
    setCount(count - 1);
  }
  const increase = ()=>{
    setCount(count + 1);
  }
  useEffect(()=>{
    setCount(parseInt(inicial))
  },[inicial])

  return (
    <div className='contenedor-contador'>
      <div className='contador'>
        <button disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={increase}>+</button>
      </div>
      <button className='addCart' disabled={stock <= 0} onClick={()=>{onAdd(count)}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemaCount