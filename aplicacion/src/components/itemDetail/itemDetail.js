import './ItemDetail.css'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${name}`)
        addItem({ id, name, price, quantity})
        setQuantityAdded(quantity)
    }
const InputCount = ({onAdd, /* stock, */ initial=1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        //if(e.target.value <= stock) {
            setCount(e.target.value)
        //}
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(parseInt(count))}>Agregar al carrito</button>
        </div>
    )
}
const ButtonCount = ({ onAdd, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) setCount(count + 1)
        setCount(count)
    }

    const decrement = () => {
        if(count > 0) setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({id, img, name, price, description, stock}) => {

    //console.log(setCart)

    const [inputType, setInputType] = useState('button')

    const changeCount = () => {
        const input = inputType === 'button' ? 'input' : 'button'

        setInputType(input)
    }

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${name}`)
        setCart([...cart, {id, name, price, quantity}])
    }

    const Count = inputType === 'button' ? ButtonCount : InputCount

    return (
        <>
            <ul>
                <li>
                {name}
                </li>
                <li>
                <img src={img} alt={name}/>
                </li>
                <li>
                { '$' + price}
                </li>
                <li>
                {description}
                </li>
            </ul>
            <button onClick={changeCount}>
                Cambiar Contador
            </button>
            <Count onAdd={handleOnAdd} stock={stock}/>
        </>
    )
}

export default ItemDetail