import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Cart = () => {

    const { cart, sumaTotal, eliminarTodo, eliminarUno } = useContext(CartContext);

    if (cart.length === 0) {
        return (
        <div>
            <h1 style={{margin:'12rem'}}>Aun no hay ningún producto en tu carrito.</h1>
            <Button variant="danger"><Link to={`/`} className='url-blanco'>Volver a Inicio</Link></Button>
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
                    <td><Button variant="danger"  onClick={() => eliminarUno(prod.id)} className='url-blanco'>Eliminar</Button></td>
                </tr>
                ))}
            </tbody>
        </Table>
        <div style={{margin: '2rem'}}>
            <h2>Total: ${sumaTotal()}.-</h2>
            <Button style={{margin: '1rem'}} variant="danger" onClick={eliminarTodo} className='url-blanco'>Eliminar todo el carrito</Button>

            <Button variant="success" className='url-blanco'><Link to='/checkout' className='url-blanco'>Checkout</Link></Button>
        </div>
        </div>
    )
};

export default Cart;