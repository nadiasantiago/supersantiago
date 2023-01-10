import React from 'react';
import {doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { db } from '../../firebase/config';
import './OrderStatus.scss'


const OrderStatus = () => {
  const {orderId} = useParams();
  const [orderData, setOrderData] = useState() 

  useEffect(()=>{
    const order = doc(db, 'orders', orderId);

    getDoc(order)
      .then((resp)=>{
        const data = resp.data();
        setOrderData(data);
      })
  }, [orderId])

  return (
    orderData == undefined ? (
      <div>
        <h2> Orden {orderId} inexistente, por favor verifique el numero de orden</h2>
        <Link to={'/'}>Volver a la tienda</Link>
      </div>
    ) : (
      <div className='conteiner-status'>
        <div className='status-titulos'>
          <h1>N° Orden: {orderId}</h1>
          <h2>¡Estamos trabajando en su pedido!</h2>
        </div>
        <div className='order-datos'>
          <p>Cliente: {orderData.buyer.nombre} {orderData.buyer.apellido}</p>
          <p>Direccion de entrega: {orderData.buyer.direccion}</p>
          <p>Correo: {orderData.buyer.email}</p>
          <p>Telefono: {orderData.buyer.telefono}</p>
        </div>
        <div>
          <h3>Productos:</h3>
          {
          orderData.items.map((item) => (
            <div key={item.id} className='order-producto'>
              <img src={item.img} alt={item.name}/>
              <p>{item.name}</p>
              <p>${item.precio} - </p>
              <p>{item.quantity}un.</p>
            </div>
          ))
          }
        </div>
        <div className='order-total'>
          <p>Total: ${orderData.total}</p>
        </div>
    </div>
    )
  )
}

export default OrderStatus