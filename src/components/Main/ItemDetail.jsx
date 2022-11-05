import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';



const ItemDetail = ({item}) => {
    const [unidades, setUnidades] = useState(0);
    
    const {addToCart, traerCantidadProducto} = useContext(CartContext);

    const onAdd = (numero)=> {
        setUnidades(numero);
        addToCart(item, numero);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Felicidades, agregaste un producto',
            showConfirmButton: false,
            timer: 1000
            });
    };
    
    const cantidad = traerCantidadProducto(item.id);

    return (
        <div>
            <Card style={{ width: '32rem'}}>
                <Card.Body>
                <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text> {item.descripcion}</Card.Text>
                    
                    {<h4>{unidades===0 ? (`Agregá al carrito:`) : `Ya agregaste`}</h4>}

                    {unidades===0 ? (<ItemCount onAdd={onAdd} stock={item.stock} initial={cantidad} />)
                    :
                    (<Button variant="primary" style={{ margin: '.5rem'}}><Link to="/cart" className='url-blanco'>Ir al carrito</Link></Button>)}
                    
                    <Button variant="danger"><Link to={`/`} className='url-blanco'>Volver a Inicio</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetail;