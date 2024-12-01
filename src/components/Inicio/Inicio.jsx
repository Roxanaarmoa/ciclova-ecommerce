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
        <main>
            <section>

            </section>
            <section className="box-main">
                <section className="">
                    <div className="inicial">
                        <h1 className="ciclova">CICLOVA</h1>
                        <p className="bike">TU BICI, TU MUNDO</p>
                    </div>
                    <Link to="/categoria/detalles" className="btn-catalogo">Ver catálogo</Link> 
                    <img src="/img/fondo-imagen.png" alt="" />
                    <a href="#section1" className="slid">v</a>
                </section>




                <section className="Backimg" id="section1">
                    <div >
                        {/* Carousel */}
                        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="description">
                                        <h2 >MÁXIMA VELOCIDAD</h2>
                                        <p>Desde el eficaz amortiguador IsoStrut hasta los ligeros tirantes sin pivote que absorben las vibraciones de los senderos.</p>
                                    </div>
                                    <button className="button-">Comprar ahora</button>
                                    <button className="button-2">Ver detalles</button>
                                    <img src="/img/1trek.png" className="d-block" alt="Slide 1" />
                                </div>

                                <div className="carousel-item">
                                <div className="description">
                                        <h2 >CARBONO LIGERA</h2>
                                        <p>Diseñado para ofrecer velocidad y eficacia en los singletracks gracias a su transmisión Shimano </p>
                                    </div>
                                    <button className="button-">Comprar ahora</button>
                                    <button className="button-2">Ver detalles</button>
                                    <img src="/img/2trek.png" className="d-block" alt="Slide 2" />
                                </div>
                                <div className="carousel-item">
                                <div className="description">
                                        <h2 >CICLISMO DE PISTA</h2>
                                        <p>Excelente para los nuevos ciclistas de pistas y para quienes la usan para su traslado diario por el campus.</p>
                                    </div>
                                    <button className="button-">Comprar ahora</button>
                                    <button className="button-2">Ver detalles</button>
                                    <img src="/img/3trek.png" className="d-block" alt="Slide 3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>            
                    <div>
                        <i className="btn-ver-mas">
                            <Link to="" className="btn-vermas">VER MÁS</Link>
                        </i>
                    </div>
                </section>
                


                <section className="section2">
                <article>
                
                    <h2 className="first-title">EXPERIENCIA EN EL MUNDO DE LAS BICICLETAS </h2>
                    <h2 className="second-title">CON UNA AMPLIA VARIEDAD PARA ELEGIR</h2>

                    <div class="item-list">
                    {cargando ? (
                                <p>Cargando productos...</p>
                            ) : (
                                <>
                                    
                                    {productos[2] && (
                                        <div className="item item2">
                                            <img src={productos[2].thumbnail} alt={productos[2].title} />
                                            <h3>{productos[2].title}</h3>
                                            <Link to={`/detalle/${productos[2].id}`} className="btn-vermas">Ver Detalles</Link>
                                        </div>
                                    )}
                                    {productos[6] && (
                                        <div className="item item3">
                                            <img src={productos[6].thumbnail} alt={productos[6].title} />
                                            <h3>{productos[6].title}</h3>
                                            <Link to={`/detalle/${productos[6].id}`} className="btn-vermas">Ver Detalles</Link>
                                        </div>
                                    )}
                                    {productos[3] && (
                                        <div className="item item4">
                                            <img src={productos[3].thumbnail} alt={productos[3].title} />
                                            <h3>{productos[3].title}</h3>
                                            <Link to={`/detalle/${productos[3].id}`} className="btn-vermas">Ver Detalles</Link>
                                        </div>
                                    )}
                                    {productos[4] && (
                                        <div className="item item5">
                                            <img src={productos[4].thumbnail} alt={productos[4].title} />
                                            <h3>{productos[4].title}</h3>
                                            <Link to={`/detalle/${productos[4].id}`} className="btn-vermas">Ver Detalles</Link>
                                        </div>
                                    )}
                                    
                                    {productos[11] && (
                                        <div className="item item6">
                                            <img src={productos[11].thumbnail} alt={productos[11].title} />
                                            <h3>{productos[11].title}</h3>
                                            <Link to={`/detalle/${productos[11].id}`} className="btn-vermas">Ver Detalles</Link>
                                        </div>
                                    )}
                                    {productos[12] && (
                                        <div className="item item7">
                                            <img src={productos[12].thumbnail} alt={productos[12].title} />
                                            <h3>{productos[12].title}</h3>
                                            <Link to={`/detalle/${productos[12].id}`} className="btn-vermas">Ver Detalles</Link>
                                        </div>
                                    )}
                                </>
                            )}
                    </div>

                    
                    
                    
                </article>




                <article className="article-content">
                    <div>
                        <img src="/img/delivery.png" alt="" />
                        <p className="second-title">Entrega rápida & gratuita</p>
                    </div>
                    <div>
                        <img src="/img/servicio.png" alt="" />
                        <p className="second-title">6 meses de servicio gratuito</p>
                    </div>
                    <div>
                        <img src="/img/componentes.png" alt="" />
                        <p className="second-title">Repuestos disponibles</p>
                    </div>
                </article>
                </section>
                
            </section>

        </main>
    )
}

export default Inicio
