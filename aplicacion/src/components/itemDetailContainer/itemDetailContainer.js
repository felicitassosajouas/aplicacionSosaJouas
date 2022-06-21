import {useState, useEffect} from 'react'
import {getProductById} from '../asyncmock'
import ItemDetail from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    //tengo que guardar las rta del useEffect en un ESTADO
    const [product, setProduct] = useState()

    const {productId} = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        })
    })

    return (
        <>
        <h2>
            Detalle del Producto
            <ItemDetail {...product} />
        </h2>
        </>
    )
}

export default ItemDetailContainer
