import React, {useState, useContext} from 'react'
const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    console.log(cart)
    const addProduct = (item, cantidad) =>{
        if (productoCarrito(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, cantidad: product.cantidad + cantidad} : product
            }))
        } else {
            setCart([...cart, {...item, cantidad}]); 
        }
    }
    const vaciarCarrito = () => setCart([]);
    const productoCarrito = (id)=> cart.find(producto => producto.id === id)? true : false;
    const eliminarProducto = (id)=> setCart(cart.filter(producto => producto.id !== id));

    const totalPrice = () =>{
        return cart.reduce((total, valorProd) => total + valorProd.cantidad * valorProd.precio, 0)
    }
    const totalProducts = () => cart.reduce((acc, prodActual)=> acc + prodActual.cantidad, 0)

  return (
    <CartContext.Provider value={{
        vaciarCarrito,
        productoCarrito,
        eliminarProducto,
        addProduct,
        totalPrice,
        totalProducts,
        cart
        }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
