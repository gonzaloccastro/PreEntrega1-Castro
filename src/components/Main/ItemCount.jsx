import React, {useState} from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [count, setCount] = useState (initial);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };
    const restar = () => {
        count > 1 && setCount(count - 1);
    };

    const add = () => {
        onAdd(count);
    };

    useEffect( () => {
        setCount(initial);
    }, [initial]);


    return (
        <div className="container-count">
            <div className="count-btn">
                <Button disabled={count===stock} 
                onClick={sumar}>
                    +
                </Button>
                <p>{count}</p>
                <Button
                onClick={restar}>
                    -
                </Button>
            </div>
            <Button onClick={add} variant="primary" style={{ margin: '.5rem'}} className='url-blanco add-btn'>Agregar al carrito</Button>

        </div>  
    );
};

export default ItemCount;

