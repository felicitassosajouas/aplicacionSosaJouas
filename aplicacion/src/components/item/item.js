import './item.css'
//AGREGO ESTE LINK Y DEJA DE MOSTRAR LA LIST
//import { Link } from 'react-router-dom'
const Item = ({/* id, */ name, img, price}) => {
    return (
        <>
            <div className="divContainer">
                <li className="card text-white bg-dark mb-3">
                    {name}
                    <img src={img} alt={name}/>
                    { '$' + price}
                </li>
                {/* <Link to={`/detail/${id}`} className='Option'>
                    <h3>Ver detalle</h3>
                </Link> */}
            
            </div>
        </>
    )       
}
export default Item