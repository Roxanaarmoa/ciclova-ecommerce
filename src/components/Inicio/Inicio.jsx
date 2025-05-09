import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Inicio.scss"

const Inicio = () => {

    const [productos, setProductos] = useState([]);  
    const [cargando, setCargando] = useState(true);  

    useEffect(() => {
        const productosReferidos = collection(db, "products");

        getDocs(productosReferidos)
            .then((snapshot) => {
                const productosDb = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),  // Traemos toda la data del producto
                }));
                setProductos(productosDb); 
            })
            .catch((error) => console.log(error))
            .finally(() => setCargando(false));  // Terminamos la carga
    }, []);

    return (
        <main >
            <section className="box-main">
            <div className="inicial">
                        <h1 className="ciclova">CICLOVA</h1>
                        <p className="bike">TU BICI, TU MUNDO</p>
                    </div>
                    <Link to="/categoria/detalles" className="btn-catalogo">Ver catálogo</Link> 
                    
                    <a href="#section1" className="slid">v</a>
            </section>
                    
                


                {/* Branding */}
                <section className="brand" id="section1">
                <div className="brand-track">
                    <img className="brand-img" src="img/brand-cube.png" alt="Cube" />
                    <img className="brand-img" src="img/brand-merida.png" alt="Merida" />
                    <img className="brand-img" src="img/brand-venzo.png" alt="Venzo" />
                    <img className="brand-img" src="img/brand-topmega.png" alt="TopMega" />
                    <img className="brand-img" src="img/brand-trek.png" alt="Trek" />

                    {/* Duplico para el loop */}
                    <img className="brand-img" src="img/brand-cube.png" alt="Cube" />
                    <img className="brand-img" src="img/brand-merida.png" alt="Merida" />
                    <img className="brand-img" src="img/brand-venzo.png" alt="Venzo" />
                    <img className="brand-img" src="img/brand-topmega.png" alt="TopMega" />
                    <img className="brand-img" src="img/brand-trek.png" alt="Trek" />
                </div>
                </section>


                <section className="Backimg">
                
                {/* Card */}
                <article className="card-content">
                        
                        <Link to="/categorias/mountain"><img className="card-img" src="img/mountainbike_inicio.jpg" alt=""/></Link>
                        
                        <Link to="/categorias/ruta"><img className="card-img" src="img/rutera_inicio.jpg" alt=""/></Link>

                        <Link to="/categorias/urban"><img className="card-img" src="img/urbana_inicio.jpg" alt=""/></Link>
                        
                </article>

                <article className="article-content">
                    <div>
                        <img src="/img/delivery.png" alt="" />
                        <p className="second">Entrega rápida & gratuita</p>
                    </div>
                    <div>
                        <img src="/img/servicio.png" alt="" />
                        <p className="second">6 meses de servicio gratuito</p>
                    </div>
                    <div>
                        <img src="/img/componentes.png" alt="" />
                        <p className="second">Repuestos disponibles</p>
                    </div>
                </article>

                </section>
                


                


                
                



        </main>
    )
}

export default Inicio
