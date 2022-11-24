import React from 'react'
import './style/ItemListConteiner.scss'
const ItemListConteiner = (props) => {
  return (
    <div className='bienvenida'>Hola {props.name}, bienvenido a la tienda online!</div>
  );
}

export default ItemListConteiner