import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const Item = ({prod}) => {

    return (
        <Card className="mb-3 mt-3" style={{ width: '18rem'}}>
        <Card.Img variant="top" alt={prod.nombre} src={prod.imagen} />
        <Card.Body>
            <Card.Title>{prod.nombre}</Card.Title>
            <Card.Text>
            ${prod.precio}
            <br />
            #{prod.categoria}    
            </Card.Text>
            <Button variant="primary"><Link to={`/item/${prod.id}`} className='url-blanco'> Ver detalle</Link></Button>
        </Card.Body>
        <Card.Footer className="text-muted">Stock disponible: {prod.stock}</Card.Footer>
        </Card>
    );
    };

export default Item;