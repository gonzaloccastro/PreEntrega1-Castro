import React from "react";
import ItemList from '../Main/ItemList';
import { products } from "../../mock/productsMock";
import { useEffect } from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoryName} = useParams (); 

    useEffect(()=>{
        const traerProductos = () => {
            return new Promise ((res,rej)=>{
                const prodFiltrados = products.filter((prod)=>prod.categoria==categoryName)
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
            });
    }, [categoryName]);

    return (
        <main>
            <div>
                <ItemList items={items}/>
            </div>
        </main>
    );
};

export default ItemListContainer;