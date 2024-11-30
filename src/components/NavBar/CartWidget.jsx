import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import "./NavBar.scss"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { carrito , totalCantidad } = useContext(CartContext)
    return (
        
        <section className="nav-btn">
            <div className="nav-browse">
                <Link>
                    <img className="browser" src="public/img/browser.png" alt="" />
                </Link>
            </div>
            <div>
                <h2>|</h2>
            </div>
            <div className="nav-cart">
                <Link to="/carrito" id="cartwidget">
                    <img className="cart" src="/img/cart.png" alt="" />
                    {carrito.length !== 0 && <p>{totalCantidad()}</p>}
                </Link>
            </div>
            
            
        </section>
        
        
    )
}

export default CartWidget