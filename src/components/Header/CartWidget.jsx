import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



const CartWidget = () => {

    const {totalUnidades} = useContext(CartContext);

    return (
        <div>
            <FontAwesomeIcon icon={ faCartShopping } />
            <span>
                {totalUnidades()}
            </span>
        </div>
    )
}

export default CartWidget;