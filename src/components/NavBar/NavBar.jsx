import React from 'react'
import './style/NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
  return (
    <nav>
        <div><img src={process.env.PUBLIC_URL + '/logo-super.png'} alt="logo super santiago"/></div>
        <div className='nav-conteiner'>
            <ul className='nav-items'>
                <li><a href="#">TIENDA ONLINE</a></li>
                <li><a href="#">SUCURSALES</a></li>
                <li><a href="#">MEDIOS DE PAGO</a></li>
            </ul>
        </div>
        <div>
            <CartWidget />
        </div>
    </nav>);
};

export default NavBar