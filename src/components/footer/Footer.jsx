import React from "react";
import { Link } from "react-router-dom"

import "./Footer.scss"


const Footer = () =>{
    return(
        <footer>
          <div class="footer-section">
            <img src="/img/logo.png" alt="Logo de empresa" class="logo-footer"/>
            <p>Datos que te llevan más lejos, como una buena bicicleta.</p>
    </div>

    <div class="footer-section">
      <h4>Enlaces</h4>
      <a href="#">Inicio</a>
      <a href="/categoria/detalles">Productos</a>
      <a href="#">Blog</a>
      <a href="#">Empleos</a>
    </div>

    <div class="footer-section">
      <h4>Contacto</h4>
      <a href="mailto:info@ejemplo.com">roxanarmoa@gmail.com</a>
      <a href="#" class="btn">¡Escríbenos!</a>
    </div>

  </footer>
    )
}

export default Footer