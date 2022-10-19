import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Cart = () => {

    const { cart } = useContext(CartContext);

    return (
        <div>
            {cart.map((prod)=>(

            <div
                key={prod.id}
                style={{display:'flex', 
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}
            >
                <img src={prod.imagen} alt={prod.nombre} width="80px"/>
                <div style={{display: 'flex', 
                            alignItems: 'center',
                            padding: '20px',}}>
                    <h2>{prod.nombre}</h2>
                    <h3>$ {prod.precio}</h3>
                    <h4>Cantidad: {prod.cantidad}</h4>
                    <h3>Subtotal: ${prod.precio * prod.cantidad}.-</h3>
                </div>
            </div>       
                
            ))}
        </div>
    ); 
};

export default Cart;