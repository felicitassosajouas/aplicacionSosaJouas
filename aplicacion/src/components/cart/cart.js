import './cart.css'

const Cart = () => {

    const totalQuantity = getCartQuantity()
    return(
        <div>
            <img src="/images/cart.png" alt="carrito" className="cartImg"/>
            {totalQuantity}
        </div>
    )
}

export default Cart