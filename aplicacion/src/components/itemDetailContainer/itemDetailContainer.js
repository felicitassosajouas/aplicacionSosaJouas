import {useState, useEffect} from 'react'
//import {getProductById} from '../asyncmock'
import ItemDetail from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom'

//USANDO FIREBASE
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    
    //tengo que guardar las rta del useEffect en un ESTADO
    const [product, setProduct] = useState()

    const [loading, setLoading] = useState(true)
    
    //funcion que al ejecutarse reotnra todos los parámetros d la URL con los nombres que yo le asigné en APP.js
    const {productId} = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', productId)
        
        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() }
            setProduct(productFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        /* getProductById(productId).then( response => {
            setProduct(response)
        }) */
    },[productId])
    //console.log(product)

    if(loading) {
        return <h1>Cargando...</h1>
    }

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
