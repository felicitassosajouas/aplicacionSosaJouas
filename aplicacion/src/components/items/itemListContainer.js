//uso useEffect para llamar los datos después de que el componente fue montado
import { useState, useEffect } from 'react'
//con llaves porque llamo a un elemento no un archivo
import { getProducts, getProductsByCategory } from '../asyncmock'
import ItemList from './itemList'
import {useParams} from 'react-router-dom'
const ItemListContainer = (props) => {
    
    //useState([]) --> comienza como un array vacío
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()


    //llamado a API antes del return
    /* useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, []) */

    //SI LO SACO FUNCIONA Y NO SE BORRA TODO
    useEffect(() => {
        if(!categoryId){
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error=>{
                console.log(error)
            })
        }else {
            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error=>{
                console.log(error)
            })
        }  
    }, [categoryId])
    return (
        <div>
            <h1>{props.greeting}</h1>
            {/* le paso la props products con los productos */}
            <ItemList  products={products}/>
        </div>
    )
}
export default ItemListContainer