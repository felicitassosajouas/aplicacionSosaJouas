//uso useEffect para llamar los datos después de que el componente fue montado
import { useState, useEffect } from 'react'
//con llaves porque llamo a un elemento no un archivo
import { getProducts, getProductsByCategory } from '../asyncmock'
import ItemList from './itemList'
import {useParams} from 'react-router-dom'
const ItemListContainer = (props) => {
    
    //useState([]) --> comienza como un array vacío
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    const {categoryId} = useParams()

    //llamado a API antes del return
    useEffect(() => {
        setLoading(true)
        if(!categoryId){
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }else{
            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [categoryId])

    if(loading){
        return(
            <h2>Cargando...</h2>
        )
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            {/* le paso la props products con los productos */}
            {products.length > 0
                ?<ItemList  products={products}/>
                :<h1>No hay productos</h1>}
        </div>
    )
}
export default ItemListContainer