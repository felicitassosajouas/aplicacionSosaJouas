import './item.css'
const Item = ({name, img, price}) => {
    return (
        <div className="divContainer">
            <li className="card text-white bg-dark mb-3">
                {name}
                <img src={img} alt={name}/>
                { '$' + price}
            </li>
        </div>
    )
}
export default Item