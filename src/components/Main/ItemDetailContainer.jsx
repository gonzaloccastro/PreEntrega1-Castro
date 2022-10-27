import React from "react";
import ItemDetail from '../Main/ItemDetail';
import { products } from "../../mock/productsMock";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {PulseLoader} from 'react-spinners'



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState (true);

    const {id}= useParams ();

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
            })
            .finally(()=>{
                setLoading(false);
            });
    }, [id]);

    console.log(item);

    return (
        <div>
            {loading
            ? (<div
                style={{
                    minHeight:'80vh',
                    display:'flex',
                    justifyContent:'center',
                }}
            > 
                <PulseLoader style={{marginTop:'100px'}} color="black" /> 
            </div>
            ):(
                <div className="d-flex flex-row justify-content-center">
                    <ItemDetail item={item}/>
                </div>)}
        </div>   
    );
};

export default ItemDetailContainer;