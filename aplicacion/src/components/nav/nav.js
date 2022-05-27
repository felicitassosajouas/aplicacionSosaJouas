import './nav.css'
const Nav = (props) => {
    console.log(props)
    return (
        <div>
        <nav class="nav flex-column">
            <a aria-current="page" href="#" style={{color:'rgb(181,217,164)'}} id="item" class="rounded-pill">INICIO</a>
            <a href="" style={{color:'rgb(181,217,164)'}} id="item" class="rounded-pill">PORTA SAHUMERIOS</a>
            <a href="" style={{color:'rgb(181,217,164)'}} id="item" class="rounded-pill">CENICEROS</a>
        </nav>
    </div>
    )
}
export default Nav