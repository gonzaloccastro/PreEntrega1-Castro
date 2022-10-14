import React from "react";
import ItemDetail from '../Main/ItemDetail';
import { products } from "../../mock/productsMock";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { id }= useParams ();

    useEffect(()=>{
        const traerProductos = () => {
            return new Promise ((res,rej)=>{
                const producto = products.find((prod)=> prod.id === Number(id))
                setTimeout(()=>{
                    res(producto);
                },600);
            });
        };
        traerProductos()
            .then((res)=>{
            setItem(res);
            })
            .catch((error)=>{
                console.log(error);
            });
    }, []);

    console.log(item);

    return (
        <div className="d-flex flex-row justify-content-center">
            <ItemDetail item={item}/>
        </div>
    );
};

export default ItemDetailContainer;