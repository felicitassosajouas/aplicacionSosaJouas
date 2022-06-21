import './nav.css'
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <div className="container-fluid">
            <Link to='/'>
                <h2> HOME </h2>
            </Link>
            <nav className="nav flex-column" id="nav">
                <Link to='/category/inicio'aria-current="page" href="#" style={{color:'rgb(181,217,164)'}} id="item" class="rounded-pill">INICIO</Link>
                <Link to='/category/portasahumerios' href="" style={{color:'rgb(181,217,164)'}} id="item" className="rounded-pill">PORTA SAHUMERIOS</Link>
                <Link to='/category/ceniceros'href="" style={{color:'rgb(181,217,164)'}} id="item" className="rounded-pill">CENICEROS</Link>
            </nav>
        </div>
    )
}
export default Nav