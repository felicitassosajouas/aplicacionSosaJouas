import './nav.css'
const Nav = (props) => {
    return (
        <div className="container-fluid">
        <nav className="nav flex-column" id="nav">
            <a aria-current="page" href="#" style={{color:'rgb(181,217,164)'}} id="item" class="rounded-pill">INICIO</a>
            <a href="" style={{color:'rgb(181,217,164)'}} id="item" className="rounded-pill">PORTA SAHUMERIOS</a>
            <a href="" style={{color:'rgb(181,217,164)'}} id="item" className="rounded-pill">CENICEROS</a>
        </nav>
    </div>
    )
}
export default Nav