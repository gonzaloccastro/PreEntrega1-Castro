import React from "react";
import ItemList from '../Main/ItemList';
import { products } from "../../mock/productsMock";
import { useEffect } from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom';
import {PulseLoader} from 'react-spinners'



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState (true);

    const {categoryName} = useParams (); 

    useEffect(()=>{
        const traerProductos = () => {
            return new Promise ((res,rej)=>{
                const prodFiltrados = products.filter((prod)=>prod.categoria===categoryName)
                setTimeout(()=>{
                    res(categoryName ? prodFiltrados : products);
                },600);
            });
        };
        traerProductos()
            .then((res)=>{
            setItems(res);
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
            setLoading(false);
            });

            return () => setLoading (true);

    }, [categoryName]);

    return (
        <main>
            {loading
            ? (
            <div
                style={{
                    minHeight:'80vh',
                    display:'flex',
                    justifyContent:'center',
                }}
            > 
                <PulseLoader style={{marginTop:'100px'}} color="black" /> 
            </div>
            ):(
                <div className="item.list-container">
                    <ItemList items={items}/>
                </div>
            )}
        </main>
    );
};

export default ItemListContainer;