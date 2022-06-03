//uso useEffect para llamar los datos después de que el componente fue montado
import { useState, useEffect } from 'react'
//con llaves porque llamo a un elemento no un archivo
import { getProducts } from '../asyncmock'
import ItemList from './itemList'
const ItemListContainer = (props) => {
    
    //useState([]) --> comienza como un array vacío
    const [products, setProducts] = useState([])

    //llamado a API antes del return
    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div>
            <h1>{props.greeting}</h1>
            {/* le paso la props products con los productos */}
            <ItemList  products={products}/>
        </div>
    )
}
export default ItemListContainer