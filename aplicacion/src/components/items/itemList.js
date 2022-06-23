import Item from '../item/item'
import './itemList.css'
//la lista viene del componente padre (products)
const ItemList = ({products}) => {
    return (
        <div className="card-body text-dark">
            <ul className="card-title" id="itemList"> 
                {products.map(prod => <Item key={prod.id} {...prod}/>)} 
            </ul>
        </div>)
}

export default ItemList