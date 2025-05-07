import React,{ useState} from "react";
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"



import "./NavBar.scss"



const NavBar = () =>{
    

    const [subMenuVisible, setSubMenuVisible] = useState(false); //submenú
    const [isNavbarHovered, setNavbarHovered] = useState(false); //color del navbar
    
    
    //Función para cambiar el color del navbar al pasar el mouse
    const handleNavbarMouseEnter = () => {
        setNavbarHovered(true);
    };

    // Función para restaurar el color del navbar al retirar el mouse
    const handleNavbarMouseLeave = () => {
        setNavbarHovered(false);
    };



    // Función para mostrar el submenú cuando se pasa el mouse por encima del enlace
    const handleMouseEnter = () => {
        setSubMenuVisible(true);
    };
    // Función para ocultar el submenú cuando se retira el mouse del enlace
    const handleMouseLeave = () => {
        setSubMenuVisible(false);
    };


    return(
        
        <header className={`navbar ${isNavbarHovered ? "navbar-hovered" : "nav-hovered"}`} // Clase dinámica
        onMouseEnter={handleNavbarMouseEnter}
        onMouseLeave={handleNavbarMouseLeave}>
            

            <div className="nav-logo">
                <Link to="/" >
                    <img className="logo" src="/img/logo.png" alt="logo" /> 
                </Link>
            </div>

            <div>
                <ul className="nav-links">

                    <li className="nav-link"><Link to="/">INICIO</Link></li>

                    <li className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><Link to="/categoria/detalles">BICICLETAS</Link >
                    {subMenuVisible && (

                            <ul className="submenu">
                                    <Link className="nav-menu" to="/categorias/mountain" >Mountain Bike</Link>
                                    
                                    <Link className="nav-menu" to="/categorias/ruta">Ruta</Link>
                                
                                    <Link className="nav-menu" to="/categorias/urban"  href="">Urbana</Link>
                                
                            </ul>)}
                    </li>
                </ul>
            </div>
            
            <CartWidget/>
        </header>
    )
}

export default NavBar