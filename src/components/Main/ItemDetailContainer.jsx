import React from "react";
import ItemDetail from '../Main/ItemDetail';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {PulseLoader} from 'react-spinners'
import { collection, doc, getDoc } from "firebase/firestore";
import {dataBase} from '../../services/firebaseConfig'


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState (true);

    const {id}= useParams ();

    useEffect(()=>{
        const nombreColeccion = collection (dataBase, 'productos')
        const ref = doc(nombreColeccion, id);

    getDoc(ref)
    .then((res)=>{
        setItem(
            {
                id:res.id,
                ...res.data()
            }
        );
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        setLoading(false);
    });
    }, [id]);

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