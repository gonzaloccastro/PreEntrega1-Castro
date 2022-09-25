import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <i>
            <FontAwesomeIcon icon={ faCartShopping } />
        </i>
    )
}

export default CartWidget;