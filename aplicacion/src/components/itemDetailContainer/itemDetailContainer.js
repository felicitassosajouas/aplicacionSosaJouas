import {useState, useEffect} from 'react'
import {getProductById} from '../asyncmock'
import ItemDetail from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    
    //tengo que guardar las rta del useEffect en un ESTADO
    const [product, setProduct] = useState()

    //funcion que al ejecutarse reotnra todos los parámetros d la URL con los nombres que yo le asigné en APP.js
    const {productId} = useParams()


    useEffect(() => {
        getProductById(productId).then( response => {
            setProduct(response)
        })
    })
    //console.log(product)


    return (
        <>
        <h2>
            Detalle del Producto
            <ItemDetail {...product}/>
        </h2>
        </>
    )
}

export default ItemDetailContainer
