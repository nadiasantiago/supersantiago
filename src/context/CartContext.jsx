import React, {useState, useContext} from 'react'
const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, cantidad) =>{
        let newCart;
        let product = cart.find(producto => producto.id == item.id);
        console.log (item)
        if(product){
            product.cantidad += cantidad;
            newCart = [...cart];
        } else{
            product = { ...item, cantidad};
            newCart = {...cart, product};
        }
        setCart(newCart)

    }
    const vaciarCarrito = () => setCart([]);
    const productoCarrito = (id)=> cart.find(producto => producto.id == id)? true : false;
    const eliminarProducto = (id)=> setCart (cart.filter(producto => producto.id !== id));

  return (
    <CartContext.Provider value={{vaciarCarrito,productoCarrito,eliminarProducto,addProduct}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
