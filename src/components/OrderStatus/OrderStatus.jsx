import React from 'react';
import {doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { db } from '../../firebase/config';


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

  const orderInexistente = () => {
  }
  const orderExistente = ()=>{
  }

  return (
    orderData == undefined ? (
      <div>
        <h2> Orden {orderId} inexistente, por favor verifique el numero de orden</h2>
        <Link to={'/'}>Volver a la tienda</Link>
      </div>
    ) : (
      <div>
        <div>
          <h1>N° Orden: {orderId}</h1>
          <h2>¡Estamos trabajando en su pedido!</h2>
        </div>
        <div>
          <p>Cliente: {orderData.buyer.nombre} {orderData.buyer.apellido}</p>
          <p>Direccion de entrega: {orderData.buyer.direccion}</p>
          <p>Correo: {orderData.buyer.email}</p>
          <p>Telefono: {orderData.buyer.telefono}</p>
        </div>
        <div>
          {
          orderData.items.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt={item.name}/>
              <p>{item.name}</p>
              <p>${item.precio} / {item.quantity} Un.</p>
            </div>
          ))
          }
        </div>
        <div>
          <p>Total: {orderData.total}</p>
        </div>
    </div>
    )
  )
}

export default OrderStatus