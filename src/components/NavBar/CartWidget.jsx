import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import styled from 'styled-components';

import "./NavBar.scss"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { carrito , totalCantidad } = useContext(CartContext)
    return (
        
        <section className="nav-btn">
        <StyledWrapper>
            <div className="container">
                <input defaultChecked className="checkbox" type="checkbox" /> 
                <div className="mainbox">
                <div className="iconContainer">
                    <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                </div>
                <input className="search_input" placeholder="Búsqueda " type="text" />
                </div>
            </div>
        </StyledWrapper>
        
            <div>
                <h2 className="bar">|</h2>
            </div>

            <div className="nav-cart">
                <Link to="/carrito" id="cartwidget">
                    <img className="cart" src="/img/cart.png" alt="" />
                    {carrito.length !== 0 && <p className="total-detail">{totalCantidad()}</p>}
                </Link>
            </div>
            
            
        </section>
        
        
    )
}
const StyledWrapper = styled.div``//permite editar el browser


export default CartWidget