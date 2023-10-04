/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/logo.png"
import "./NavBar.css"
import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgba(30,30,30, 0.7)" }}>
      <div class="container">

        {/* LOGO */}
        <Link to="/" className="navbar-brand mb-0 h1">
          <img src={logo} alt="Logo"
            className="d-inline-block align-top"
            width="150" height="60" />
        </Link>


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
          <div class="offcanvas-header text-white">
            <Link href="/login" className="log text-primary ms-3"><i class="login-icon bi bi-person-circle"></i></Link>
            <button type="button" class="btn-close btn-close-white shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body">
            {/* NavITEMS */}
            <ul class="navbar-nav justify-content-center fs-5 flex-grow-1 pe-0">
              <li class="nav-item mx-2">
                <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li class="nav-item dropdown mx-2">
                <Link class="nav-link dropdown-toggle" to="/categorias"
                  role="button">
                  Categorias
                </Link>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><Link class="dropdown-item" to="/categorias/fisica" >Física</Link></li>
                  <li><Link class="dropdown-item" to="/categorias/idiomas">Idiomas</Link></li>
                  <li><Link class="dropdown-item" to="/categorias/matematica">Matemática</Link></li>
                  <li><Link class="dropdown-item" to="/categorias/musica">Musica</Link></li>
                  <li><Link class="dropdown-item" to="/categorias/programacion">Programación</Link></li>
                  <li><Link class="dropdown-item" to="/categorias/quimica">Química</Link></li>
                </ul>
              </li>

              <li class="nav-item mx-md-2">
                <Link class="nav-link" to="/sobreNosotros">Sobre nosotros</Link>
              </li>
              <li class="nav-item mx-md-2">
                <Link class="nav-link" to="/contacto">Contacto</Link>
              </li>

            </ul>
            {/* Login / Sign Up */}
            <div className="div-login d-none d-lg-block mt-1">
              <Link role="button" to="/login" className="login log btn btn-link text-white">Iniciar sesión</Link>
              <Link role="button" to="/registro" className="login register btn btn-outline-info text-white">Registrarse</Link>
            </div>

          </div>
        </div>
      </div >
    </nav >
  );
}
