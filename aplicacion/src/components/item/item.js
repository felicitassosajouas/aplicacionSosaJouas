import './item.css'
import {useContext} from 'react'
import {Context} from '../../App'
//import {Link} from 'react-router-dom'
const Item = ({/* id, */ name, img, price}) => {
    
    const context = useContext(Context)
    console=log(context)
    return (
        <>
        <header>
            <h2>
            {name}
            </h2>
        </header>
        <div className="divContainer">
            <li className="card text-white bg-dark mb-3">
                <img src={img} alt={name}/>
                { '$' + price}
            </li>
            
        </div>
        {/* <footer>
            <Link to={`/detail/${id}`} className="Option">Ver Detalle</Link>
        </footer> */}
        </>
    )       
}
export default Item