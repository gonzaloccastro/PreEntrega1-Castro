import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = ({children}) => {
    const [cart, setCart] = useState ([]);


    const addToCart = (item, cantidad) => {
        const producto = {...item, cantidad};
        if (isInCart(producto.id)) {
        // Me falta sumar cartel avisando que ya está en el carrito
        } 
        else
        {setCart([...cart, producto]);}
    };

    const isInCart = (id) => cart.some((prod) => prod.id === id );
    
    //const deleteAll = () => setCart([]);

    console.log(cart);

    return (
    <CartContext.Provider value={{ cart, addToCart }}>
        {children}
    </CartContext.Provider>
    );
};

export default Provider;