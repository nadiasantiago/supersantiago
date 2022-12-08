import {categorias} from '../../mocks'
import './style/NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav>
        <div><Link to={'/'}><img src={process.env.PUBLIC_URL + '/logo-super.png'} alt="logo super santiago"/></Link></div>
        <div className='nav-conteiner'>
            <ul className='nav-items'>
                <li><Link to={'/'}>INICIO</Link></li>
                {categorias && categorias.map((categoria)=>{
                    return <li><Link to={`category/${categoria.id}`}>{categoria.name}</Link></li>
                })}
            </ul>
        </div>
        <div>
            <CartWidget />
        </div>
    </nav>);
};

export default NavBar