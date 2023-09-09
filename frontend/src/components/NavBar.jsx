import React from "react";
import logo from "../assets/logo.png"
import "./NavBar.css"
export default function NavBar() {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgba(20, 20, 20, 0.8)"}}>
      <div className="container">
        <a href="##" className="navbar-brand mb-0 h1">
          <img src={logo} alt="Logo"
            className="d-inline-block align-top"
            width="150" height="60" />
        </a>

        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center p-10">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="##">Física</a></li>
                <li><a class="dropdown-item" href="##">Inglés</a></li>
                <li><a class="dropdown-item" href="##">Matemática</a></li>
                <li><a class="dropdown-item" href="##">Programación</a></li>
                <li><a class="dropdown-item" href="##">Portugués</a></li>
                <li><a class="dropdown-item" href="##">Química</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="##" className="nav-link">
                Sobre nosotros
              </a>
            </li>
            <li className="nav-item">
              <a href="##" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
  
          <button className="btn btn-outline-light d-sm-inline-block m-2">Iniciar sesión</button>
          <button className="btn btn-outline-primary d-sm-inline-block m-2">Registrarse</button>
    
        </div>
   
        
      </div>
    </nav>
  )
}