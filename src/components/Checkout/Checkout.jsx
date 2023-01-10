import { collection, doc, serverTimestamp, writeBatch, getDocs, setDoc, query, where, documentId } from "firebase/firestore";
import { db } from '../../firebase/config';
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Brief from "../Brief/Brief";
import CartForm from '../CartForm/CartForm'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import './Checkout.scss'

const MySwal = withReactContent(Swal)

const Checkout = () => {
    const {cart, totalPrice, vaciarCarrito} = useCartContext();
    const goTo = useNavigate();

    const handleBuy = async () => {
        try {
            const data = await showCartForm();
            sendOrder(data);
        } catch (er) {
        console.error(er);
        Swal.fire({
            title: "Oops...",
            text: `Ha ocurrido un error, por favor, recarga la página y vuelve a intentarlo.`,
            icon: "error",
            showConfirmButton: false,
        });
        } finally {
            Swal.fire({
            title: "Generando orden...",
            icon: "info",
            footer: "¡No te vayas!",
            showConfirmButton: false,
        });
        }
    };

    const showCartForm = () => {
        return new Promise((resolve) => {
            MySwal.fire({
            html: (<CartForm  onSubmit={(data) => {resolve(data)}}/>),
            showConfirmButton: false,
            });
        });
    };
    

    const sendOrder = async (data) => {
        try {
            const itemsDb = cart.map((item) => ({
                id: item.id,
                name: item.nombre,
                precio: item.precio,
                quantity: item.cantidad,
                img: item.img
            })); 

            const order = {
                buyer: data,
                items: itemsDb,
                total: totalPrice(),
                Fecha: serverTimestamp()
            };

            const batch = writeBatch(db); 

            const cartProductsIds = cart.map((prod) => prod.id);

            const productsRef = query(
                collection(db, 'item'),
                where(documentId(), "in", cartProductsIds)
            );
            const cartProductsDB = await getDocs(productsRef);
            const {docs} = cartProductsDB;

            const outOfStock = [];

            docs.forEach((prodDb) => {
                const productData = prodDb.data();
                const stockDb = productData.stock;

                const productInCart = cart.find((prodCart) => prodCart.id === prodDb.id);
                const prodQ = productInCart?.cantidad;

                if(stockDb >= prodQ) {
                    batch.update(prodDb.ref, {stock: stockDb - prodQ}); 
                } else{
                    outOfStock.push({id: prodDb.id, ...productData}); 
                }
            }); 

            if (outOfStock.length === 0){
                await batch.commit();
                const ordersCollection = doc(collection(db, 'orders'));
                await setDoc(ordersCollection, order)
                vaciarCarrito();
                if (ordersCollection.id) afterBuy(ordersCollection.id);
            } else {
                MySwal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Ups!',
                    text: 'Nos quedamos sin stock!',
                    showConfirmButton: false,
                })
                setTimeout(() => {
                    Swal.close();
                    goTo(`/`);
                  }, 2000);
        
            }
        } catch (error) {
            console.error(error);
        }
    }

    const afterBuy = (orderId) => {
        MySwal.fire({
          title: "¡Compra exitosa!",
          text: `Número de órden: ${orderId}`,
          icon: "success",
          showConfirmButton: false,
        });

        setTimeout(() => {
            Swal.close();
            goTo(`/order/${orderId}`);
          }, 3000);
    };

return (
    <div className="contenedor-checkout">
        <h1>Checkout</h1>
        <p className="checkout-total">Total: ${totalPrice()}</p>
        <h3 className=''>Productos Selecionados:</h3>
        <div className="checkout-productos">
            {
                cart.map((product)=>{
                    return <Brief key={product.id} producto={product} />
                })
            }
        </div>
        <button className="confirmarOrden" onClick={handleBuy}>Confirmar Orden</button>
    </div>
)}

export default Checkout;