import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {
 
    return (
        <div>
            <Card style={{ width: '50rem'}}>
                <Card.Body>
                <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text> {item.descripcion}</Card.Text>
                    <Button variant="primary">Argegar al carrito</Button>
                    <Button variant="danger"><Link to={`/`} className='url-blanco'>Volver a Inicio</Link></Button>
                </Card.Body>
            </Card>
        </div>
    )
};

export default ItemDetail;