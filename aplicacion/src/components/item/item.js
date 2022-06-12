import './item.css'
import {link} from 'react'
const Item = ({id, name, img, price}) => {
    return (
        <>
        <div className="divContainer">
            <li className="card text-white bg-dark mb-3">
                {name}
                <img src={img} alt={name}/>
                { '$' + price}
            </li>
            <link to={`/detail/${id}`} className="Option">Ver Detalle</link>
        </div>
        </>
    )       
}
export default Item