import {useState, useContext} from 'react'
import CartContext from '../../context/cartContext'
import { Link } from 'react-router-dom'
const ItemDetail = ({img, name, price, description, id, stock, ItemCount}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const [inputType, setInputType] = useState('button')
    

    const {addItem} = useContext(CartContext)

    
    const changeCount = () => {
        const input = inputType === 'button' ? 'input' : 'button'

        setInputType(input)
    }


    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} ${name}`)
        addItem({id, name, price, quantity})
        setQuantityAdded(quantity)
    }

    //en COUNT guardo el nom d referencia de los componentes
    //si inpuType es button contiene el componente button
    //si inputCount es button contiene el componente inputCount
    //const Count = inputType === 'button' ? ButtonCount : InputCount

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
            <button onClick={changeCount}> Cambiar formato del contador</button>
            {inputType === 'button' 
                ? <ButtonCount initial={0} stock={15} title='Carrito' onAdd={handleOnAdd}/>
                : <InputCount onAdd={handleOnAdd} stock={15} title='Carrito'/>
            }
            { quantityAdded === 0 
                    ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                    :  <Link to='/cart'>Terminar compra</Link>
                }

            {/* Ahora traigo la const count/ otra forma d hacerl lo d la línea 39
            <Count stock={stock}/> */}
        </>
    )
}

const ButtonCount = ({onAdd, stock, title, initial=0}) => {

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

    return(
        <div>
            <h3>{title}</h3>
            <h2> {count} </h2>
            <button onClick={decrement}> - </button>
            <button onClick={increment}> + </button>
            <button onClick={() => onAdd(count)}> Agregar al carrito </button>
        </div>
    )
}

const InputCount = ({onAdd, stock, initial=0}) => {
    const [count, setCount] = useState(initial)
    
    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }
    return ( 
        <div>
            <input type='number' onChange={handleChange} value={count} />
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemDetail
//export default ButtonCount