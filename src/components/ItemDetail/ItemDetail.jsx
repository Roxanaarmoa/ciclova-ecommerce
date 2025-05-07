import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount"


import "./ItemDetail.scss"


//muestra de busqueda
const ItemDetail = ({ product }) => {
    
    //para que se muestren los productos en carrito
    const[toggle ,setToggle] = useState(false);

    const {añadirProducto} = useContext(CartContext)
    

    //para que se vea en el carrito el contador
    const agregarAlCarrito = (contador) => {
        const productoNuevo = { ...product, cantidad: contador }
        añadirProducto(productoNuevo)
        setToggle(true)
    }

    return(
        <div className="bg">
            <div className="product-detail">
                <img className="imgdetail" src={product.thumbnail} alt={product.title} />
            <div >
                <h2 className="titledetail">{product.title}<b className="bold">|</b></h2>
                <p className="description">{product.description}</p>
                <p className="price">${product.price}</p>
                {
                    toggle ? (
                        <div className="terminar-compra">
                            <div  >
                                <Link className="compra" to="/carrito">Terminar mi compra</Link>
                            </div>
                            <div>
                                <Link className="compra" to="/">Seguir comprando</Link>
                            </div>
                        </div>
                        ) :(
                        <ItemCount
                        stock={product.stock}
                        agregarAlCarrito={agregarAlCarrito}
                        />
                    )}
                </div>
            </div>
        </div>
    );//en itemcount se envia por data.js
};


export default ItemDetail;