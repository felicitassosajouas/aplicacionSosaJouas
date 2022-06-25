import { createContext, useState } from "react"
//encierro en la const todos los componentes que quiero que accedan al componente

const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalQuantity] = useState(0)
    console.log(cart)
    
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        }
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter( prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return(
            cart.some(prod=> prod.id === id)
        )
    }

    const getCartQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        return(
            totalQuantity
        )
    }


        return (
        <CartContext.Provider value={{cart, addItem, isInCart, removeItem, getCartQuantity, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext