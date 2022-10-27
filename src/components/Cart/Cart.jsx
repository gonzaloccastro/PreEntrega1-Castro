import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';


const Cart = () => {

    const { cart, eliminarTodo, eliminarUno } = useContext(CartContext);
    
    if (cart.length === 0) {
        return (
        <div>
            <h1>Aun no hay ningún producto en tu carrito.</h1>
            <button variant="primary">
                <Link to={`/`}> Ir a Inicio</Link>
            </button>
        </div>
    )}

    return (
        <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Miniatura:</th>
                    <th>Nombre:</th>
                    <th>Precio:</th>
                    <th>Cantidad:</th>
                    <th>Subtotal:</th>
                    <th>Borrar:</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((prod)=>(
                <tr key={prod.id}
                >
                    <td><img src={prod.imagen} alt={prod.nombre} width="70px"/></td>
                    <td>{prod.nombre}</td>
                    <td>${prod.precio}</td>
                    <td>{prod.cantidad}</td>
                    <td>${prod.precio * prod.cantidad}.-</td>
                    <td><button size={25} color="red" onClick={() => eliminarUno(prod.id)}>Eliminar</button></td>
                </tr>
                ))}
            </tbody>
        </Table>
        <div>
            <h2>Total:</h2>
            <button onClick={eliminarTodo}>Eliminar todo el carrito</button>
        </div>
        </div>
    )
};

export default Cart;