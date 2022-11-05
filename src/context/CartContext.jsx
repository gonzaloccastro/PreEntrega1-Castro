import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addToCart = (item, cantidad) => {
        const producto = {...item, cantidad};
        if (isInCart(producto.id)) {
            sumarCantidad(producto);
        } 
        else
        {setCart([...cart, producto]);}
    };

    const sumarCantidad = (prodAgregado) => {
        const carritoActualizado = cart.map((prodDelCart)=>{
            if(prodDelCart.id === prodAgregado.id){
                const prodActualizado  = {
                    ...prodDelCart, 
                    cantidad: prodAgregado.cantidad,
                };
                return prodActualizado;
            } else {
                return prodDelCart;
            }
        });
        setCart(carritoActualizado);
    };

    const sumaTotal = () => {
        let acc = 0;
        const copia = [...cart];
        copia.forEach((prod)=>{
            acc = acc + (prod.precio * prod.cantidad);
        });
        return acc;
    };


    const isInCart = (id) => cart.some((prod) => prod.id === id );

    const eliminarUno = (id) => {
        const prodFiltrados = cart.filter((prod)=> prod.id !== id)
        setCart(prodFiltrados);
    };

    const eliminarTodo = () => setCart([]);

    const totalUnidades = () => {
        let acumulador = 0
        const copiaCarrito = [...cart];
        copiaCarrito.forEach((prod)=>{
            acumulador = acumulador + prod.cantidad;
        });
        return acumulador;
    };

    const traerCantidadProducto = (id) => {
        const product = cart.find ((prod)=>prod.id === id)
        return product?.cantidad;
    };

    return (
    <CartContext.Provider value={{  
                                    cart, 
                                    addToCart,
                                    eliminarTodo, 
                                    eliminarUno, 
                                    sumarCantidad, 
                                    totalUnidades, 
                                    sumaTotal,
                                    traerCantidadProducto,
                                    }}>
        {children}
    </CartContext.Provider>
    );
};

export default Provider;