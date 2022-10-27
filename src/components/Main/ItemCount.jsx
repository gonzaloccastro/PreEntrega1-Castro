import React, {useState} from 'react';
import { useEffect } from 'react';

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
                <button disabled={count===stock} 
                onClick={sumar}>
                    +
                </button>
                <p>{count}</p>
                <button
                onClick={restar}>
                    -
                </button>
            </div>
            <button onClick={add} 
            className="add-btn">Agregar al carrito</button>
        </div>  
    );
};

export default ItemCount;

