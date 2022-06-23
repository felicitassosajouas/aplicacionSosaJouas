import { useState } from 'react'
//import Button from '../button/button'
//import App from '../../App'
const Counter = ({initial, stock, title, onAdd}) => {
    
    const [count, setCount] = useState(initial)
    const decrement = () => {
        if(count > 0){
            setCount(count - 1) 
        }
    }

    const increment = () => {
        if(count < stock) {
        setCount(count + 1)
        }
    }

    /* const reset = () => {
        setCount(initial)
    } */

    return(
        <div>
            <h3>{title}</h3>
            
            <button onClick={decrement}> - </button>
            
            <h2> {count} </h2>
            
            <button onClick={increment}> + </button>
            {/* <button onClick={reset}><h2>RESET</h2></button> */}
            <button onClick={() => onAdd()}> Agregar al carrito </button>
        </div>
    )
}

export default Counter