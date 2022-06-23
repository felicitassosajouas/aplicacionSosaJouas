import './nav.css'
import { Link /* , NavLink */ } from 'react-router-dom'
//NAVLINK permite pasar un función en el className

const Nav = () => {
    return (
        <div className="container-fluid" id="navBar">
            <nav className="nav flex-column" id="nav">      
                    {/* NO FUNCIONA ESE LINK */}
                    <Link to='/'>
                        <h3 className="item"> INICIO </h3>
                    </Link>
                    <Link to='/category/portasahumerios'>
                        <h3 className="item"> PORTA SAHUMERIOS </h3>
                    </Link>
                    <Link to='/category/ceniceros'>
                        <h3 className="item"> CENICEROS </h3>
                    </Link>
            </nav>
        </div>
    )
}
export default Nav