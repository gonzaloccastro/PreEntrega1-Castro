import React from "react";
import ItemList from '../Main/ItemList';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { PulseLoader } from 'react-spinners'
import { collection, query, where, getDocs } from "firebase/firestore";
import { dataBase } from '../../services/firebaseConfig'



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState (true);

    const {categoryName} = useParams (); 

    useEffect(()=>{
    const nombreColeccion = collection (dataBase, 'productos');

    const referencia = categoryName
        ? query(nombreColeccion, where ('categoria', '==', categoryName))
        : nombreColeccion;

            getDocs(referencia)
            .then((res)=>{
                const products = res.docs.map((prod)=>{
                    return {
                        id:prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                setLoading(false);
            });
    

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