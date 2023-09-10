/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/logo.png"
import "./NavBar.css"
export default function NavBar() {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"rgba(30,30,30, 0.5)"}}>
  <div class="container">

    {/* LOGO */}
    <a href="##" className="navbar-brand mb-0 h1">
          <img src={logo} alt="Logo"
            className="d-inline-block align-top"
            width="150" height="60" />
        </a>


    {/* TOGGLE BUTTON */}
    <button 
    class="navbar-toggler shadow-none border-0" 
    type="button" 
    data-bs-toggle="offcanvas" 
    data-bs-target="#offcanvasNavbar" 
    aria-controls="offcanvasNavbar" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    {/* SIDEBAR */}
    <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header text-white border-bottom">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close btn-close-white shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">

        {/* NavITEMS */}
        <ul class="navbar-nav justify-content-center fs-5 flex-grow-1 pe-0">
          <li class="nav-item mx-2">
            <a class="nav-link active" aria-current="page" href="#inicio">Inicio</a>
          </li>
          <li class="nav-item dropdown mx-2">
            <a class="nav-link dropdown-toggle" href="#categorias"
             role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#fisica">Física</a></li>
                <li><a class="dropdown-item" href="#ingles">Inglés</a></li>
                <li><a class="dropdown-item" href="#matematica">Matemática</a></li>
                <li><a class="dropdown-item" href="#programacion">Programación</a></li>
                <li><a class="dropdown-item" href="#portugues">Portugués</a></li>
                <li><a class="dropdown-item" href="#quimica">Química</a></li>
            </ul>
        </li>

          <li class="nav-item mx-2">
            <a class="nav-link" href="#nosotros">Sobre nosotros</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#contacto">Contacto</a>
          </li>

        </ul>
          {/* Login / Sign Up */}
          <div className="div-login d-flex align-items-start pt-2">
          <button className="login log btn btn-link text-white">Iniciar sesión</button>
          <button className="login register btn btn-outline-info text-white"
          style={{border: "1.5px solid #006668"}}>Registrarse</button>
          </div>
          
      </div>
    </div>
  </div>
</nav>
);
  }
