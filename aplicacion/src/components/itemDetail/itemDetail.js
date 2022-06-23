const ItemDetail = ({img, name, price, description }) => {
    return (
        <>
            <ul>
                <li>
                {name}
                </li>
                <li>
                <img src={img} alt={name}/>
                </li>
                <li>
                { '$' + price}
                </li>
                <li>
                {description}
                </li>
            </ul>
        </>
    )
}

export default ItemDetail