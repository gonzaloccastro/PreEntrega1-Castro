import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({item}) => {
    const [unidades, setUnidades] = useState(0);
    
    const {addToCart, traerCantidadProducto} = useContext(CartContext);

    const onAdd = (numero)=> {
        setUnidades(numero);
        addToCart(item, numero);
                // Me falta sumar "felicidades agregaste x unidades"
    };
    
    const cantidad = traerCantidadProducto(item.id);

    return (
        <div>
            <Card style={{ width: '50rem'}}>
                <Card.Body>
                <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text> {item.descripcion}</Card.Text>
                    
                    {<h2>{unidades===0 ? (`Hay ${cantidad} unidades.`) : `Ya agregaste`}</h2>}

                    {unidades===0 ? (<ItemCount onAdd={onAdd} stock={item.stock} initial={cantidad} />)
                    :
                    (<Link to="/cart">Ir al carrito</Link>)}
                    
                    <Button variant="danger"><Link to={`/`} className='url-blanco'>Volver a Inicio</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetail;